package com.gotmovers.customeritemmicroservice.customeritemmicroservice.services;

import com.gotmovers.customeritemmicroservice.customeritemmicroservice.models.Category;
import com.gotmovers.customeritemmicroservice.customeritemmicroservice.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryServiceImplementation implements CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;
    @Override
    public List<Category> getAll() {
        return (List<Category>) categoryRepository.findAll();
    }
    @Override
    public Category addNew(Category category) {
        categoryRepository.save(category);
        return category;
    }

    @Override
    public String delete(Long id) {
        categoryRepository.deleteById(id);
        return "customer deleted successfully";
    }

    @Override
    public Optional<Category> getById(Long id) {
        return categoryRepository.findById(id);
    }
}
