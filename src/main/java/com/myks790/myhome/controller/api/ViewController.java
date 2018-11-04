package com.myks790.myhome.controller.api;


import com.myks790.myhome.model.Content;
import com.myks790.myhome.repository.ContentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
@RequestMapping(value = "/api/content")
@RequiredArgsConstructor
public class ViewController {
    private final ContentRepository contentRepository;

    @GetMapping("/get/{id}")
    public Optional<Content> get(@PathVariable Integer id){
        return contentRepository.findById(id);
    }
}
