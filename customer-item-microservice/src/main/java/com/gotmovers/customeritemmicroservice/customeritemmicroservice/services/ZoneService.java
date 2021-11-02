package com.gotmovers.customeritemmicroservice.customeritemmicroservice.services;

import com.gotmovers.customeritemmicroservice.customeritemmicroservice.models.Zone;

import java.util.List;
import java.util.Optional;

public interface ZoneService {
    public List<Zone> getAll();
    public Zone addNewZone(Zone zone);
    public String delete(Long id);
    public Optional<Zone> getById(Long id);


}
