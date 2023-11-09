package vn.edu.iuh.fit.backend.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;

@Entity
@Table(name = "cart_detail")
@NamedQueries({
        @NamedQuery(name = "CartDetail.countByCustomer", query = "SELECT count(*) FROM CartDetail where cart.customer.id = :customerId"),
        @NamedQuery(name = "CartDetail.getCartDetailsByCustomerId", query = "From CartDetail where cart.customer.id = :customerId order by product.id")
})
public class CartDetail {
    @Id
    @ManyToOne
    @JoinColumn(name = "product_id", referencedColumnName = "product_id")
    private Product product;
    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "cart_id", referencedColumnName = "cust_id")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Cart cart;
    @Column(name = "qty")
    private int quantity;

    public CartDetail() {
    }

    public CartDetail(Product product, Cart cart) {
        this.product = product;
        this.cart = cart;
    }

    public CartDetail(Product product, Cart cart, int quantity) {
        this.product = product;
        this.cart = cart;
        this.quantity = quantity;
    }

    public CartDetail(Product product, int quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Cart getCart() {
        return cart;
    }

    public void setCart(Cart cart) {
        this.cart = cart;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    @Override
    public String toString() {
        return "CartDetail{" +
                "product=" + product +
                ", quantity=" + quantity +
                '}';
    }
}
