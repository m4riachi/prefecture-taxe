package com.prefecture.gestionlocale.model.dao;

import com.prefecture.gestionlocale.bean.Locale;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LocaleDao extends PagingAndSortingRepository<Locale, Long> {
    Long countByNom(String nom);
    Long countByNomAndIdNot(String nom, Long id);
}
