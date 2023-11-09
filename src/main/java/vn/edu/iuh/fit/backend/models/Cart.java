package vn.edu.iuh.fit.backend.models;

import jakarta.persistence.*;

import java.util.List;

@Table(name = "cart")
@Entity
public class Cart {
    @Id
    @OneToOne
    @JoinColumn(name = "cust_id", referencedColumnName = "cust_id")
    private Customer customer;

    @OneToMany(mappedBy = "cart", cascade = CascadeType.ALL)
    private List<CartDetail> cartDetails;

    public Cart() {
    }

    public Cart(Customer customer) {
        this.customer = customer;
    }

    public Cart(Customer customer, List<CartDetail> cartDetails) {
        this.customer = customer;
        this.cartDetails = cartDetails;
    }

    public Cart(List<CartDetail> cartDetails) {
        this.cartDetails = cartDetails;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public List<CartDetail> getCartDetails() {
        return cartDetails;
    }

    public void setCartDetails(List<CartDetail> cartDetails) {
        this.cartDetails = cartDetails;
    }

    @Override
    public String toString() {
        return "Cart{" +
                "customer=" + customer +
                ", cartDetails=" + cartDetails +
                '}';
    }
}
