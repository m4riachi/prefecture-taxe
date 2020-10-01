import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { QuartierService} from "../quartier.service";

@Component({
  selector: 'app-quartier-form',
  templateUrl: './quartier-form.component.html',
  styleUrls: ['./quartier-form.component.scss']
})
export class QuartierFormComponent implements OnInit {
  id;

  constructor(public service: QuartierService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id != null) {
      this.service.findById(this.id);
    }
    else {
      this.service.init();
    }
  }

  save(){
    if (this.service.quartier.id == 0) this.service.save();
    else this.service.update();
  }

}
