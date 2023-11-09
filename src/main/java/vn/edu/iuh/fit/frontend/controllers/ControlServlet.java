package vn.edu.iuh.fit.frontend.controllers;

import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import vn.edu.iuh.fit.backend.models.*;
import vn.edu.iuh.fit.backend.services.ProductService;
import vn.edu.iuh.fit.frontend.models.*;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.Flow;

@WebServlet(urlPatterns = {"/control-servlet"})
public class ControlServlet extends HttpServlet {
    private final ProductModel productModel = new ProductModel();
    private final OrderModel orderModel = new OrderModel();
    private final OrderDetailModel orderDetailModel = new OrderDetailModel();
    private final CustomerModel customerModel = new CustomerModel();
    private final ProductPriceModel productPriceModel = new ProductPriceModel();
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String action = req.getParameter("action");
        switch (action){
            case "getListProduct":
                handleGetListProduct(req, resp);
                break;
            case "addToCart":
                handleAddToCart(req, resp);
                break;
            case "successfulPurchase":
                handleSuccessfulPurchase(req, resp);
                break;
        }
    }

    private void handleSuccessfulPurchase(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        HttpSession session = req.getSession();
        session.invalidate();
        resp.sendRedirect("index.jsp");
    }

    private void handleAddToCart(HttpServletRequest req, HttpServletResponse resp) throws IOException, ServletException {
        long idProduct = Integer.parseInt(req.getParameter("id"));
        HttpSession session = req.getSession();
        List<CartDetail> cartDetailList = (List<CartDetail>) session.getAttribute("cartDetailList");
        if (cartDetailList==null){
            cartDetailList = new ArrayList<>();
        }

        Optional<Product> optionalProduct = productModel.findById(idProduct);
        if (optionalProduct.isPresent()){
            Product product = optionalProduct.get();
            CartDetail cartDetail = new CartDetail(product, 1);
            cartDetailList.add(cartDetail);

        }
        session.setAttribute("cartDetailList", cartDetailList);
        resp.sendRedirect("index.jsp");
    }

    private void handleGetListProduct(HttpServletRequest req, HttpServletResponse resp) throws IOException, ServletException {
        List<Product> productList = productModel.getAll();
        for (Product p : productList) {
            System.out.println(p);
//            ProductImage productImage = p.getProductImageList().get(0);
//            System.out.println(productImage);
//            ProductPrice productPrice = p.getProductPriceList().get(0);
//            System.out.println(productPrice);
        }
        HttpSession session = req.getSession();
        session.setAttribute("productList", productList);
        RequestDispatcher requestDispatcher = req.getRequestDispatcher("index.jsp");
        requestDispatcher.forward(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String action = req.getParameter("action");
        switch (action){
            case "buyGoods":
                handleBuyGoods(req, resp);
                break;
        }
    }

    private void handleBuyGoods(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String hoTen = req.getParameter("hoTen");
        String soDienThoai = req.getParameter("soDienThoai");
        String email = req.getParameter("email");

        String tinhThanh = req.getParameter("tinhThanh");
        String quanHuyen = req.getParameter("quanHuyen");
        String phuongXa = req.getParameter("phuongXa");
        String soNhaDuong = req.getParameter("soNhaDuong");
        String address = soNhaDuong + ", " + phuongXa + ", " + quanHuyen + ", " + tinhThanh;

        Customer customer = new Customer(address, email, hoTen, soDienThoai);
        HttpSession session = req.getSession();
        Object objCartDetailList = session.getAttribute("cartDetailList");
        Employee employee = (Employee) session.getAttribute("employee");
        System.out.println(employee);

        List<OrderDetail> orderDetailList = new ArrayList<>();
        if (objCartDetailList != null){
            customerModel.insert(customer);
            List<CartDetail> list = (List<CartDetail>) objCartDetailList;
            Order order = new Order(LocalDateTime.now(), customer, employee);
            System.out.println(order);
            orderModel.insert(order);

            for (CartDetail cartDetail: list){
                Product product = cartDetail.getProduct();
                Long proId = product.getProduct_id();
                OrderDetail orderDetail = new OrderDetail(productPriceModel.getProductByIdWithNewPrice(proId).getPrice() * cartDetail.getQuantity(),
                        order, cartDetail.getQuantity(), "", product);
                System.out.println(orderDetail);
                orderDetailModel.insert(orderDetail);
            }

            session.setAttribute("cartDetailList", null);
            session.setAttribute("customer", customer);
            req.getRequestDispatcher("successfulpurchase.jsp").forward(req, resp);
        }

    }


}
