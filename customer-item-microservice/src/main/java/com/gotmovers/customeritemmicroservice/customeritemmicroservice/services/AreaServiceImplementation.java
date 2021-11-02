package com.gotmovers.customeritemmicroservice.customeritemmicroservice.services;

import com.gotmovers.customeritemmicroservice.customeritemmicroservice.models.Area;
import com.gotmovers.customeritemmicroservice.customeritemmicroservice.repository.AreaRepository;
import com.gotmovers.customeritemmicroservice.customeritemmicroservice.repository.ZoneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AreaServiceImplementation implements AreaService {
    @Autowired
    AreaRepository areaRepository;
    @Autowired
    ZoneRepository zoneRepository;
    @Override
    public List<Area> getAll() {
        return (List<Area>) areaRepository.findAll();
    }

    @Override
    public List<Area> getByZone(Long id) {
        return (List<Area>) areaRepository.getByZone(id) ;
    }



    @Override
    public Area addNew(Area area, Long id) {
        Area areaObj = new Area();
        areaObj.setName(area.getName());
        areaObj.setDescription(area.getDescription());
        zoneRepository.findById(id).map(zoneObj->{
            areaObj.setZone(zoneObj);
            areaRepository.save(areaObj);
            return null;

        });
        return areaObj;
    }

    @Override
    public String delete(Long id) {
        areaRepository.deleteById(id);
        return "area deleted successfully";
    }

    @Override
    public Optional<Area> getById(Long id) {
        return areaRepository.findById(id);
    }
}
