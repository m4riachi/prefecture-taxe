package com.prefecture.gestionlocale.model.service.facade;

import com.prefecture.gestionlocale.bean.Categorie;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;

public interface CategorieService {
    ResponseEntity<?> findAll(String search, Pageable pageable);

    ResponseEntity<?> create(Categorie categorie);

    ResponseEntity<?> update(Categorie categorie);

    ResponseEntity<?> delete(Long id);

    ResponseEntity<?> read(Long id);
    
    ResponseEntity<?> dataForSelect();
}
