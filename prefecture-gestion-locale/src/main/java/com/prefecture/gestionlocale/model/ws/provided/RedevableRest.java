package com.prefecture.gestionlocale.model.ws.provided;

import com.prefecture.gestionlocale.bean.Redevable;
import com.prefecture.gestionlocale.model.service.facade.RedevableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("api/redevables")
public class RedevableRest {
    @Autowired
    private RedevableService redevableService;

    @GetMapping("/")
    public ResponseEntity<?> findAll(@PageableDefault(sort = "id", direction = Sort.Direction.DESC) Pageable pageable) {
        return redevableService.findAll(pageable);
    }

    @PostMapping("/")
    public ResponseEntity<?> create(@Valid @RequestBody Redevable redevable) {
        return redevableService.create(redevable);
    }

    @PutMapping("/")
    public ResponseEntity<?> update(@RequestBody Redevable redevable) {
        return redevableService.update(redevable);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        return redevableService.delete(id);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> read(@PathVariable Long id) {
        return redevableService.read(id);
    }
    
    @GetMapping("/data-for-select")
    public ResponseEntity<?> dataForSelect() {
        return redevableService.dataForSelect();
    }
}
