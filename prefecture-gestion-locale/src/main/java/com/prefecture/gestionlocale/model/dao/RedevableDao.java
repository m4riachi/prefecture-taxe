package com.prefecture.gestionlocale.model.dao;

import com.prefecture.gestionlocale.bean.Redevable;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RedevableDao extends PagingAndSortingRepository<Redevable, Long> {
    List<Redevable> findByNomOrCin(String p1, String p2);

    Long countByCin(String cin);
    Long countByCinAndIdNot(String cin, Long id);
}
