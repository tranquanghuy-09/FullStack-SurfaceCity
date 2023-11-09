package vn.edu.iuh.fit.backend.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import jakarta.xml.bind.annotation.XmlRootElement;
import vn.edu.iuh.fit.backend.converters2.ProductStatusConverter;
import vn.edu.iuh.fit.backend.enums2.ProductStatus;

import java.util.List;

@JsonIgnoreProperties({"hibernateLazyInitializer"})
@Entity
@Table(name = "product")
@NamedQueries({
        @NamedQuery(name = "Product.getAll", query = "FROM Product ORDER BY id"),
        @NamedQuery(name = "Product.updateStatus", query = "UPDATE Product SET status = :status WHERE product_id = :product_id")
})
@XmlRootElement
public class Product {
    @Id
    @Column(columnDefinition = "BIGINT(20)")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long product_id;
    @Column(columnDefinition = "VARCHAR(250)", nullable = false)
    private String description;
    @Column(name = "manufacturer_name", columnDefinition = "VARCHAR(100)", nullable = false)
    private String manufacturer;
    @Column(columnDefinition = "VARCHAR(150)", nullable = false)
    private String name;
    @Column(columnDefinition = "INT(11)")
    @Convert(converter = ProductStatusConverter.class)
    private ProductStatus status;
    @Column(columnDefinition = "VARCHAR(25)", nullable = false)
    private String unit;
    @OneToMany(mappedBy = "product")
    private List<ProductPrice> productPriceList;
    @OneToMany(mappedBy = "product")
    private List<ProductImage> productImageList;
    @OneToMany(mappedBy = "product", fetch = FetchType.LAZY)
    private List<OrderDetail> orderDetails;

    public Product() {
    }

    public Product(long product_id) {
        this.product_id = product_id;
    }

    public Product(String name, String description, String unit, String manufacturer, ProductStatus status) {
        this.description = description;
        this.manufacturer = manufacturer;
        this.name = name;
        this.status = status;
        this.unit = unit;
    }

    public List<ProductPrice> getProductPriceList() {
        return productPriceList;
    }

    public void setProductPriceList(List<ProductPrice> productPriceList) {
        this.productPriceList = productPriceList;
    }

    public long getProduct_id() {
        return product_id;
    }

    private void setProduct_id(long product_id) {
        this.product_id = product_id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getManufacturer() {
        return manufacturer;
    }

    public void setManufacturer(String manufacturer) {
        this.manufacturer = manufacturer;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public ProductStatus getStatus() {
        return status;
    }

    public void setStatus(ProductStatus status) {
        this.status = status;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }

    public List<ProductImage> getProductImageList() {
        return productImageList;
    }

    public void setProductImageList(List<ProductImage> productImageList) {
        this.productImageList = productImageList;
    }

    @JsonIgnore
    public List<OrderDetail> getOrderDetails() {
        return orderDetails;
    }

    public void setOrderDetails(List<OrderDetail> orderDetails) {
        this.orderDetails = orderDetails;
    }

    @Override
    public String toString() {
        return "Product{" +
                "product_id=" + product_id +
                ", description='" + description + '\'' +
                ", manufacturer='" + manufacturer + '\'' +
                ", name='" + name + '\'' +
                ", status=" + status +
                ", unit='" + unit + '\'' +
                '}';
    }
}
