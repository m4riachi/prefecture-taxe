package com.prefecture.gestionlocale.util;

import com.fasterxml.jackson.databind.ser.FilterProvider;
import com.fasterxml.jackson.databind.ser.impl.SimpleBeanPropertyFilter;
import com.fasterxml.jackson.databind.ser.impl.SimpleFilterProvider;
import com.prefecture.gestionlocale.model.ws.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.json.MappingJacksonValue;
import org.springframework.stereotype.Component;

@Component
public class Helper {
    @Autowired
    private MessageSource messageSource;

    public MappingJacksonValue objectFilter(String filterName, Object data, String... properties) {
        SimpleBeanPropertyFilter filter = SimpleBeanPropertyFilter.filterOutAllExcept(properties);

        FilterProvider filters = new SimpleFilterProvider().addFilter(filterName, filter);

        MappingJacksonValue mapping = new MappingJacksonValue(data);
        mapping.setFilters(filters);

        return mapping;
    }

    public ResponseEntity<?> response(HttpStatus status, boolean succes, String name){
        return ResponseEntity.status(status).body(
             this.objectFilter("ResponseFilter", new Response(succes, messageSource.getMessage(name, null, LocaleContextHolder.getLocale())), "success", "message", "timestamp")
        );
    }

    public ResponseEntity<?> response(HttpStatus status, boolean succes, Object data){
        return ResponseEntity.status(status).body(
                this.objectFilter("ResponseFilter", new Response(succes, data), "success", "data", "timestamp")
        );
    }

    public String getMessage(String name) {
        return messageSource.getMessage(name, null, LocaleContextHolder.getLocale());
    }
}
