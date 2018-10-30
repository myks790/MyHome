package com.myks790.myhome.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@Entity
public class SideMenu {
    @Id
    private Integer id;

    private String title;

}
