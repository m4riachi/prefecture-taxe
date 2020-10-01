import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { LocaleService } from "../locale.service";

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
      this.service.findById(this.id);
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
    this.service.rueForSelect(this.service.locale.rue.quartier.id);
  }

}
