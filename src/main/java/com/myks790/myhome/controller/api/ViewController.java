package com.myks790.myhome.controller.api;


import com.myks790.myhome.model.Content;
import com.myks790.myhome.repository.ContentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping
    public Content save(@RequestBody Content data){
        Content content = contentRepository.findById(data.getId()).get();
        content.setContent(data.getContent());
        return contentRepository.save(content);
    }
}
