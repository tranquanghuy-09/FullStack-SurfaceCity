package vn.edu.iuh.fit.backend.converters;

import jakarta.persistence.AttributeConverter;
import jakarta.persistence.Converter;
import vn.edu.iuh.fit.backend.enums.ProductStatus;

@Converter
public class ProductStatusConverter implements AttributeConverter<ProductStatus, Integer> {
    @Override
    public Integer convertToDatabaseColumn(ProductStatus attribute) {
        if (attribute == null)
            return null;

        return attribute.getStatus();
    }

    @Override
    public ProductStatus convertToEntityAttribute(Integer dbData) {
        if (dbData == 1)
            return ProductStatus.ACTIVE;
        if (dbData == 0)
            return ProductStatus.INACTIVE;
        if (dbData == -1)
            return ProductStatus.DISCONTINUED;
        return null;
    }
}
