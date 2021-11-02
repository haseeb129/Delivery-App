package com.gotmovers.customeritemmicroservice.customeritemmicroservice.services;

import com.gotmovers.customeritemmicroservice.customeritemmicroservice.models.Type;

import java.util.List;
import java.util.Optional;

public interface TypeService {
    public List<Type> getAll();
    public List<Type> getByCategory(Long categoryId);
    public Type addNew(Type type,Long id);
    public String delete(Long id);
    public Optional<Type> getById(Long id);

}
