package com.gotmovers.customeritemmicroservice.customeritemmicroservice.controller;

import com.gotmovers.customeritemmicroservice.customeritemmicroservice.models.Item;
import com.gotmovers.customeritemmicroservice.customeritemmicroservice.services.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/items")
public class ItemController {
    @Autowired
    private ItemService itemService;
    @GetMapping("/getAll")
    public List<Item> getAll(){
    return itemService.getAll();
    }
    @GetMapping("/getByType/{id}")
    public List<Item> getByType(@PathVariable("id") Long id){
        return itemService.getByType(id);
    }

    @GetMapping("/getById/{id}")
    public Optional<Item> getById(@PathVariable("id") Long id){
        return itemService.getById(id);
    }

    @PostMapping("/addNew/{id}")
    public Item insert(@RequestBody Item item,@PathVariable("id") Long id){
        return itemService.addNew(item,id);
    }

    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable("id") Long id){
        return itemService.delete(id);
    }



}
