package com.prefecture.gestionlocale.model.service.impl;

import com.prefecture.gestionlocale.bean.Quartier;
import com.prefecture.gestionlocale.bean.Rue;
import com.prefecture.gestionlocale.model.dao.RueDao;
import com.prefecture.gestionlocale.model.service.facade.QuartierService;
import com.prefecture.gestionlocale.model.service.facade.RueService;
import com.prefecture.gestionlocale.model.ws.exception.BeanNotFoundException;
import com.prefecture.gestionlocale.util.Helper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
public class RueImpl implements RueService {
    @Autowired
    private RueDao rueDao;

    @Autowired
    private Helper helper;

    @Autowired
    private QuartierService quartierService;

    public Rue checkId(Long id) {
        Optional<Rue> rue = rueDao.findById(id);

        if (!rue.isPresent())
            throw new BeanNotFoundException(helper.getMessage("validation.entity.notFound"));

        return rue.get();
    }

    public ResponseEntity<?> findAll(String search, Pageable pageable) {
        return helper.response(HttpStatus.OK, true, rueDao.findByNomContainingOrQuartierNomContaining(search, search, pageable));
    }

    public ResponseEntity<?> create(Rue rue){
        quartierService.read(rue.getQuartier().getId());

        if (rueDao.countByNomAndQuartierId(rue.getNom(), rue.getQuartier().getId()) > 0)
            return helper.response(HttpStatus.OK, false, "validation.entity.unique");

        rueDao.save(rue);

        return helper.response(HttpStatus.CREATED, true, "operation.succes");
    }

    public ResponseEntity<?> update(Rue rue){
        this.read(rue.getId());

        if (rue.getQuartier() == null) {
            rue.setQuartier(rueDao.findById(rue.getId()).get().getQuartier());
        }

        quartierService.read(rue.getQuartier().getId());

        if (rueDao.countByNomAndIdNotAndQuartierId(rue.getNom(), rue.getId(), rue.getQuartier().getId()) > 0)
            return helper.response(HttpStatus.FOUND, false, "validation.entity.unique");

        rueDao.save(rue);

        return helper.response(HttpStatus.OK, true, "operation.succes");
    }

    @Transactional
    public ResponseEntity<?> delete(Long id) {
        this.read(id);

        rueDao.deleteById(id);

        return helper.response(HttpStatus.OK, true, "operation.succes");
    }

    public ResponseEntity<?> read(Long id) {
        return helper.response(HttpStatus.OK, true, checkId(id));
    }
    
    public ResponseEntity<?> dataForSelect(Long quartierId) {
        return helper.response(HttpStatus.OK, true,
                helper.objectFilter("QuartierFilter", rueDao.findByQuartierIdOrderByNom(quartierId), "id", "nom") );
    }
}
