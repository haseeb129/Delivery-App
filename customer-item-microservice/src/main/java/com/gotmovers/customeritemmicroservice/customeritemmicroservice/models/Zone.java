package com.gotmovers.customeritemmicroservice.customeritemmicroservice.models;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "zones")
@Data
public class Zone {
    @Column(name = "zone_id")
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column
    private String name;
    @Column
    private String description;

    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.MERGE, mappedBy = "zone")
    private List<Area> areas;

}

