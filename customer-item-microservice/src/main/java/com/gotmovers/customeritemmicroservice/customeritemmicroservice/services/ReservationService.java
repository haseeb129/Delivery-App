package com.gotmovers.customeritemmicroservice.customeritemmicroservice.services;

import com.gotmovers.customeritemmicroservice.customeritemmicroservice.models.Reservation;

import java.util.List;
import java.util.Map;
import java.util.Optional;

public interface ReservationService {
    public List<Reservation> getAll();
    public Reservation addNew(Long customerId, Long area_id, Map<?,?> reservation);
    public Optional<Reservation> getById(Long id);
    public String delete(Long id);


}
