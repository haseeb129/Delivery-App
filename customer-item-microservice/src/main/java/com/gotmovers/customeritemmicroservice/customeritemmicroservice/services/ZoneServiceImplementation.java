package com.gotmovers.customeritemmicroservice.customeritemmicroservice.services;

import com.gotmovers.customeritemmicroservice.customeritemmicroservice.models.Zone;
import com.gotmovers.customeritemmicroservice.customeritemmicroservice.repository.ZoneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ZoneServiceImplementation implements ZoneService {
@Autowired
    ZoneRepository zoneRepository;

    @Override
    public List<Zone> getAll() {
        return (List<Zone>) zoneRepository.findAll();
    }

    @Override
    public Zone addNewZone(Zone zone) {
        zoneRepository.save(zone);
        return zone;
    }

    @Override
    public String delete(Long id) {
        zoneRepository.deleteById(id);
        return "zone deleted successfully";
    }

    @Override
    public Optional<Zone> getById(Long id) {
        return zoneRepository.findById(id);
    }


}
