package vn.edu.iuh.fit.frontend.models;


import vn.edu.iuh.fit.backend.models.OrderDetail;
import vn.edu.iuh.fit.backend.services.OrderDetailService;

public class OrderDetailModel {
    private final OrderDetailService orderDetailService = new OrderDetailService();

    public boolean insert(OrderDetail orderDetail) {
        return orderDetailService.insert(orderDetail);
    }
}
