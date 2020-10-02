package com.prefecture.gestionlocale.model.service.impl;

import com.prefecture.gestionlocale.bean.Locale;
import com.prefecture.gestionlocale.model.dao.LocaleDao;
import com.prefecture.gestionlocale.model.service.facade.LocaleService;
import com.prefecture.gestionlocale.model.ws.exception.BeanNotFoundException;
import com.prefecture.gestionlocale.util.Helper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
public class LocaleImpl implements LocaleService {
    @Autowired
    private LocaleDao localeDao;

    @Autowired
    private Helper helper;

    public Locale checkId(Long id){
        Optional<Locale> locale = localeDao.findById(id);

        if (!locale.isPresent())
            throw new BeanNotFoundException("Locale " + helper.getMessage("validation.entity.notFound"));

        return locale.get();
    }

    public ResponseEntity<?> findAll(Pageable pageable) {
        return helper.response(HttpStatus.OK, true, localeDao.findAll(pageable));
    }

    public ResponseEntity<?> create(Locale locale){
        if (localeDao.countByIce(locale.getIce()) > 0)
            return helper.response(HttpStatus.OK, false, "validation.entity.unique");

        localeDao.save(locale);

        return helper.response(HttpStatus.CREATED, true, "operation.succes");
    }

    public ResponseEntity<?> update(Locale locale){
        checkId(locale.getId());

        if (localeDao.countByIceAndIdNot(locale.getIce(), locale.getId()) > 0)
            return helper.response(HttpStatus.OK, false, "validation.entity.unique");

        localeDao.save(locale);

        return helper.response(HttpStatus.OK, true, "operation.succes");
    }

    @Transactional
    public ResponseEntity<?> delete(Long id) {
        checkId(id);

        localeDao.deleteById(id);

        return helper.response(HttpStatus.OK, true, "operation.succes");
    }

    public ResponseEntity<?> read(Long id) {
        return helper.response(HttpStatus.OK, true, checkId(id));
    }
    
    public ResponseEntity<?> iceCin(String search) {
        return helper.response(HttpStatus.OK, true,
                helper.objectFilter("LocaleFilter", localeDao.findByIceOrRedevableCinOrderByNom(search, search), "id", "nom") );
    }
}
