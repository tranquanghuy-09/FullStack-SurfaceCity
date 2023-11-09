package vn.edu.iuh.fit.frontend.models;

import vn.edu.iuh.fit.backend.models.Customer;
import vn.edu.iuh.fit.backend.services.CustomerService;

public class CustomerModel {
    private final CustomerService customerService = new CustomerService();

    public boolean insert(Customer customer) {
        return customerService.insert(customer);
    }
}
