import { Component, OnInit } from '@angular/core';
import { CategorieService } from "../categorie.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-categorie-form',
  templateUrl: './categorie-form.component.html',
  styleUrls: ['./categorie-form.component.scss']
})
export class CategorieFormComponent implements OnInit {
  id;

  constructor(public service: CategorieService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id != null) {
      this.service.findById(this.id);
    }
    else {
      this.service.init();
    }
  }

  save() {
    if (this.service.categorie.id == 0) this.service.save();
    else this.service.update();
  }
}
