package com.gotmovers.customeritemmicroservice.customeritemmicroservice.services;

import com.google.maps.DistanceMatrixApi;
import com.google.maps.DistanceMatrixApiRequest;
import com.google.maps.GeoApiContext;
import com.google.maps.errors.ApiException;
import com.google.maps.model.DistanceMatrix;
import com.google.maps.model.LatLng;
import com.google.maps.model.TravelMode;
import com.google.maps.model.Unit;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.io.IOException;

@Service
public class GoogleMapsServiceImplementaion implements GoogleMapsService{
    @Autowired
    @Qualifier("geoApiContext")
    private GeoApiContext context;
    public DistanceMatrix fetchDistanceFromGoogle(LatLng origin, LatLng destination){
        try {
        DistanceMatrixApiRequest rq = DistanceMatrixApi
                .newRequest(context);

        rq.origins(origin);
        rq.destinations(destination);
        rq.mode(TravelMode.DRIVING);
        rq.units(Unit.IMPERIAL);

        return rq.await();

        } catch (ApiException | InterruptedException | IOException e) {
            e.printStackTrace();
        }

        return null;
    }

}

