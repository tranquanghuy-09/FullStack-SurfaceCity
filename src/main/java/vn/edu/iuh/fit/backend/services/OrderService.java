package vn.edu.iuh.fit.backend.services;

import vn.edu.iuh.fit.backend.models.Order;
import vn.edu.iuh.fit.backend.repositories.OrderRepository;

public class OrderService {
    private final OrderRepository orderRepository = new OrderRepository();

    public boolean insert(Order order) {
        return orderRepository.insert(order);
    }
}
