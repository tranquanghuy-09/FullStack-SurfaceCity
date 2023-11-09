package vn.edu.iuh.fit.backend.repositories;

import jakarta.persistence.TypedQuery;
import vn.edu.iuh.fit.backend.models.ProductPrice;

public class ProductPriceRepository extends CRUDAbstractRepository<ProductPrice>{
    public ProductPriceRepository() {
        super();
    }
    public ProductPrice getProductByIdWithNewPrice(long id){
        try {
            return em.createNamedQuery("ProductPrice.getProductByIdWithNewPrice", ProductPrice.class).setParameter("productId", id).getSingleResult();
        }catch (Exception ex){
            logger.error(ex.getMessage());
            ex.printStackTrace();
        }
        return null;
    }
}
