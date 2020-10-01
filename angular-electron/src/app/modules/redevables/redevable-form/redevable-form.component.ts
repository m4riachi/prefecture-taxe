import { Component, OnInit } from '@angular/core';
import { RedevableService } from "../redevable.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-redevable-form',
  templateUrl: './redevable-form.component.html',
  styleUrls: ['./redevable-form.component.sass']
})
export class RedevableFormComponent implements OnInit {
  id;

  constructor(public service: RedevableService, private route: ActivatedRoute, private router: Router) { }

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
    if (this.service.redevable.id == 0) this.service.save();
    else this.service.update();
  }

}
