package com.prefecture.gestionlocale.model.ws.exception;

import com.prefecture.gestionlocale.model.ws.Response;
import com.prefecture.gestionlocale.util.Helper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.util.Date;

@ControllerAdvice
@RestController
public class CustomizeResponseEntityExceptionHandler extends ResponseEntityExceptionHandler {
    @Autowired
    private MessageSource messageSource;

    @Autowired
    private Helper helper;

    @ExceptionHandler(Exception.class)
    public final ResponseEntity<Object> handleAllException(Exception ex, WebRequest request){
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(
                helper.objectFilter("ResponseFilter", new Response(false,
                        new Date(),
                        ex.getMessage(),
                        request.getDescription(false)
                ), "success", "message", "timestamp", "details")
        );
    }

    @ExceptionHandler(BeanNotFoundException.class)
    public final ResponseEntity<Object> handleBeanNotFoundException(BeanNotFoundException ex, WebRequest request){
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(
                helper.objectFilter("ResponseFilter", new Response(false,
                        new Date(),
                        ex.getMessage(),
                        request.getDescription(false)
                ), "success", "message", "timestamp", "details")
        );
    }

    @Override
    protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(
                helper.objectFilter("ResponseFilter", new Response(false,
                        new Date(),
                        messageSource.getMessage("validation.entity.attribute", null, LocaleContextHolder.getLocale()),
                        ex.getBindingResult().toString()
                ), "success", "message", "timestamp", "details")
        );
    }
}
