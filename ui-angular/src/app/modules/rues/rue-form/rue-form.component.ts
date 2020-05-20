import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RueService} from "../rue.service";

@Component({
  selector: 'app-rue-form',
  templateUrl: './rue-form.component.html',
  styleUrls: ['./rue-form.component.sass']
})
export class RueFormComponent implements OnInit {
  id;

  constructor(public service: RueService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.service.quartierForSelect();

    if (this.id != null) {
      this.service.findById(this.id);
    }
    else {
      this.service.init();
    }
  }

  save(){
    if (this.service.rue.id == 0) this.service.save();
    else this.service.update();
  }
}
