package vn.edu.iuh.fit.backend.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.json.bind.annotation.JsonbDateFormat;
import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "product_price")
@NamedQueries({
        @NamedQuery(name = "ProductPrice.getAll", query = "FROM ProductPrice"),
        @NamedQuery(name = "ProductPrice.getProductByIdWithNewPrice", query = "FROM ProductPrice p WHERE price_date_time >= all (SELECT pp.price_date_time FROM ProductPrice pp WHERE pp.product.id = p.product.id) AND product.id = :productId"),
        @NamedQuery(name = "ProductPrice.countActiveProductsWithNewPrice", query = "SELECT count(*) FROM ProductPrice p WHERE price_date_time >= all (SELECT pp.price_date_time FROM ProductPrice pp WHERE pp.product.id = p.product.id)"),
        @NamedQuery(name = "ProductPrice.findById", query = "FROM ProductPrice WHERE price_date_time = :price_date_time AND product.id = :productId"),
        @NamedQuery(name = "ProductPrice.getProductNewPrice", query = "FROM ProductPrice WHERE product.id = :productId order by price_date_time desc")
})
public class ProductPrice {
    @Id
    @Column(columnDefinition = "DATETIME(6)")
    @JsonbDateFormat(value = "yyyy-MM-dd")
    private LocalDateTime price_date_time;
    @Column(columnDefinition = "VARCHAR(255)")
    private String note;
    @Column(columnDefinition = "DOUBLE", nullable = false)
    private double price;
    @Id
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id", referencedColumnName = "product_id")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Product product;

    public ProductPrice() {
    }

    public ProductPrice(String note, double price, Product product) {
        this.note = note;
        this.price = price;
        this.product = product;
    }

    public ProductPrice(LocalDateTime price_date_time, String note, double price, Product product) {
        this.price_date_time = price_date_time;
        this.note = note;
        this.price = price;
        this.product = product;
    }

    public LocalDateTime getPrice_date_time() {
        return price_date_time;
    }

    public void setPrice_date_time(LocalDateTime price_date_time) {
        this.price_date_time = price_date_time;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    @Override
    public String toString() {
        return "ProductPrice{" +
                "price_date_time=" + price_date_time +
                ", note='" + note + '\'' +
                ", price=" + price +
                ", product=" + product +
                '}';
    }
}
