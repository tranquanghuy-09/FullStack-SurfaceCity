package vn.edu.iuh.fit.backend.converters;

import jakarta.ws.rs.ext.ParamConverter;
import jakarta.ws.rs.ext.Provider;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

@Provider
public class LocalDateTimeConverter implements ParamConverter<LocalDateTime> {
    private final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd[HH:mm:ss]");

    @Override
    public LocalDateTime fromString(String value) {
        if (value == null)
            return null;

        LocalDate localDate = LocalDate.parse(value);
        return LocalDateTime.of(localDate, LocalTime.MIDNIGHT);
    }

    @Override
    public String toString(LocalDateTime value) {
        if (value == null)
            return null;

        return value.format(formatter);
    }
}
