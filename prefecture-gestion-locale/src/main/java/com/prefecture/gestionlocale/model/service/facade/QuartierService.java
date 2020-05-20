package com.prefecture.gestionlocale.model.service.facade;

import com.prefecture.gestionlocale.bean.Quartier;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;

public interface QuartierService {
    ResponseEntity<?> findAll(String search, Pageable pageable);

    ResponseEntity<?> create(Quartier quartier);

    ResponseEntity<?> update(Quartier quartier);

    ResponseEntity<?> delete(Long id);

    ResponseEntity<?> read(Long id);

    ResponseEntity<?> dataForSelect();
}
