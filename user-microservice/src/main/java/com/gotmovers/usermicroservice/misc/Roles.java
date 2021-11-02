package com.gotmovers.usermicroservice.misc;

import java.util.Arrays;

public enum Roles {

    DBA("dba", "ROLE_DBA"),

    ADMIN("admin", "ROLE_ADMIN"),

    CUSTOMER("customer", "ROLE_CUSTOMER"),

    MOVER("mover", "ROLE_MOVER");


    private final String codeAbbr;
    private final String dbAbbr;

    private Roles(String codeAbbr, String dbAbbr) {
        this.codeAbbr = codeAbbr;
        this.dbAbbr = dbAbbr;
    }

    public String getCodeAbbr() {
        return codeAbbr;
    }

    public String getDbAbbr() {
        return dbAbbr;
    }

    public static Roles findByCodeAbbr(String codeAbbr) {
        return Arrays
                .stream(values())
                .filter(role -> role
                        .getCodeAbbr()
                        .equals(codeAbbr))
                .findFirst()
                .orElse(null);

    }
}

