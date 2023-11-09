package vn.edu.iuh.fit.backend.services;

import vn.edu.iuh.fit.backend.models.OrderDetail;
import vn.edu.iuh.fit.backend.repositories.OrderDetailRepository;

public class OrderDetailService {
    private final OrderDetailRepository orderDetailRepository = new OrderDetailRepository();

    public boolean insert(OrderDetail orderDetail) {
        return orderDetailRepository.insert(orderDetail);
    }
}
