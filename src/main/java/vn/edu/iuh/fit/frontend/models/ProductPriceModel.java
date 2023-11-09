package vn.edu.iuh.fit.frontend.models;

import vn.edu.iuh.fit.backend.models.ProductPrice;
import vn.edu.iuh.fit.backend.services.ProductPriceService;

public class ProductPriceModel {
    private ProductPriceService productPriceService = new ProductPriceService();

    public ProductPrice getProductByIdWithNewPrice(long id){
        return productPriceService.getProductByIdWithNewPrice(id);
    }
}
