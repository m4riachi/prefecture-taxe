package com.prefecture.gestionlocale.model.service.facade;

import com.prefecture.gestionlocale.bean.Redevable;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;

public interface RedevableService {
    ResponseEntity<?> findAll(Pageable pageable);

    ResponseEntity<?> create(Redevable redevable);

    ResponseEntity<?> update(Redevable redevable);

    ResponseEntity<?> delete(Long id);

    ResponseEntity<?> read(Long id);
    
    ResponseEntity<?> dataForSelect();
}
