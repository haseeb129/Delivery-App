package com.gotmovers.customeritemmicroservice.customeritemmicroservice.services;

import com.gotmovers.customeritemmicroservice.customeritemmicroservice.models.Area;

import java.util.List;
import java.util.Optional;

public interface AreaService {
    public List<Area> getAll();
    public List<Area> getByZone(Long id);
    public Area addNew(Area area,Long id);
    public String delete(Long id);
    public Optional<Area> getById(Long id);
}
