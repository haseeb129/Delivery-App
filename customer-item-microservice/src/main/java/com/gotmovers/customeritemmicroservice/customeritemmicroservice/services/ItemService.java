package com.gotmovers.customeritemmicroservice.customeritemmicroservice.services;

import com.gotmovers.customeritemmicroservice.customeritemmicroservice.models.Item;

import java.util.List;
import java.util.Optional;

public interface ItemService {
    public List<Item> getAll();
    public List<Item> getByType(Long typeId);
    public Item addNew(Item item,Long id);
    public String delete(Long id);
    public Optional<Item> getById(Long id);
}
