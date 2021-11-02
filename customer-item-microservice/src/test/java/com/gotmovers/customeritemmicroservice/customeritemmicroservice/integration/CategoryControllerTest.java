package com.gotmovers.customeritemmicroservice.customeritemmicroservice.integration;

import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
@ActiveProfiles("qa")
class CategoryControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    public void greetings_GreetingMessage_SuccessStatus() throws Exception {

        RequestBuilder requestBuilder = MockMvcRequestBuilders
                                        .get("/categories/greetings");

        mockMvc.perform(requestBuilder)
                .andExpect(status().isOk())
                .andExpect(content().string("hello from categories"));
    }

    @Test
    public void getAll_ListOfCategoriesJSONArray_Success() throws Exception {
        RequestBuilder requestBuilder = MockMvcRequestBuilders
                                        .get("/categories/getAll");

        mockMvc.perform(requestBuilder)
                .andDo(MockMvcResultHandlers.print())
                .andExpect(status().isOk())
                .andExpect(jsonPath("$").isArray())
        ;
    }

}