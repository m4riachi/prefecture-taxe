import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { LocaleService } from "../locale.service";

import * as moment from 'moment';

export class DateObject {
  year: number;
  month: number;
  day: number;
}
@Component({
  selector: 'app-locale-form',
  templateUrl: './locale-form.component.html',
  styleUrls: ['./locale-form.component.sass']
})
export class LocaleFormComponent implements OnInit {
  id;
  constructor(public service: LocaleService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.service.quartierForSelect();

    this.service.categorieForSelect();

    this.service.redevableForSelect();

    if (this.id != null) {
      this.service.findById(this.id).then(data => {
        let mdt = moment(this.service.locale.dateCreation, 'YYYY-MM-DD');
        if (mdt.isValid()) {
          this.createDate = {
            year: Number(mdt.format('YYYY')),
            month: Number(mdt.format('MM')),
            day: Number(mdt.format('DD')),
          };
        }


        let mdc = moment(this.service.locale.dateFermeture, 'YYYY-MM-DD');
        if (mdc.isValid()) {
          this.endDate = {
            year: Number(mdc.format('YYYY')),
            month: Number(mdc.format('MM')),
            day: Number(mdc.format('DD')),
          };
        }
      });
    }
    else {
      this.service.init();
    }
  }

  save() {
    if (this.service.locale.id == 0) this.service.save();
    else this.service.update();
  }

  getRue() {
    this.service.locale.rue.id = 0;
    this.service.rueForSelect(this.service.locale.rue.quartier.id);
  }

  createDate: DateObject;
  dateCreation() {
    let mdt = moment([this.createDate.year, this.createDate.month - 1, this.createDate.day]);
    if (!mdt.isValid()) this.service.locale.dateCreation = '';
    else this.service.locale.dateCreation = mdt.format('YYYY-MM-DD');

    console.log(this.service.locale);

  }

  endDate: DateObject;
  dateFermeture() {
    let mdt = moment([this.endDate.year, this.endDate.month - 1, this.endDate.day]);
    if (!mdt.isValid()) this.service.locale.dateFermeture = '';
    else this.service.locale.dateFermeture = mdt.format('YYYY-MM-DD');

    console.log(this.service.locale);
  }

}
