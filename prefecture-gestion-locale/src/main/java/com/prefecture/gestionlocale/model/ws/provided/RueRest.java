package com.prefecture.gestionlocale.model.ws.provided;

import com.prefecture.gestionlocale.bean.Rue;
import com.prefecture.gestionlocale.model.service.facade.RueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("api/rues")
public class RueRest {
    @Autowired
    private RueService rueService;

    @GetMapping("/")
    public ResponseEntity<?> findAll(@RequestParam String search, @PageableDefault(sort = "id", direction = Sort.Direction.DESC) Pageable pageable) {
        return rueService.findAll(search, pageable);
    }

    @PostMapping("/")
    public ResponseEntity<?> create(@Valid @RequestBody Rue rue) {
        return rueService.create(rue);
    }

    @PutMapping("/")
    public ResponseEntity<?> update(@RequestBody Rue rue) {
        return rueService.update(rue);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        return rueService.delete(id);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> read(@PathVariable Long id) {
        return rueService.read(id);
    }
    
    @GetMapping("/data-for-select/{id}/quartier")
    public ResponseEntity<?> dataForSelect(@PathVariable Long id) {
        return rueService.dataForSelect(id);
    }
}
