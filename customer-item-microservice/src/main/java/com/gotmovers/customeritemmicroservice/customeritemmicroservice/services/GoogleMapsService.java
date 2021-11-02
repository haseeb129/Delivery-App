package com.gotmovers.customeritemmicroservice.customeritemmicroservice.services;

import com.google.maps.model.DistanceMatrix;
import com.google.maps.model.LatLng;

public interface GoogleMapsService {
    public DistanceMatrix fetchDistanceFromGoogle(LatLng origin, LatLng destination);
}
