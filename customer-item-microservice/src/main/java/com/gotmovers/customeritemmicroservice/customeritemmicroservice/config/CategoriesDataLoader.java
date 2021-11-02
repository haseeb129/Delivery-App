package com.gotmovers.customeritemmicroservice.customeritemmicroservice.config;

import com.gotmovers.customeritemmicroservice.customeritemmicroservice.models.Category;
import com.gotmovers.customeritemmicroservice.customeritemmicroservice.models.Item;
import com.gotmovers.customeritemmicroservice.customeritemmicroservice.repository.CategoryRepository;
import com.gotmovers.customeritemmicroservice.customeritemmicroservice.models.Type;
import com.gotmovers.customeritemmicroservice.customeritemmicroservice.repository.DetailRepository;
import com.gotmovers.customeritemmicroservice.customeritemmicroservice.repository.ItemRepository;
import com.gotmovers.customeritemmicroservice.customeritemmicroservice.repository.TypeRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;

@Service
public class CategoriesDataLoader {

    private static final Logger log = LoggerFactory.getLogger(CategoriesDataLoader.class);

    @Autowired
    private CategoryRepository categoryRepository;

    @Autowired
    private TypeRepository typeRepository;

    @Autowired
    private ItemRepository itemRepository;

    @Autowired
    private DetailRepository detailRepository;

    @PostConstruct
    public void init() {
        Category category1 = new Category();
        category1.setName("first category");
        log.info("Saved: {}", categoryRepository.save(category1));
        System.out.println("category1");
        System.out.println(category1);

        Type type1 = new Type();
        type1.setId(1l);
        type1.setName("category 1 type 1");
        type1.setCategory(category1);
        log.info("Saved: {}", typeRepository.save(type1));

        Type type2 = new Type();
        type2.setId(1l);
        type2.setName("category 1 type 2");
        type2.setCategory(category1);
        log.info("Saved: {}", typeRepository.save(type2));

        Item item1 = new Item();
        item1.setId(1l);
        item1.setName("item1 type1");
        item1.setCost(50d);
        item1.setDescription("description");
        item1.setType(type1);
        log.info("Saved: {}", itemRepository.save(item1));



        /*categoryInterface.findById(1l).map(catObj -> {
                    type1.setCategory(catObj);
                    type2.setCategory(catObj);
                    typeInterface.save(type1);
                    typeInterface.save(type2);

                    typeInterface.findById(2l).map(typeObj -> {
                        item1.setType(typeObj);
                        itemInterface.save(item1);

                        itemInterface.findById(4l).map(itemObj -> {
                            details1.setItem(itemObj);
                            detailInterface.save(details1);
                            return null;
                        });
                        return null;
                    });

                    return null;
                }
        );*/

    }

}
