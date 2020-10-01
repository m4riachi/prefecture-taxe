import { Component, OnInit } from '@angular/core';
import { RedevableService } from "../redevable.service";

@Component({
  selector: 'app-redevable-list',
  templateUrl: './redevable-list.component.html',
  styleUrls: ['./redevable-list.component.sass']
})
export class RedevableListComponent implements OnInit {
  column = [
    { key: 'id', name: '#', width: 80, search: false },
    { key: 'nom', name: 'Nom', width: 0, search: true },
    { key: 'cin', name: 'CIN', width: 80, search: true },
    { key: 'type', name: 'Type', width: 80, search: false },
  ];

  constructor(public service: RedevableService) { }

  ngOnInit(): void {
  }

}
