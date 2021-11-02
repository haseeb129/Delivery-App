package com.gotmovers.usermicroservice.exception;

public class InvalidActivationToken extends Exception {
    public InvalidActivationToken(String message) {
        super(message);
    }
}
