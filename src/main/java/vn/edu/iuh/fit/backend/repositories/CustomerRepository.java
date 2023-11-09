package vn.edu.iuh.fit.backend.repositories;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import vn.edu.iuh.fit.backend.models.Customer;

public class CustomerRepository extends CRUDAbstractRepository<Customer>{
    private final Logger logger = LoggerFactory.getLogger(this.getClass().getName());

    public CustomerRepository() {
        super();
    }

}
