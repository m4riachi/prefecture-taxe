package com.prefecture.gestionlocale.model.service.impl;

import com.prefecture.gestionlocale.bean.Quartier;
import com.prefecture.gestionlocale.model.ws.exception.BeanNotFoundException;
import com.prefecture.gestionlocale.model.dao.QuartierDao;
import com.prefecture.gestionlocale.model.service.facade.QuartierService;
import com.prefecture.gestionlocale.util.Helper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class QuartierImpl implements QuartierService {
    @Autowired
    private QuartierDao quartierDao;

    @Autowired
    private Helper helper;

    public Quartier checkId(Long id){
        Optional<Quartier> quartier = quartierDao.findById(id);

        if (!quartier.isPresent())
            throw new BeanNotFoundException("Quartier " + helper.getMessage("validation.entity.notFound"));

        return quartier.get();
    }

    public ResponseEntity<?> findAll(String search, Pageable pageable) {
        return helper.response(HttpStatus.OK, true, quartierDao.findByNomContaining(search, pageable));
    }

    public ResponseEntity<?> create(Quartier quartier){
        if (quartierDao.countByNom(quartier.getNom()) > 0)
            return helper.response(HttpStatus.OK, false, "validation.entity.unique");

        quartierDao.save(quartier);

        return helper.response(HttpStatus.CREATED, true, "operation.succes");
    }

    public ResponseEntity<?> update(Quartier quartier){
        checkId(quartier.getId());

        if (quartierDao.countByNomAndIdNot(quartier.getNom(), quartier.getId()) > 0)
            return helper.response(HttpStatus.OK, false, "validation.entity.unique");

        quartierDao.save(quartier);

        return helper.response(HttpStatus.OK, true, "operation.succes");
    }

    @Transactional
    public ResponseEntity<?> delete(Long id) {
        checkId(id);

        quartierDao.deleteById(id);

        return helper.response(HttpStatus.OK, true, "operation.succes");
    }

    public ResponseEntity<?> read(Long id) {
        return helper.response(HttpStatus.OK, true, checkId(id));
    }

    public ResponseEntity<?> dataForSelect() {
        return helper.response(HttpStatus.OK, true,
                helper.objectFilter("QuartierFilter", quartierDao.findAll(Sort.by(Sort.Direction.ASC, "nom")), "id", "nom") );
    }
}
