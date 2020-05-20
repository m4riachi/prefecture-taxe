package com.prefecture.gestionlocale.model.ws.provided;

import com.prefecture.gestionlocale.bean.Quartier;
import com.prefecture.gestionlocale.model.service.facade.QuartierService;
import com.prefecture.gestionlocale.util.Helper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.json.MappingJacksonValue;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("api/quartiers")
public class QuartierRest {
    @Autowired
    private Helper helper;

    @Autowired
    private QuartierService quartierService;

    @GetMapping("/")
    public ResponseEntity<?> findAll(@RequestParam String search, @PageableDefault(sort = "id", direction = Sort.Direction.DESC) Pageable pageable) {
        return quartierService.findAll(search, pageable);
    }

    @PostMapping("/")
    public ResponseEntity<?> create(@Valid @RequestBody Quartier quartier) {
        return quartierService.create(quartier);
    }

    @PutMapping("/")
    public ResponseEntity<?> update(@RequestBody Quartier quartier) {
        return quartierService.update(quartier);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        return quartierService.delete(id);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> read(@PathVariable Long id) {
        return quartierService.read(id);
    }

    @GetMapping("/data-for-select")
    public ResponseEntity<?> dataForSelect() {
        return quartierService.dataForSelect();
    }

    @GetMapping("/l")
    public MappingJacksonValue findAll(){
        return helper.objectFilter("QuartierFilter", null, "name", "email", "id");
    }
}
