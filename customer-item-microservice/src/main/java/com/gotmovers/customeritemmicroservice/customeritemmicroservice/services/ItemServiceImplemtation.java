package com.gotmovers.customeritemmicroservice.customeritemmicroservice.services;

import com.gotmovers.customeritemmicroservice.customeritemmicroservice.models.Item;
import com.gotmovers.customeritemmicroservice.customeritemmicroservice.models.Type;
import com.gotmovers.customeritemmicroservice.customeritemmicroservice.repository.ItemRepository;
import com.gotmovers.customeritemmicroservice.customeritemmicroservice.repository.TypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ItemServiceImplemtation implements ItemService {
    @Autowired
    private ItemRepository itemRepository;

    @Autowired
    private TypeRepository typeRepository;

    @Override
    public List<Item> getAll() {
        return (List<Item>) itemRepository.findAll() ;
    }

    @Override
    public List<Item> getByType(Long typeId) {
        Type savedType = typeRepository.findById(typeId).orElse(null);
        return itemRepository.findByType(savedType) ;
    }
    @Override
    public Item addNew(Item item, Long id) {
        Item itemObj = new Item();
        itemObj.setCost(item.getCost());
        itemObj.setDescription(item.getDescription());
        typeRepository.findById(id).map(typeObj->{
            itemObj.setType(typeObj);
            itemRepository.save(itemObj);
            return null;

        });
        return itemObj;
    }

    @Override
    public String delete(Long id) {
        itemRepository.deleteById(id);
        return "item deleted successfully";
    }

    @Override
    public Optional<Item> getById(Long id) {
        return itemRepository.findById(id);
    }


}
