package vn.edu.iuh.fit.backend.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import jakarta.xml.bind.annotation.XmlRootElement;

@Entity
@Table(name = "product_image")
@NamedQueries({
        @NamedQuery(name = "ProductImage.getAll", query = "FROM ProductImage"),
        @NamedQuery(name = "ProductImage.getByProductId", query = "FROM ProductImage WHERE product.id = :productId")
})
@XmlRootElement
public class ProductImage {
    @Id
    @Column(columnDefinition = "BIGINT(20)")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long image_id;
    @Column(columnDefinition = "VARCHAR(250)")
    private String alternative;
    @Column(columnDefinition = "VARCHAR(250)", nullable = false)
    private String path;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id", referencedColumnName = "product_id")
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    private Product product;

    public ProductImage() {
    }

    public ProductImage(String alternative, String path, Product product) {
        this.alternative = alternative;
        this.path = path;
        this.product = product;
    }

    public long getImage_id() {
        return image_id;
    }

    public void setImage_id(long image_id) {
        this.image_id = image_id;
    }

    public String getAlternative() {
        return alternative;
    }

    public void setAlternative(String alternative) {
        this.alternative = alternative;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    @Override
    public String toString() {
        return "ProductImage{" +
                "image_id=" + image_id +
                ", alternative='" + alternative + '\'' +
                ", path='" + path + '\'' +
                ", product=" + product +
                '}';
    }
}
