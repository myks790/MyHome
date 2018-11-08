package com.myks790.myhome.model;

import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
public class SideMenu implements Serializable {
    private static final long serialVersionUID = -5919347662604803050L;
    @Id
    private Integer id;

    private String title;

    @Enumerated(EnumType.STRING)
    private Status status;
}
