package com.myks790.myhome.controller.api;

import com.myks790.myhome.model.SideMenu;
import com.myks790.myhome.model.Status;
import com.myks790.myhome.repository.SideMenuRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/api/sideMenu")
@RequiredArgsConstructor
public class SideMenuController {
    private final SideMenuRepository sideMenuRepository;


    @Cacheable(cacheNames = "menu")
    @GetMapping("/list")
    public List<SideMenu> get(){
        return sideMenuRepository.findAllByStatus(Status.SERVICE);
    }
}
