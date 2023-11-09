package vn.edu.iuh.fit.backend.repositories;

import vn.edu.iuh.fit.backend.models.Product;

import java.util.List;
import java.util.Optional;

public class ProductRepository extends  CRUDAbstractRepository<Product>{
    public ProductRepository() {
        super();

    }
    public List<Product> getAll(){
        try {
            return em.createNamedQuery("Product.getAll", Product.class).getResultList();
        }catch (Exception ex){
            logger.error(ex.getMessage());
            ex.printStackTrace();
        }
        return null;
    }
    public Optional<Product> findById(long id) {
        try {
            return Optional.of(em.find(Product.class, id));
        } catch (Exception e) {
            logger.error(e.getMessage());
        }
        return Optional.empty();
    }
}
