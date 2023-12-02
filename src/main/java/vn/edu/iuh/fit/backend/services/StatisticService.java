package vn.edu.iuh.fit.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.edu.iuh.fit.backend.repositories.OrderRepository;
import vn.edu.iuh.fit.frontend.dto.StatisticData;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Service
public class StatisticService {
    @Autowired
    private OrderRepository orderRepository;
    public List<StatisticData> getStatisticsData(LocalDateTime startDate, LocalDateTime endDate) {
        List<StatisticData> statisticsData = orderRepository.getStatisticsData(startDate, endDate);
        for (StatisticData statisticData : statisticsData) {
            System.out.println("Order Date: " + statisticData.getOrderDate());
            System.out.println("Total Orders: " + statisticData.getTotalOrders());
            System.out.println("Total Amount: " + statisticData.getTotalAmount());
            System.out.println("----------------------------------");
        }
        return statisticsData;
    }

    public List<StatisticData> getStatisticsDataByEmployee(LocalDateTime startDate, LocalDateTime endDate, long employee_id) {
        List<StatisticData> statisticsData = orderRepository.getStatisticsDataByEmployee(startDate, endDate, employee_id);
        for (StatisticData statisticData : statisticsData) {
            System.out.println("Order Date: " + statisticData.getOrderDate());
            System.out.println("Total Orders: " + statisticData.getTotalOrders());
            System.out.println("Total Amount: " + statisticData.getTotalAmount());
            System.out.println("----------------------------------");
        }
        return statisticsData;
    }
}
