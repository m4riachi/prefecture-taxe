import { Component, OnInit } from '@angular/core';
import {RueService} from "../rue.service";
@Component({
  selector: 'app-rue-list',
  templateUrl: './rue-list.component.html',
  styleUrls: ['./rue-list.component.scss']
})
export class RueListComponent implements OnInit {
  column = [
    {key: 'id', object: false, name: '#', width: 80, search: false},
    {key: 'quartier', object: true, subKey: 'nom', name: 'quartier', width: 200, search: true},
    {key: 'nom', object: false,  name: 'Nom', width: 0, search: true}
  ];
  constructor(public service:RueService) { }

  ngOnInit(): void {
  }

}
