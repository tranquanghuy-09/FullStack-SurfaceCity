package vn.edu.iuh.fit.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vn.edu.iuh.fit.backend.enums.EmployeeStatus;
import vn.edu.iuh.fit.backend.models.Employee;
import vn.edu.iuh.fit.backend.repositories.EmployeeRepository;

import java.util.Optional;

@Service
public class EmployeeServices {
    @Autowired
    private EmployeeRepository employeeRepository;

    public Optional<Employee> login(String email) {
        return employeeRepository.login(email, EmployeeStatus.ACTIVE);
    }
}
