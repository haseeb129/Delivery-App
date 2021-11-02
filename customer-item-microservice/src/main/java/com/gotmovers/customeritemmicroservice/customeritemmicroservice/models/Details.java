package com.gotmovers.customeritemmicroservice.customeritemmicroservice.models;

import lombok.Data;

import javax.persistence.*;

@Entity
@Table(name = "details")
@Data
public class Details {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "detail_id")
    private Long id;

    @Column
    private Integer quantity;

    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL, optional = false)
    @JoinColumn(name = "item_id", nullable = false)
    private Item item;

    /*@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL, optional = false)
    @JoinColumn(name = "reservation_id", nullable = false)
    private Reservation reservation;*/


}
