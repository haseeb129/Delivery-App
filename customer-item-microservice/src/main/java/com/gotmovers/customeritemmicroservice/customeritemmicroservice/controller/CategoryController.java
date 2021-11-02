package com.gotmovers.customeritemmicroservice.customeritemmicroservice.controller;

import com.gotmovers.customeritemmicroservice.customeritemmicroservice.models.Category;
import com.gotmovers.customeritemmicroservice.customeritemmicroservice.models.Customers;
import com.gotmovers.customeritemmicroservice.customeritemmicroservice.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/categories")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;
    @GetMapping("/greetings")
    public String greeting(){
        return "hello from categories";
    }
    @GetMapping("/getAll")
    public List<Category> getAll(){
        return categoryService.getAll();
    }
    @GetMapping("/getById/{id}")
    public Optional<Category> getById(@PathVariable("id") Long id){
        return categoryService.getById(id);
    }
    @PostMapping("/addNew")
    public Category insert(@RequestBody Category category ){
        return categoryService.addNew(category);
    }

    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable("id") Long id){
        return categoryService.delete(id);
    }
}
