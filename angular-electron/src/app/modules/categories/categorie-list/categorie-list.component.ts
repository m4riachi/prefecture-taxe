import { Component, OnInit } from '@angular/core';
import { CategorieService } from "../categorie.service";
import { ActivatedRoute, Router } from "@angular/router";
@Component({
  selector: 'app-categorie-list',
  templateUrl: './categorie-list.component.html',
  styleUrls: ['./categorie-list.component.scss']
})
export class CategorieListComponent implements OnInit {
  id;
  column = [
    { key: 'id', name: '#', width: 80, search: false },
    { key: 'nom', name: 'Nom', width: 0, search: true }
  ];

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
