package com.gotmovers.customeritemmicroservice.customeritemmicroservice.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name="areas")
@Data
public class Area {
    @Column
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column
    private String name;
    @Column
    private String description;
    @ManyToOne(fetch = FetchType.LAZY,optional = false,cascade = CascadeType.MERGE)
    @JoinColumn(name = "zone_id",nullable = false)
    @JsonIgnore
    private Zone zone;
    @OneToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL, mappedBy = "area")
    private Reservation reservation ;
}
