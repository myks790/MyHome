package com.myks790.myhome.model;


import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@Entity
public class Content {
    @Id
    private Integer id;
    private String title;
    private String content;
}
