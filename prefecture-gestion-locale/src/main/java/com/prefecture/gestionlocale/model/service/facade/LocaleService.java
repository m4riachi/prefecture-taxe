package com.prefecture.gestionlocale.model.service.facade;

import com.prefecture.gestionlocale.bean.Locale;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;

public interface LocaleService {
    ResponseEntity<?> findAll(Pageable pageable);

    ResponseEntity<?> create(Locale locale);

    ResponseEntity<?> update(Locale locale);

    ResponseEntity<?> delete(Long id);

    ResponseEntity<?> read(Long id);
    
    ResponseEntity<?> iceCin(String search);
}
