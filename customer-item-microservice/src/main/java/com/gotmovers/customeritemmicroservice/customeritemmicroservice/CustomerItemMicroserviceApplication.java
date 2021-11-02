package com.gotmovers.customeritemmicroservice.customeritemmicroservice;

import com.google.maps.GeoApiContext;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CustomerItemMicroserviceApplication {


    private String googleApiKey;

    @Value("${google.api}")
    public void setGoogleApiKey(String googleApiKey){this.googleApiKey= googleApiKey;}

    @Bean("geoApiContext")
    public GeoApiContext geoApiContext(){
        System.out.println(googleApiKey);
        return new GeoApiContext.Builder()
                .apiKey(googleApiKey)
                .build()
                ;
    }

    public static void main(String[] args) {
        SpringApplication.run(CustomerItemMicroserviceApplication.class, args);
    }

}
