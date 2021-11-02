package com.gotmovers.customeritemmicroservice.customeritemmicroservice.services;

import com.gotmovers.customeritemmicroservice.customeritemmicroservice.models.Category;

import java.util.List;
import java.util.Optional;

public interface CategoryService {
    public List<Category> getAll();
    public Category addNew(Category category);
    public String delete(Long id);
    public Optional<Category> getById(Long id);
}
