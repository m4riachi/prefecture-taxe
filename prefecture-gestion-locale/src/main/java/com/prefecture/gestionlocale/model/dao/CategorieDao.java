package com.prefecture.gestionlocale.model.dao;

import com.prefecture.gestionlocale.bean.Categorie;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

@Repository
public interface CategorieDao extends JpaRepository<Categorie, Long> {
    Page<Categorie> findByNomContaining(String nom, Pageable pageable);
    Long countByNom(String nom);
    Long countByNomAndIdNot(String nom, Long id);
}
