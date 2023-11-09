package vn.edu.iuh.fit.backend.models;

import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "orders")
@NamedQueries({
        @NamedQuery(name = "Order.getAll", query = "FROM Order"),
        @NamedQuery(name = "Order.statisticsByDate", query = "SELECT orderDate, count(*) as count FROM Order GROUP BY orderDate ORDER BY orderDate"),
        @NamedQuery(name = "Order.statisticsByPeriod", query = "SELECT orderDate, count(*) as count FROM Order WHERE orderDate >= ?1 and orderDate <= ?2 GROUP BY orderDate ORDER BY orderDate"),
        @NamedQuery(name = "Order.statisticsByEmployee", query = "SELECT employee.id, count(*) as count FROM Order WHERE orderDate >= ?1 and orderDate <= ?2 group by employee.id")
})
public class Order {
    @Id
    @Column(columnDefinition = "BIGINT(20)")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long order_id;
    @Column(name = "order_date", columnDefinition = "DATETIME(6)", nullable = false)
    private LocalDateTime orderDate;
    @ManyToOne
    @JoinColumn(name = "cust_id", referencedColumnName = "cust_id")
    private Customer customer;
    @ManyToOne
    @JoinColumn(name = "employee_id", referencedColumnName = "emp_id", nullable = false)
    private Employee employee;

    @OneToMany(mappedBy = "order")
    private List<OrderDetail> orderDetails;

    public Order() {
    }

    public Order(long order_id) {
        this.order_id = order_id;
    }

    public Order(LocalDateTime orderDate, Customer customer, Employee employee) {
        this.orderDate = orderDate;
        this.customer = customer;
        this.employee = employee;
    }

    public Order(long order_id, LocalDateTime orderDate, Customer customer, Employee employee) {
        this.order_id = order_id;
        this.orderDate = orderDate;
        this.customer = customer;
        this.employee = employee;
    }

    public long getOrder_id() {
        return order_id;
    }

    public void setOrder_id(long order_id) {
        this.order_id = order_id;
    }

    public LocalDateTime getOrderDate() {
        return orderDate;
    }

    public void setOrderDate(LocalDateTime orderDate) {
        this.orderDate = orderDate;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }

    public List<OrderDetail> getOrderDetails() {
        return orderDetails;
    }

    public void setOrderDetails(List<OrderDetail> orderDetails) {
        this.orderDetails = orderDetails;
    }

    @Override
    public String toString() {
        return "Order{" +
                "order_id=" + order_id +
                ", orderDate=" + orderDate +
                ", customer=" + customer +
                ", employee=" + employee +
                '}';
    }
}
