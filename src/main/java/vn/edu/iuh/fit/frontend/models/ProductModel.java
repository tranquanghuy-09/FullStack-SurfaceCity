package vn.edu.iuh.fit.frontend.models;

import vn.edu.iuh.fit.backend.models.Product;
import vn.edu.iuh.fit.backend.services.ProductService;

import java.util.List;
import java.util.Optional;

public class ProductModel {
    private final ProductService productService = new ProductService();

    public List<Product> getAll(){
        return productService.getAll();
    }
    public Optional<Product> findById(long id) {
        return productService.findById(id);
    }
}
