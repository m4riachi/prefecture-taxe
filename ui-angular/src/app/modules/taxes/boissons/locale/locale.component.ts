import { Component, OnInit } from '@angular/core';
import { BoissonService } from '../boisson.service';

@Component({
  selector: 'app-locale',
  templateUrl: './locale.component.html',
  styleUrls: ['./locale.component.scss']
})
export class LocaleComponent implements OnInit {

  constructor(public service: BoissonService,) { }

  ngOnInit(): void {
  }

  search() {
    this.service.findLocale();
  }

  getImpayer(i) {
    console.log(this.service.listLocale[i]);
  }
}
