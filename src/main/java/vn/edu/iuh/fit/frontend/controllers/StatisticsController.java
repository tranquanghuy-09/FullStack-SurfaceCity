package vn.edu.iuh.fit.frontend.controllers;

import lombok.Builder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import vn.edu.iuh.fit.backend.models.Employee;
import vn.edu.iuh.fit.backend.repositories.EmployeeRepository;
import vn.edu.iuh.fit.backend.services.StatisticService;
import vn.edu.iuh.fit.frontend.dto.StatisticData;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Controller
@RequestMapping("/admin/statistics")
public class StatisticsController {
    @Autowired
    private StatisticService statisticService;

    @Autowired
    private EmployeeRepository employeeRepository;

    @GetMapping("/orders")
    public String showOrdersStatistics(
            @RequestParam(value = "startDate", required = false) LocalDate startDate,
            @RequestParam(value = "endDate", required = false) LocalDate endDate,
            Model model) {
        LocalDateTime startDateTime = null;
        LocalDateTime endDateTime = null;
        if (startDate == null && endDate == null) {
            startDateTime = LocalDateTime.of(2023, 1, 1, 0, 0, 0);
            endDateTime = LocalDateTime.of(2023, 12, 31, 23, 59, 59);
        }else{
            startDateTime = startDate.atStartOfDay();
            endDateTime = endDate.atStartOfDay();
        }

        List<StatisticData> statisticsData = statisticService.getStatisticsData(startDateTime, endDateTime);
        model.addAttribute("statisticsData", statisticsData);
        model.addAttribute("startDate", startDate != null ? startDate : "");
        model.addAttribute("endDate", endDate != null ? endDate : "");

        return "admin/statistics/orders-statistics";
    }


    @GetMapping("/employee")
    public String showEmployeeStatistics(
            @RequestParam(value = "startDate", required = false) LocalDate startDate,
            @RequestParam(value = "endDate", required = false) LocalDate endDate,
            @RequestParam(value = "emp_id", required = false) Long emp_id,
            Model model) {
        LocalDateTime startDateTime = null;
        LocalDateTime endDateTime = null;

        if (startDate == null && endDate == null) {
            startDateTime = LocalDateTime.of(2023, 1, 1, 0, 0, 0);
            endDateTime = LocalDateTime.of(2023, 12, 31, 23, 59, 59);
        }else{
            startDateTime = startDate.atStartOfDay();
            endDateTime = endDate.atTime(23,59, 59);
        }
        if (emp_id==null){
            emp_id = 1l;
        }

        List<Long> allEmpId = employeeRepository.getAllEmpId();
        model.addAttribute("employeeIds", allEmpId);

        List<StatisticData> statisticsData = statisticService.getStatisticsDataByEmployee(startDateTime, endDateTime, emp_id);
        model.addAttribute("selectedEmployeeId", emp_id);
        model.addAttribute("statisticsData", statisticsData);
        model.addAttribute("startDate", startDate != null ? startDate : "");
        model.addAttribute("endDate", endDate != null ? endDate : "");

        return "admin/statistics/orders-statistics-employee";
    }
}
