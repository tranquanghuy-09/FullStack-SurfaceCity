package vn.edu.iuh.fit.backend.services;

import jakarta.inject.Inject;
import vn.edu.iuh.fit.backend.models.ProductPrice;
import vn.edu.iuh.fit.backend.repositories.ProductPriceRepository;

public class ProductPriceService {
    private ProductPriceRepository productPriceRepository = new ProductPriceRepository();

    public ProductPrice getProductByIdWithNewPrice(long id){
        return productPriceRepository.getProductByIdWithNewPrice(id);
    }

}
