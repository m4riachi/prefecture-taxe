package com.prefecture.gestionlocale.model.ws.provided;

import com.prefecture.gestionlocale.bean.Locale;
import com.prefecture.gestionlocale.model.service.facade.LocaleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("api/locales")
public class LocaleRest {
    @Autowired
    private LocaleService localeService;

    @GetMapping("/")
    public ResponseEntity<?> findAll(@PageableDefault(sort = "id", direction = Sort.Direction.DESC) Pageable pageable) {
        return localeService.findAll(pageable);
    }

    @PostMapping("/")
    public ResponseEntity<?> create(@Valid @RequestBody Locale locale) {
        return localeService.create(locale);
    }

    @PutMapping("/")
    public ResponseEntity<?> update(@RequestBody Locale locale) {
        return localeService.update(locale);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        return localeService.delete(id);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> read(@PathVariable Long id) {
        return localeService.read(id);
    }
    
    @GetMapping("/{search}/ice-cin")
    public ResponseEntity<?> read(@PathVariable String search) {
        return localeService.iceCin(search);
    }
}
