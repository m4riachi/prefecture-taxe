import { Component, OnInit } from '@angular/core';
import {QuartierService} from "../quartier.service";

@Component({
  selector: 'app-quartier-list',
  templateUrl: './quartier-list.component.html',
  styleUrls: ['./quartier-list.component.scss']
})
export class QuartierListComponent implements OnInit {
  column = [
    {key: 'id', name: '#', width: 80, search: false},
    {key: 'nom', name: 'Nom', width: 0, search: true}
  ];
  constructor(public service:QuartierService) { }

  ngOnInit(): void {
  }

}
