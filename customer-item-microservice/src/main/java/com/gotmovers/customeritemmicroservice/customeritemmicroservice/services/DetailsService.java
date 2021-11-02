package com.gotmovers.customeritemmicroservice.customeritemmicroservice.services;

import com.gotmovers.customeritemmicroservice.customeritemmicroservice.models.Details;

import java.util.List;
import java.util.Optional;

public interface DetailsService {
    public List<Details> getAll();
    public List<Details> getByItem(Long itemId);
    public Details addNew(Details details,Long id);
    public String delete(Long id);
    public Optional<Details> getById(Long id);
}
