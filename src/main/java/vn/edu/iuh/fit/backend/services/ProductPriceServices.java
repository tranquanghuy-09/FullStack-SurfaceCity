package vn.edu.iuh.fit.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.edu.iuh.fit.backend.models.Product;
import vn.edu.iuh.fit.backend.models.ProductPrice;
import vn.edu.iuh.fit.backend.repositories.ProductPriceRepository;

import java.util.Optional;

@Service
public class ProductPriceServices {
    @Autowired
    private ProductPriceRepository productPriceRepository;

    public Optional<ProductPrice> findNewPrice(Product product){
        return productPriceRepository.findNewPrice(product);
    }
}
