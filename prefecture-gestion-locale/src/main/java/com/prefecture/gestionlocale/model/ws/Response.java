package com.prefecture.gestionlocale.model.ws;

import com.fasterxml.jackson.annotation.JsonFilter;

import java.util.Date;

@JsonFilter("ResponseFilter")
public class Response {
    private boolean success = false;
    private Date timestamp;
    private String message;
    private Object data;
    private String details;

    public Response(boolean success, Date timestamp, String message, String details) {
        this.success = success;
        this.timestamp = timestamp;
        this.message = message;
        this.details = details;
    }

    public Response(boolean success, String message) {
        this.success = success;
        this.timestamp = new Date();
        this.message = message;
    }

    public Response(boolean success, Object data) {
        this.success = success;
        this.timestamp = new Date();
        this.data = data;
    }

    public boolean isSuccess() {
        return success;
    }

    public Date getTimestamp() {
        return timestamp;
    }

    public String getMessage() {
        return message;
    }

    public String getDetails() {
        return details;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }
}