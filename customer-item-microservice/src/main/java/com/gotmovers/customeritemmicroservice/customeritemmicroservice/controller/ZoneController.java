package com.gotmovers.customeritemmicroservice.customeritemmicroservice.controller;

import com.gotmovers.customeritemmicroservice.customeritemmicroservice.services.ZoneService;
import com.gotmovers.customeritemmicroservice.customeritemmicroservice.models.Zone;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/zones")

public class ZoneController {
    @Autowired
    ZoneService zoneService;
    @GetMapping("/getAll")
    public List<Zone> getAll(){
        return zoneService.getAll();
    }
    @GetMapping("/getById/{id}")
    public Optional<Zone> getById(@PathVariable("id") Long id){
        return zoneService.getById(id);
    }

    @PostMapping("/addNewZone")
    public Zone insert(@RequestBody Zone zone){
       return zoneService.addNewZone(zone);
    }
    @DeleteMapping("/deleteZone/{id}")
    public String delete(@PathVariable("id") Long id){
        return zoneService.delete(id);
    }


}
