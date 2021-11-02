package com.gotmovers.usermicroservice.utils;

import com.gotmovers.usermicroservice.messagequeue.EmailSender;
import com.gotmovers.usermicroservice.model.Email;
import com.gotmovers.usermicroservice.model.User;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;

import java.sql.Timestamp;
import java.util.Calendar;
import java.util.Date;

public class HelperUtils {

    private static final int DAYS = 60;
    private static final int EXPIRATION = DAYS * 24;

    public static Date calculateExpiryDate() {
        Calendar cal = Calendar.getInstance();
        cal.setTime(new Timestamp(cal.getTime().getTime()));
        cal.add(Calendar.MINUTE, EXPIRATION);
        return new Date(cal.getTime().getTime());
    }

    public static String generateRandomString(){
        return RandomStringUtils.randomAlphanumeric(100);
    }

    public static boolean isVerificationTokenExpired(Date expiryTime){

        Calendar cal = Calendar.getInstance();
        cal.setTime(new Timestamp(cal.getTime().getTime()));
        return new Date(cal.getTime().getTime()).after(expiryTime);

    }



}
