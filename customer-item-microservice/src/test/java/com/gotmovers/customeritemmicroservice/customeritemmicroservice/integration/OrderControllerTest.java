package com.gotmovers.customeritemmicroservice.customeritemmicroservice.integration;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.gotmovers.customeritemmicroservice.customeritemmicroservice.bean.OrderReq;
import com.gotmovers.customeritemmicroservice.customeritemmicroservice.bean.OrderReqItem;
import com.gotmovers.customeritemmicroservice.customeritemmicroservice.bean.OrderReqLatLon;
import com.gotmovers.customeritemmicroservice.customeritemmicroservice.repository.ItemRepository;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;

import java.util.Arrays;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("qa")
class OrderControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ItemRepository itemRepository;

    @Test
    public void addNew_WillReturnTotalPrice_Success() throws Exception {
        OrderReq sampleReq = new OrderReq();
        OrderReqLatLon sampleOrigin = new OrderReqLatLon();sampleOrigin.setLat(1234d);sampleOrigin.setLon(3456d);
        OrderReqLatLon sampleDest = new OrderReqLatLon();sampleDest.setLat(9876d);sampleDest.setLon(4321d);
        OrderReqItem sampleItem = new OrderReqItem();sampleItem.setId(17L);sampleItem.setQuantity(10);

        sampleReq.setOrigin(sampleOrigin);
        sampleReq.setDestination(sampleDest);
        sampleReq.setItems(Arrays.asList(sampleItem));


        RequestBuilder rb = MockMvcRequestBuilders
                            .post("/order/addNew")
                            .contentType(MediaType.APPLICATION_JSON)
                            .content(new ObjectMapper().writeValueAsString(sampleReq));

        mockMvc.perform(rb)
                .andExpect(status().isOk())
                .andExpect(jsonPath("totalPrice").value("1000.0"))
                .andDo(MockMvcResultHandlers.print());
    }

}