package com.gotmovers.usermicroservice.exception;

public class VerificationTokenHasBeenExpired extends Exception {
    public VerificationTokenHasBeenExpired(String message) {
        super(message);
    }
}
