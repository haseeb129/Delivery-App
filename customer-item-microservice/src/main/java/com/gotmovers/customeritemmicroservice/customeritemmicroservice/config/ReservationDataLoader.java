package com.gotmovers.customeritemmicroservice.customeritemmicroservice.config;

import com.gotmovers.customeritemmicroservice.customeritemmicroservice.models.Reservation;
import com.gotmovers.customeritemmicroservice.customeritemmicroservice.repository.ReservationRepostiory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;

@Service
public class ReservationDataLoader {
    @Autowired
    ReservationRepostiory reservationRepostiory;
    @PostConstruct
    public void init(){
        Reservation reservation = new Reservation();
//        reservation.setId(1l);
//        reservation.setAmountPaid(479.99f);
//        reservation.setFromLatitude(123.2f);
//        reservation.setFromLongitude(54.6f);
//        reservation.setToLatitude(78.6f);
//        reservation.setToLongitude(87.4f);
//        reservation.setTotalAmount(499.99f);
//        reservationRepostiory.save(reservation);

    }
}
