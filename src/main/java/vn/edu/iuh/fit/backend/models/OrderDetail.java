package vn.edu.iuh.fit.backend.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import jakarta.xml.bind.annotation.XmlRootElement;

@Entity
@Table(name = "order_detail")
@NamedQueries({
        @NamedQuery(name = "OrderDetail.getAll", query = "FROM OrderDetail"),
        @NamedQuery(name = "OrderDetail.findById", query = "FROM OrderDetail WHERE product.id = :productId AND order.id = :orderId"),
})
@XmlRootElement
public class OrderDetail {
    @Column(columnDefinition = "DOUBLE", nullable = false)
    private double price;
    @Id
    @ManyToOne
    @JoinColumn(name = "order_id", referencedColumnName = "order_id")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Order order;
    @Column(columnDefinition = "DOUBLE", nullable = false)
    private double quantity;
    @Column(columnDefinition = "VARCHAR(255)")
    private String note;
    @Id
    @ManyToOne
    @JoinColumn(name = "product_id", referencedColumnName = "product_id")
    private Product product;

    public OrderDetail() {
    }

    public OrderDetail(Order order, Product product) {
        this.order = order;
        this.product = product;
    }

    public OrderDetail(double price, Order order, double quantity, String note, Product product) {
        this.price = price;
        this.order = order;
        this.quantity = quantity;
        this.note = note;
        this.product = product;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }

    public double getQuantity() {
        return quantity;
    }

    public void setQuantity(double quantity) {
        this.quantity = quantity;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    @Override
    public String toString() {
        return "OrderDetail{" +
                "price=" + price +
                ", order=" + order +
                ", quantity=" + quantity +
                ", note='" + note + '\'' +
                ", product=" + product +
                '}';
    }
}
