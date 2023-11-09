package vn.edu.iuh.fit.frontend.models;

import vn.edu.iuh.fit.backend.models.Order;
import vn.edu.iuh.fit.backend.services.OrderService;

public class OrderModel {
    private final OrderService orderService = new OrderService();

    public boolean insert(Order order) {
        return orderService.insert(order);
    }
}
