package com.gotmovers.usermicroservice.exception;

public class LoginFailedException extends Exception {
    public LoginFailedException(){super("Invalid Credentials!");}


    public LoginFailedException(String message){super(message);   }
}
