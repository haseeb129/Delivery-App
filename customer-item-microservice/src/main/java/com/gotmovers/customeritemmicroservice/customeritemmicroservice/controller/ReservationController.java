package com.gotmovers.customeritemmicroservice.customeritemmicroservice.controller;

import com.gotmovers.customeritemmicroservice.customeritemmicroservice.models.Reservation;
import com.gotmovers.customeritemmicroservice.customeritemmicroservice.services.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/reservations")
public class ReservationController {
    @Autowired
    ReservationService reservationService;
    @GetMapping("/getAll")
    public List<Reservation> getAll(){
       return reservationService.getAll();
    }

    @PostMapping("/addNew")
    public Reservation insert(@RequestBody Map<String,?> object){
         Long customerId = ((Number) object.get("customer_id")).longValue() ;
         Long areaId = ((Number)object.get("area_id")).longValue();
         Map<?,?> reservation =  (Map)object.get("reservation");
         return reservationService.addNew(customerId,areaId,reservation);
    }

    @GetMapping("/getById/{id}")
    public Optional<Reservation> getById(@PathVariable("id") Long id){
        return reservationService.getById(id);
    }
    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable("id") Long id){
        return reservationService.delete(id);
    }
}
