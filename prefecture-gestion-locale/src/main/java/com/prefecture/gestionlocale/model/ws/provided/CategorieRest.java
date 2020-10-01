package com.prefecture.gestionlocale.model.ws.provided;

import com.prefecture.gestionlocale.bean.Categorie;
import com.prefecture.gestionlocale.model.service.facade.CategorieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("api/categories")
public class CategorieRest {
    @Autowired
    private CategorieService categorieService;

    @GetMapping("/")
    public ResponseEntity<?> findAll(@RequestParam String search, @PageableDefault(sort = "id", direction = Sort.Direction.DESC) Pageable pageable) { return categorieService.findAll(search, pageable); }

    @PostMapping("/")
    public ResponseEntity<?> create(@Valid @RequestBody Categorie categorie) {
        return categorieService.create(categorie);
    }

    @PutMapping("/")
    public ResponseEntity<?> update(@RequestBody Categorie categorie) {
        return categorieService.update(categorie);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        return categorieService.delete(id);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> read(@PathVariable Long id) {
        return categorieService.read(id);
    }
    
    @GetMapping("/data-for-select")
    public ResponseEntity<?> dataForSelect() {
        return categorieService.dataForSelect();
    }
}
