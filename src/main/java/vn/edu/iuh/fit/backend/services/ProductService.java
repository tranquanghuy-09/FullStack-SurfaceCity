package vn.edu.iuh.fit.backend.services;

import jakarta.inject.Inject;
import vn.edu.iuh.fit.backend.models.Product;
import vn.edu.iuh.fit.backend.repositories.ProductRepository;

import java.util.List;
import java.util.Optional;

public class ProductService {
    ProductRepository productRepository = new ProductRepository();

    public boolean insertEmp(Product product) {
        return productRepository.insert(product);
    }
    public boolean update(Product product) {
        return productRepository.update(product);
    }
    public List<Product> getAll(){
        return productRepository.getAll();
    }
    public Optional<Product> findById(long id) {
        return productRepository.findById(id);
    }
}
