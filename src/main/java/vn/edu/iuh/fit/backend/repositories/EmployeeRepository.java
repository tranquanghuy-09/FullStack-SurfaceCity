package vn.edu.iuh.fit.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import vn.edu.iuh.fit.backend.enums.EmployeeStatus;
import vn.edu.iuh.fit.backend.models.Employee;

import java.util.List;
import java.util.Optional;

public interface EmployeeRepository extends JpaRepository<Employee, Long>, JpaSpecificationExecutor<Employee> {
    @Query("FROM Employee WHERE email = :email AND status = :status")
    Optional<Employee> login(@Param("email") String email, @Param("status") EmployeeStatus status);

    @Query(value = "SELECT emp_id FROM shopping.employee", nativeQuery = true)
    List<Long> getAllEmpId();
}