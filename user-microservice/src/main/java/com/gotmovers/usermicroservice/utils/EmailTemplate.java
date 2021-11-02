package com.gotmovers.usermicroservice.utils;

public class EmailTemplate {
    private static final String activationEmailMessage = "Dear %s,\n" +
            "\n" +
            "An account has been created for you at the Got Movers.\n" +
            "\n" +
            "Please visit this url to activate your account.\n" +
            "\n" +
            "https://www.%s.com/account/activate/%s\n" ;

    public static final String activationEmailSubject = "User Account Activation.";

    public static String generateActivationEmailMessage(String domain, String name, String token){
        return String.format(activationEmailMessage, name, domain, token);
    }

}
