package com.prefecture.gestionlocale.model.service.facade;

import com.prefecture.gestionlocale.bean.Rue;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;

public interface RueService {
    ResponseEntity<?> findAll(String search, Pageable pageable);

    ResponseEntity<?> create(Rue rue);

    ResponseEntity<?> update(Rue rue);

    ResponseEntity<?> delete(Long id);

    ResponseEntity<?> read(Long id);
    
    ResponseEntity<?> dataForSelect(Long quartierId);
}
