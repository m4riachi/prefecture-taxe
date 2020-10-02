import { Component, OnInit } from '@angular/core';
import { LocaleService } from "../locale.service";

@Component({
  selector: 'app-locale-list',
  templateUrl: './locale-list.component.html',
  styleUrls: ['./locale-list.component.sass']
})
export class LocaleListComponent implements OnInit {
  column = [
    { key: 'id', object: false, name: '#', width: 80, search: false },
    { key: 'categorie', object: true, subKey: 'nom', name: 'categorie', width: 120, search: true },
    { key: 'redevable', object: true, subKey: 'nom', name: 'redevable', width: 120, search: true },
    { key: 'nom', object: false, name: 'Nom', width: 0, search: true }
  ];

  constructor(public service: LocaleService) { }

  ngOnInit(): void {
  }

}
