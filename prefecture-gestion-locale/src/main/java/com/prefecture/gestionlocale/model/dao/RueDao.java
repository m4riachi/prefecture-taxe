package com.prefecture.gestionlocale.model.dao;

import com.prefecture.gestionlocale.bean.Rue;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

@Repository
public interface RueDao extends JpaRepository<Rue, Long> {
    Page<Rue> findByNomContainingOrQuartierNomContaining(String nom, String quartier, Pageable pageable);
    Long countByNomAndQuartierId(String nom, Long quartierId);
    Long countByNomAndIdNotAndQuartierId(String nom, Long id, Long quartierId);
    List<Rue> findByQuartierIdOrderByNom(Long id);
}
