import { Component, OnInit } from '@angular/core';
import { CategorieService} from "../categorie.service";
@Component({
  selector: 'app-categorie-list',
  templateUrl: './categorie-list.component.html',
  styleUrls: ['./categorie-list.component.scss']
})
export class CategorieListComponent implements OnInit {
  column = [
    {key: 'id', name: '#', width: 80, search: false},
    {key: 'nom', name: 'Nom', width: 0, search: true}
  ];

  constructor(public service:CategorieService) { }

  ngOnInit(): void {
  }

}
