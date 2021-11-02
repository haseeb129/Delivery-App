package com.gotmovers.customeritemmicroservice.customeritemmicroservice.controller;

import com.gotmovers.customeritemmicroservice.customeritemmicroservice.models.Type;
import com.gotmovers.customeritemmicroservice.customeritemmicroservice.services.TypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/types")
public class TypeController {
    @Autowired
    private TypeService typeService;

    @GetMapping("/getAll")
        public List<Type> getAll(){
            return typeService.getAll();
        }

    @GetMapping("/getByCategories/{id}")
    public List<Type> getByCategories(@PathVariable("id") Long id){
        return typeService.getByCategory(id);
    }

    @GetMapping("/getById/{id}")
    public Optional<Type> getById(@PathVariable("id") Long id){
        return typeService.getById(id);
    }

    @PostMapping("/addNew/{id}")
    public Type insert(@RequestBody Type type,@PathVariable("id") Long id){
        return typeService.addNew(type,id);
    }

    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable("id") Long id){
        return typeService.delete(id);
    }
}
