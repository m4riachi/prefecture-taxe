package com.prefecture.gestionlocale.model.dao;

import com.prefecture.gestionlocale.bean.Quartier;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

@Repository
public interface QuartierDao extends JpaRepository<Quartier, Long> {
    Page<Quartier> findByNomContaining(String nom, Pageable pageable);
    Long countByNom(String nom);
    Long countByNomAndIdNot(String nom, Long id);
}
