package com.prefecture.gestionlocale.model.service.impl;


import com.prefecture.gestionlocale.bean.Categorie;
import com.prefecture.gestionlocale.model.dao.CategorieDao;
import com.prefecture.gestionlocale.model.service.facade.CategorieService;
import com.prefecture.gestionlocale.model.ws.exception.BeanNotFoundException;
import com.prefecture.gestionlocale.util.Helper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
public class CategorieImpl implements CategorieService {
    @Autowired
    private CategorieDao categorieDao;

    @Autowired
    private Helper helper;

    public Categorie checkId(Long id){
        Optional<Categorie> categorie = categorieDao.findById(id);

        if (!categorie.isPresent())
            throw new BeanNotFoundException("Catégorie " + helper.getMessage("validation.entity.notFound"));

        return categorie.get();
    }

    public ResponseEntity<?> findAll(String search, Pageable pageable) {
        return helper.response(HttpStatus.OK, true, categorieDao.findByNomContaining(search, pageable));
    }

    public ResponseEntity<?> create(Categorie categorie){
        if (categorieDao.countByNom(categorie.getNom()) > 0)
            return helper.response(HttpStatus.OK, false, "validation.entity.unique");

        categorieDao.save(categorie);

        return helper.response(HttpStatus.CREATED, true, "operation.succes");
    }

    public ResponseEntity<?> update(Categorie categorie){
        checkId(categorie.getId());

        if (categorieDao.countByNomAndIdNot(categorie.getNom(), categorie.getId()) > 0)
            return helper.response(HttpStatus.OK, false, "validation.entity.unique");

        categorieDao.save(categorie);

        return helper.response(HttpStatus.OK, true, "operation.succes");
    }

    @Transactional
    public ResponseEntity<?> delete(Long id) {
        checkId(id);

        categorieDao.deleteById(id);

        return helper.response(HttpStatus.OK, true, "operation.succes");
    }

    public ResponseEntity<?> read(Long id) {
        return helper.response(HttpStatus.OK, true, checkId(id));
    }

    public ResponseEntity<?> dataForSelect() {
        return helper.response(HttpStatus.OK, true,
                helper.objectFilter("QuartierFilter", categorieDao.findAll(Sort.by(Sort.Direction.ASC, "nom")), "id", "nom") );
    }
}
