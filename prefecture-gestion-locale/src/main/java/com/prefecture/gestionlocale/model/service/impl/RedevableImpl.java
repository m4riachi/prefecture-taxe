package com.prefecture.gestionlocale.model.service.impl;

import com.prefecture.gestionlocale.bean.Redevable;
import com.prefecture.gestionlocale.model.dao.RedevableDao;
import com.prefecture.gestionlocale.model.service.facade.RedevableService;
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
public class RedevableImpl implements RedevableService {
    @Autowired
    private RedevableDao redevableDao;

    @Autowired
    private Helper helper;

    public Redevable checkId(Long id){
        Optional<Redevable> redevable = redevableDao.findById(id);

        if (!redevable.isPresent())
            throw new BeanNotFoundException("Redevable " + helper.getMessage("validation.entity.notFound"));

        return redevable.get();
    }

    public ResponseEntity<?> findAll(Pageable pageable) {
        return helper.response(HttpStatus.OK, true, redevableDao.findAll(pageable));
    }

    public ResponseEntity<?> create(Redevable redevable){
        if (redevableDao.countByCin(redevable.getCin()) > 0)
            return helper.response(HttpStatus.OK, false, "validation.entity.unique");

        redevableDao.save(redevable);

        return helper.response(HttpStatus.CREATED, true, "operation.succes");
    }

    public ResponseEntity<?> update(Redevable redevable){
        checkId(redevable.getId());

        if (redevableDao.countByCinAndIdNot(redevable.getCin(), redevable.getId()) > 0)
            return helper.response(HttpStatus.OK, false, "validation.entity.unique");

        redevableDao.save(redevable);

        return helper.response(HttpStatus.OK, true, "operation.succes");
    }

    @Transactional
    public ResponseEntity<?> delete(Long id) {
        checkId(id);

        redevableDao.deleteById(id);

        return helper.response(HttpStatus.OK, true, "operation.succes");
    }

    public ResponseEntity<?> read(Long id) {
        return helper.response(HttpStatus.OK, true, checkId(id));
    }

    public ResponseEntity<?> dataForSelect() {
        return helper.response(HttpStatus.OK, true,
                helper.objectFilter("QuartierFilter", redevableDao.findAll(Sort.by(Sort.Direction.ASC, "nom")), "id", "nom") );
    }
}
