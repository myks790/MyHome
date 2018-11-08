package com.myks790.myhome.repository;

import com.myks790.myhome.model.SideMenu;
import com.myks790.myhome.model.Status;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SideMenuRepository extends JpaRepository<SideMenu, Integer> {
    List<SideMenu> findAllByStatus(Status status);
}
