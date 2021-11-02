package com.gotmovers.usermicroservice.bean;

public class JwtResponse {
    private String Jwt;
    private String User_email;

    public String getJwt() {
        return Jwt;
    }

    public JwtResponse() {
    }

    public JwtResponse(String jwt, String user_email) {
        Jwt = jwt;
        User_email = user_email;
    }

    public void setJwt(String jwt) {
        Jwt = jwt;
    }

    public String getUser_email() {
        return User_email;
    }

    public void setUser_email(String user_email) {
        User_email = user_email;
    }
}
