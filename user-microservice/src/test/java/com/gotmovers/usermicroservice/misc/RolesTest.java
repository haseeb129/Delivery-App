package com.gotmovers.usermicroservice.misc;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class RolesTest {

    @Test
    void getDbAbbrFromCodeAbbr() {
        assertEquals(Roles.findByCodeAbbr("admin"), Roles.ADMIN);
    }
}