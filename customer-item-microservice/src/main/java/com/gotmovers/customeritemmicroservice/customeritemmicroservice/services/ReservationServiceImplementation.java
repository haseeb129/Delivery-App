package com.gotmovers.customeritemmicroservice.customeritemmicroservice.services;

import com.gotmovers.customeritemmicroservice.customeritemmicroservice.models.Reservation;
import com.gotmovers.customeritemmicroservice.customeritemmicroservice.repository.AreaRepository;
import com.gotmovers.customeritemmicroservice.customeritemmicroservice.repository.CustomerRepository;
import com.gotmovers.customeritemmicroservice.customeritemmicroservice.repository.ReservationRepostiory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class ReservationServiceImplementation implements ReservationService{

    @Autowired
    ReservationRepostiory reservationRepostiory;
    @Autowired
    CustomerRepository customerRepository;
    @Autowired
    AreaRepository areaRepository;
    @Override
    public List<Reservation> getAll() {
        return (List<Reservation>) reservationRepostiory.findAll();
    }

    @Override
    public Reservation addNew(Long customerId, Long areaId, Map<?,?> reservation) {
        Reservation reservation1 = new Reservation();
        reservation1.setTotalAmount(((Number)reservation.get("totalAmount")).floatValue());
        reservation1.setToLongitude(((Number)reservation.get("toLongitude")).floatValue());
        reservation1.setToLatitude(((Number)reservation.get("toLatitude")).floatValue());
        reservation1.setFromLongitude(((Number)reservation.get("fromLongitude")).floatValue());
        reservation1.setFromLatitude(((Number)reservation.get("fromLatitude")).floatValue());
        reservation1.setAmountPaid(((Number)reservation.get("amountPaid")).floatValue());
        customerRepository.findById(customerId).map(customerObj->{
           areaRepository.findById(areaId).map(areaObj->{
                reservation1.setCustomer(customerObj);
                reservation1.setArea(areaObj);
              reservationRepostiory.save(reservation1);
              return reservation1;
           });
           return reservation1;
        });
        return reservation1;
    }
    @Override
    public Optional<Reservation> getById(Long id) {
        return reservationRepostiory.findById(id);
    }
    @Override
    public String delete(Long id) {
        reservationRepostiory.deleteById(id);
        return "reservation deleted successfully";
    }

}
