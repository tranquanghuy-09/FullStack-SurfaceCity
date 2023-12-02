package vn.edu.iuh.fit.frontend.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.time.LocalDateTime;

@JsonIgnoreProperties(ignoreUnknown = true)
@Getter @Setter
public class StatisticData implements Serializable {
    java.sql.Date orderDate;
    private Long totalOrders;
    private Double totalAmount;

    public StatisticData(java.sql.Date orderDate, Long totalOrders, Double totalAmount) {
        this.orderDate = orderDate;
        this.totalOrders = totalOrders;
        this.totalAmount = totalAmount;
    }

    // Thêm getter và setter nếu cần
}
