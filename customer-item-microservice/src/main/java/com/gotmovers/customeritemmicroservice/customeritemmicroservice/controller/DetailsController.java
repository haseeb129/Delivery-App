package com.gotmovers.customeritemmicroservice.customeritemmicroservice.controller;

import com.gotmovers.customeritemmicroservice.customeritemmicroservice.models.Details;
import com.gotmovers.customeritemmicroservice.customeritemmicroservice.services.DetailsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/details")
public class DetailsController {
    @Autowired
    DetailsService detailsService;
    @GetMapping("/getAll")
    public List<Details> getAll(){
        return detailsService.getAll();
    }

    @GetMapping("/getByItems/{id}")
    public List<Details> getByItems(@PathVariable("id") Long id){
        return detailsService.getByItem(id);
    }

    @GetMapping("/getById/{id}")
    public Optional<Details> getById(@PathVariable("id") Long id){
        return detailsService.getById(id);
    }

    @PostMapping("/addNew/{id}")
    public Details insert(@RequestBody Details details,@PathVariable("id") Long id){
        return detailsService.addNew(details,id);
    }

    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable("id") Long id){
        return detailsService.delete(id);
    }
}
