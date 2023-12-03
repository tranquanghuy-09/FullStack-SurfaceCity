package vn.edu.iuh.fit.frontend.controllers;

import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;
import vn.edu.iuh.fit.backend.models.Product;
import vn.edu.iuh.fit.backend.models.ProductImage;
import vn.edu.iuh.fit.backend.models.ProductPrice;
import vn.edu.iuh.fit.backend.repositories.ProductImageRepository;
import vn.edu.iuh.fit.backend.repositories.ProductPriceRepository;
import vn.edu.iuh.fit.backend.repositories.ProductRepository;
import vn.edu.iuh.fit.frontend.dto.CartItem;

import java.util.*;

@Controller
@RequestMapping("/")
public class ClientController {
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private ProductPriceRepository productPriceRepository;
    @Autowired
    private ProductImageRepository productImageRepository;

    @GetMapping("/product/{id}")
    public String detail(@PathVariable("id") Long id, Model model, HttpSession session){
        Object oQtyCart = session.getAttribute("qtyCart");
        int qtyCart = 0 ;
        if(oQtyCart!=null){
            qtyCart = (int) oQtyCart;
        }
        model.addAttribute("qtyCart", qtyCart);
        System.out.println(">>>>>>>>>>>>>>" + id);
        Optional<Product> productOptional = productRepository.findById(id);
        if (productOptional.isPresent()) {
            Product product = productOptional.get();
            System.out.println(product);
            List<ProductImage> productImages = productImageRepository.findAllByProduct(product);
            System.out.println(productImages);
            List<ProductPrice> productPrices = productPriceRepository.findAllByProduct(product);

            model.addAttribute("product", product);
            model.addAttribute("productImages", productImages);
            model.addAttribute("productPrices", productPrices);

            return "client/product-detail";
        } else {
            System.out.println("Product not found for id: " + id);
            return "redirect:/error";
        }
    }

    @GetMapping("/cart")
    public ModelAndView cart (HttpSession session){
        ModelAndView modelAndView = new ModelAndView();
        Object obj = session.getAttribute("cart");
        Object oqty = session.getAttribute("qtyCart");
        Map<Long, CartItem> cartItems = null;
        int qtyCart = 0;
        if (obj==null){
            cartItems = new HashMap<>();
        }else{
            cartItems = (Map<Long, CartItem>) obj;
        }
        if(oqty!=null){
            qtyCart = (int) oqty;
        }

        List<CartItem> list = new ArrayList<>(cartItems.values());

//        session.setAttribute("cart", cartItems);
        modelAndView.addObject("cartItems", list);
        modelAndView.addObject("qtyCart", qtyCart);
        modelAndView.setViewName("client/cart");

        return modelAndView;
    }

    @GetMapping("/cart/{id}")
    public ModelAndView addToCart (@PathVariable("id") long id, HttpSession session){
        ModelAndView modelAndView = new ModelAndView();
        Object obj = session.getAttribute("cart");
        Object oqty = session.getAttribute("qtyCart");
        Map<Long, CartItem> cartItems = null;
        int qtyCart = 0;
        if(oqty!=null){
            qtyCart = (int) oqty;
        }
        if (obj==null){
            cartItems = new HashMap<>();
        }else{
            cartItems = (Map<Long, CartItem>) obj;
        }
        Product product = productRepository.findById(id).get();
        int quantity = cartItems.get(product.getProduct_id()) == null ? 1 : cartItems.get(product.getProduct_id()).getSoLuong() + 1;

        CartItem item = new CartItem(product, quantity);
        cartItems.put(id, item);
        qtyCart++;


        session.setAttribute("cart", cartItems);
        session.setAttribute("qtyCart",qtyCart);

//        modelAndView.addObject("cartItems", cartItems);
        modelAndView.setViewName("redirect:/");

        return modelAndView;
    }

    @GetMapping("/checkout")
    public ModelAndView checkout(HttpSession session){
        ModelAndView modelAndView = new ModelAndView();

        Object obj = session.getAttribute("cart");

        if(obj == null){
            modelAndView.setViewName("client/index");
        }

        return modelAndView;
    }
}
