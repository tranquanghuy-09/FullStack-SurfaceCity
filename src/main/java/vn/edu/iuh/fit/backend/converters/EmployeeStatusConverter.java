package vn.edu.iuh.fit.backend.converters;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;
import vn.edu.iuh.fit.backend.enums.EmployeeStatus;

@Converter
public class EmployeeStatusConverter implements AttributeConverter<EmployeeStatus, Integer> {
    @Override
    public Integer convertToDatabaseColumn(EmployeeStatus attribute) {
        if (attribute == null)
            return null;

        return attribute.getStatus();
    }

    @Override
    public EmployeeStatus convertToEntityAttribute(Integer dbData) {
        if (dbData == 1)
            return EmployeeStatus.WORKING;
        if (dbData == 0)
            return EmployeeStatus.UN_WORKING;
        if (dbData == -1)
            return EmployeeStatus.QUITTED;
        return null;
    }
}
