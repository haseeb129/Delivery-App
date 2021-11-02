package com.gotmovers.customeritemmicroservice.customeritemmicroservice.services;

import com.gotmovers.customeritemmicroservice.customeritemmicroservice.models.Details;
import com.gotmovers.customeritemmicroservice.customeritemmicroservice.models.Item;
import com.gotmovers.customeritemmicroservice.customeritemmicroservice.repository.DetailRepository;
import com.gotmovers.customeritemmicroservice.customeritemmicroservice.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DetailsServiceImplementation implements DetailsService{

    @Autowired
    private DetailRepository detailRepository;

    @Autowired
    private ItemRepository itemRepository;

    @Override
    public List<Details> getAll() {
        return (List<Details>) detailRepository.findAll() ;
    }

    @Override
    public List<Details> getByItem(Long itemId) {
        Item savedItem = itemRepository.findById(itemId).orElse(null);
        return detailRepository.getByItem(savedItem);
    }

    @Override
    public Details addNew(Details details,Long id) {
        Details detailsObj = new Details();
        detailsObj.setQuantity(details.getQuantity());
        itemRepository.findById(id).map(itemObj->{
            detailsObj.setItem(itemObj);
            detailRepository.save(detailsObj);
            return null;

        });
        return detailsObj;
    }

    @Override
    public String delete(Long id) {
        detailRepository.deleteById(id);
        return "details deleted successfully";
    }

    @Override
    public Optional<Details> getById(Long id) {
        return detailRepository.findById(id);
    }


}
