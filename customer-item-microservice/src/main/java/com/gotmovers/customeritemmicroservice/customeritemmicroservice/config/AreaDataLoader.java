package com.gotmovers.customeritemmicroservice.customeritemmicroservice.config;

import com.gotmovers.customeritemmicroservice.customeritemmicroservice.models.Area;
import com.gotmovers.customeritemmicroservice.customeritemmicroservice.models.Zone;
import com.gotmovers.customeritemmicroservice.customeritemmicroservice.repository.AreaRepository;
import com.gotmovers.customeritemmicroservice.customeritemmicroservice.repository.ZoneRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class AreaDataLoader {
    private static final Logger log = LoggerFactory.getLogger(DataLoader.class);

    @Autowired
    ZoneRepository zoneRepository;

    @Autowired
    AreaRepository areaRepository;

    @PostConstruct
    void init(){
        Zone zoneOne = new Zone();zoneOne.setDescription("Zone 1");zoneOne.setName("Zone 1");log.info("Saved: {}", zoneOne=zoneRepository.save(zoneOne));

        Zone zoneTwo = new Zone();zoneTwo.setDescription("Zone 2");zoneTwo.setName("Zone 2");log.info("Saved: {}", zoneTwo=zoneRepository.save(zoneTwo));

        Zone zoneThree = new Zone();zoneThree.setDescription("Zone 3");zoneThree.setName("Zone 3");log.info("Saved: {}", zoneThree=zoneRepository.save(zoneThree));

        Zone zoneFour = new Zone();zoneFour.setDescription("Zone 4");zoneFour.setName("Zone 4");log.info("Saved: {}", zoneFour=zoneRepository.save(zoneFour));

        List<Area> savedAreasForZone1 = saveZoneAreaModels(
                zoneOne,
                Arrays.asList(  "Aguadilla",
                                "Aguada"
                ));


        List<Area> savedAreasForZone2 = saveZoneAreaModels(
                zoneTwo,
                Arrays.asList(  "Naranjito",
                                "Toa Alta"
                ));

        List<Area> savedAreasForZone3 = saveZoneAreaModels(
                zoneThree,
                Arrays.asList(  "Mayaguez",
                                "Hormigueros"
                ));

        List<Area> savedAreasForZone4 = saveZoneAreaModels(
                zoneFour,
                Arrays.asList(  "Coamo",
                                "Santa Isabel"
                ));

    }
        private List<Area> saveZoneAreaModels(Zone zone, List<String> areaList){
            return areaList.stream()
                    .map(area->{
                        Area areaModel = new Area();
                        areaModel.setName(area);
                        areaModel.setZone(zone);
                        log.info("Saved: {}", areaModel=areaRepository.save(areaModel));
                        return areaModel;
                    }).collect(Collectors.toList());
        }



}
