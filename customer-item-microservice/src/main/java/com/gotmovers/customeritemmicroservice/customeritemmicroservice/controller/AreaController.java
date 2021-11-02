package com.gotmovers.customeritemmicroservice.customeritemmicroservice.controller;

import com.gotmovers.customeritemmicroservice.customeritemmicroservice.services.AreaService;
import com.gotmovers.customeritemmicroservice.customeritemmicroservice.models.Area;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/areas")
public class AreaController {
    @Autowired
    AreaService areaService;
    @GetMapping("/getAll")
    public List<Area> getAll(){
        return areaService.getAll();
    }

    @GetMapping("/getByZone/{id}")
    public List<Area> getByZone(@PathVariable("id")Long id){
        return areaService.getByZone(id);
    }

    @GetMapping("/getById/{id}")
    public Optional<Area> getById(@PathVariable("id") Long id){
        return areaService.getById(id);
    }

    @PostMapping("/addNew/{id}")
    public Area insert(@RequestBody Area area,@PathVariable("id") Long id){
        return areaService.addNew(area,id);
    }

    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable("id") Long id){
        return areaService.delete(id);
    }



}
