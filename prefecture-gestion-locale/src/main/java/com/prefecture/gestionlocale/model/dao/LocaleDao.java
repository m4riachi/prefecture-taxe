package com.prefecture.gestionlocale.model.dao;

import com.prefecture.gestionlocale.bean.Locale;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LocaleDao extends PagingAndSortingRepository<Locale, Long> {
    Long countByIce(String nom);
    Long countByIceAndIdNot(String nom, Long id);
    List<Locale> findByIceOrRedevableCinOrderByNom(String ice, String cin);
}
