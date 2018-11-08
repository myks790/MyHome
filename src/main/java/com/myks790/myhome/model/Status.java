package com.myks790.myhome.model;

/**
 * 상태
 */
public enum Status {
    SERVICE("서비스"),
    STANDBY("삭제");

    private final String name;

    Status(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}


