package vn.edu.iuh.fit.frontend.controllers;

import jakarta.servlet.http.HttpSession;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import vn.edu.iuh.fit.backend.enums.ProductStatus;
import vn.edu.iuh.fit.backend.models.Product;
import vn.edu.iuh.fit.backend.models.ProductImage;
import vn.edu.iuh.fit.backend.models.ProductPrice;
import vn.edu.iuh.fit.backend.repositories.ProductImageRepository;
import vn.edu.iuh.fit.backend.repositories.ProductPriceRepository;
import vn.edu.iuh.fit.backend.repositories.ProductRepository;
import vn.edu.iuh.fit.backend.services.ProductPriceServices;
import vn.edu.iuh.fit.backend.services.ProductServices;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@Slf4j
@Controller
@RequestMapping("/admin")
public class ProductController {
    @Autowired
    private ProductServices productServices;
    @Autowired
    private ProductPriceServices productPriceServices;
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private ProductImageRepository productImageRepository;
    @Autowired
    private ProductPriceRepository productPriceRepository;

    private final String UPLOAD_DIRECTORY = System.getProperty("user.dir") + "\\src\\main\\resources\\static\\assets";

    @GetMapping("/products")
    public String showProductListPaging(
            HttpSession session,
            Model model,
            @RequestParam("page") Optional<Integer> page,
            @RequestParam("size") Optional<Integer> size) {
        int currentPage = page.orElse(1);
        int pageSize = size.orElse(10);

        Page<Product> candidatePage = productServices.findPaginated(currentPage - 1,
                pageSize, "productId", "asc");
        System.out.println(candidatePage.stream().toList());

        model.addAttribute("productPage", candidatePage);

        int totalPages = candidatePage.getTotalPages();
        if (totalPages > 0) {
            List<Integer> pageNumbers = IntStream.rangeClosed(1, totalPages)
                    .boxed()
                    .collect(Collectors.toList());
            model.addAttribute("pageNumbers", pageNumbers);
        }
        return "admin/product/listing";
    }

    @GetMapping("/products/show-add-form")
    public String add(Model model) {
        Product product = new Product();
        model.addAttribute("product", product);
        return "admin/product/add-form";
    }

    @PostMapping("/products/add")
    public String addProduct(
            @ModelAttribute("product") Product product,
            BindingResult result, Model model) {
        productRepository.save(product);
        return "redirect:/admin/products";
    }

    @GetMapping("/products/update")
    public String preUpdate(@RequestParam("id") long productId, Model model){
        Optional<Product> productOptional = productRepository.findById(productId);
        if (productOptional.isPresent()){
            Product product = productOptional.get();
            Optional<ProductPrice> productPrice = productPriceServices.findNewPrice(product);
            List<ProductImage> productImages = productImageRepository.findAllByProduct(product);

            if (productImages.isEmpty()){
                model.addAttribute("productImage", "https://mdbootstrap.com/img/Photos/Others/placeholder.jpg");
            }else{
                model.addAttribute("productImage", productImages.get(0).getPath());
            }
            if (productPrice.isPresent()){
                model.addAttribute("productPrice", productPrice.get());
            }
            model.addAttribute("product", product);

            return "admin/product/update";

        }
        return "redirect:/admin/products";
    }

    @Transactional
    @PostMapping("products/update")
    public String update(@ModelAttribute("product") Product product,
                         @ModelAttribute("productPrice") ProductPrice productPrice,
                         @RequestParam("img") MultipartFile file){
        try{
            productRepository.save(product);

            productPrice.setProduct(product);
            productPrice.setPrice_date_time(LocalDateTime.now());
            productPriceRepository.save(productPrice);

            String[] split = Objects.requireNonNull(file.getOriginalFilename()).split("\\.");
            String fileName = "product_"+product.getProduct_id() + "_" + UUID.randomUUID() + '.' + split[split.length - 1];
            Path fileNameAndPath = Paths.get(UPLOAD_DIRECTORY, fileName);
            Files.write(fileNameAndPath, file.getBytes());

            ProductImage productImage = new ProductImage(fileName, product.getName(), product);
            productImageRepository.save(productImage);

            return "redirect:/admin/products";
        }catch (Exception e){
            log.error(e.getMessage());
        }
        return "redirect:/admin/product/"+product.getProduct_id();
    }

    @Transactional
    @GetMapping("/products/delete")
    public String delete(@RequestParam("pro-id") long productId, RedirectAttributes redirectAttributes) {
        Integer delete = productServices.delete(productId);

        if (delete != null && delete > 0) {
            redirectAttributes.addFlashAttribute("deleteSuccess", true);
        }

        return "redirect:/admin/products";
    }

    @GetMapping("/product/{id}")
    public String detail(HttpSession session, @PathVariable("id") long id, Model model){
        Object oQtyCart = session.getAttribute("qtyCart");
        int qtyCart = 0 ;
        if(oQtyCart!=null){
            qtyCart = (int) oQtyCart;
        }
        model.addAttribute("qtyCart", qtyCart);

        Optional<Product> productOptional = productRepository.findById(id);
        Product product = productOptional.get();
        List<ProductImage> productImages = productImageRepository.findAllByProduct(product);
        List<ProductPrice> productPrices = productPriceRepository.findAllByProduct(product);

        model.addAttribute("product", product);
        model.addAttribute("productImages", productImages);
        model.addAttribute("productPrices", productPrices);

        return "admin/product/detail";
    }

}
