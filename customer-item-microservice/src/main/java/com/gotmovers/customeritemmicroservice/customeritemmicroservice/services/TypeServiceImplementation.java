package com.gotmovers.customeritemmicroservice.customeritemmicroservice.services;

import com.gotmovers.customeritemmicroservice.customeritemmicroservice.models.Category;
import com.gotmovers.customeritemmicroservice.customeritemmicroservice.models.Type;
import com.gotmovers.customeritemmicroservice.customeritemmicroservice.repository.CategoryRepository;
import com.gotmovers.customeritemmicroservice.customeritemmicroservice.repository.TypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TypeServiceImplementation implements TypeService {

    @Autowired
    private TypeRepository typeRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    @Override
    public List<Type> getAll() {
        return (List<Type>) typeRepository.findAll();
    }

    @Override
    public List<Type> getByCategory(Long categoryId) {
        Category savedCategory = categoryRepository.findById(categoryId).orElse(null);
        return typeRepository.findByCategory(savedCategory);
    }

    @Override
    public Type addNew(Type type,Long id) {
        Type typeObj = new Type();
        typeObj.setName(type.getName());
        categoryRepository.findById(id).map(categoryObj->{
            typeObj.setCategory(categoryObj);
            typeRepository.save(typeObj);
            return null;

        });
        return typeObj;
    }

    @Override
    public String delete(Long id) {
        typeRepository.deleteById(id);
        return "type deleted successfully";
    }

    @Override
    public Optional<Type> getById(Long id) {
        return typeRepository.findById(id);
    }
}
