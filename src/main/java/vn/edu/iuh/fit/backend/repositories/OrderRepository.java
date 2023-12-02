package vn.edu.iuh.fit.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import vn.edu.iuh.fit.backend.models.Order;
import vn.edu.iuh.fit.frontend.dto.StatisticData;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long>, JpaSpecificationExecutor<Order> {

    @Query(value = "SELECT NEW vn.edu.iuh.fit.frontend.dto.StatisticData(" +
            "DATE(o.orderDate), " +
            "COUNT(DISTINCT o.order_id), " +
            "SUM(od.price * od.quantity)) " +
            "FROM Order o " +
            "JOIN OrderDetail od ON o.order_id = od.order.order_id " +
            "WHERE o.orderDate BETWEEN :startDate AND :endDate " +
            "GROUP BY DATE(o.orderDate) " +
            "ORDER BY DATE(o.orderDate)")
    List<StatisticData> getStatisticsData(@Param("startDate") LocalDateTime startDate, @Param("endDate") LocalDateTime endDate);

    @Query(value = "SELECT NEW vn.edu.iuh.fit.frontend.dto.StatisticData(" +
            "DATE(o.orderDate), " +
            "COUNT(DISTINCT o.order_id), " +
            "SUM(od.price * od.quantity)) " +
            "FROM Order o " +
            "JOIN OrderDetail od ON o.order_id = od.order.order_id " +
            "WHERE o.orderDate BETWEEN :startDate AND :endDate AND o.employee.id = :employee_id " +
            "GROUP BY DATE(o.orderDate) " +
            "ORDER BY DATE(o.orderDate)")
    List<StatisticData> getStatisticsDataByEmployee(@Param("startDate") LocalDateTime startDate, @Param("endDate") LocalDateTime endDate, @Param("employee_id") long employee_id);

}