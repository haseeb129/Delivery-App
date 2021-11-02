package com.gotmovers.usermicroservice.bean;

import org.springframework.http.HttpStatus;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

public class CustomMessageResponse {
    private HttpStatus httpStatus;
    private List<String> message;
    private String timestamp;
    private String cause;


    public CustomMessageResponse(HttpStatus httpStatus, List<String> message,  String cause) {
        this(httpStatus, message);
        this.cause = cause;
    }

    public CustomMessageResponse(HttpStatus httpStatus, List<String> message) {
        super();
        this.message = message;
        this.httpStatus = httpStatus;

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
        this.timestamp = LocalDateTime.now().format(formatter);
    }



    public String getCause() {
        return cause;
    }

    public HttpStatus getHttpStatus() {
        return httpStatus;
    }

    public List<String> getMessage() {
        return message;
    }

    public String getTimestamp() {
        return timestamp;
    }
}
