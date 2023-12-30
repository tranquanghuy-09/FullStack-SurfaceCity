package vn.edu.iuh.fit.frontend.controllers;

import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;
import vn.edu.iuh.fit.backend.models.Employee;
import vn.edu.iuh.fit.backend.models.Product;
import vn.edu.iuh.fit.backend.repositories.ProductRepository;
import vn.edu.iuh.fit.backend.services.EmployeeServices;
import vn.edu.iuh.fit.backend.services.ProductServices;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

@Controller
public class HomeController {
    @Autowired
    private ProductServices productServices;
    @Autowired
    private ProductRepository productRepository;
    @Autowired
    private EmployeeServices employeeServices;

    @GetMapping({"", "/", "/products"})
    public ModelAndView home(HttpSession session, Model model,
                       @RequestParam("page") Optional<Integer> page,
                       @RequestParam("size") Optional<Integer> size) {
        ModelAndView modelAndView = new ModelAndView();
        Object oQtyCart = session.getAttribute("qtyCart");
        int qtyCart = 0 ;
        if(oQtyCart!=null){
            qtyCart = (int) oQtyCart;
        }
        modelAndView.addObject("qtyCart", qtyCart);

        int currentPage = page.orElse(0);
        int pageSize = size.orElse(8);
        Page<Product> productPage = productServices.findPaginated(currentPage, pageSize, "productId", "asc");
        for (Product product : productPage.getContent()
             ) {
            System.out.println(product);
        }
        modelAndView.addObject("productPage", productPage);

        int totalPages = productPage.getTotalPages();
        if(totalPages>0){
            List<Integer> pageNumbers = IntStream.rangeClosed(1, totalPages).boxed()
                    .collect(Collectors.toList());
            modelAndView.addObject("pageNumbers", pageNumbers);
        }
        modelAndView.setViewName("client/index");
        return modelAndView;
    }

//    @GetMapping("/login")
//    public String login(){
//        return "client/login";
//    }
    @GetMapping("/login")
    public ModelAndView login(HttpSession session) {
        ModelAndView modelAndView = new ModelAndView();
        Object object = session.getAttribute("customer");
        modelAndView.addObject("customer", object);

        modelAndView.setViewName("client/login");
        modelAndView.addObject("email", "");

        return modelAndView;
    }

    @PostMapping("/login")
    public ModelAndView login(@ModelAttribute("email") String email, HttpSession session) {
        ModelAndView modelAndView = new ModelAndView();

        Optional<Employee> employee = employeeServices.login(email);

        if (employee.isPresent()) {
            session.setAttribute("employee", employee.get());
            modelAndView.setViewName("redirect:/");
        } else {
            modelAndView.addObject("email", email);
            modelAndView.setViewName("redirect:/login");
        }


        return modelAndView;
    }

}
