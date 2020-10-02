import { Component, Input, OnInit } from '@angular/core';
import { ConstantsService } from "../../../utilities/constants.service";
import * as _ from 'lodash';
import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'ngbd-modal-confirm-autofocus',
  template: `
  <div class="modal-header">
    <h4 class="modal-title" id="modal-title">Item deletion</h4>
    <button type="button" class="close" aria-label="Close button" aria-describedby="modal-title" (click)="modal.dismiss('Cross click')">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <p><strong>Are you sure you want to delete this item</strong></p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-outline-secondary" (click)="modal.dismiss('cancel click')">Cancel</button>
    <button type="button" ngbAutofocus class="btn btn-danger" (click)="close()">Ok</button>
  </div>
  `
})
export class NgbdModalConfirmAutofocus {
  constructor(public modal: NgbActiveModal) { }

  close() {
    this.modal.close('close');
  }
}

@Component({
  selector: 'app-pageable-list',
  templateUrl: './pageable-list.component.html',
  styleUrls: ['./pageable-list.component.scss']
})
export class PageableListComponent implements OnInit {
  @Input() service;
  @Input() column;
  @Input() baseuri;
  filter = '';

  constructor(public constantes: ConstantsService, private _modalService: NgbModal) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.pageable.isLoading = true;
    this.service.pageable.search = this.filter;
    this.service.findAll();
  }

  sort(column) {
    this.service.pageable.sort = column;
    this.findAll();
  }

  debouncing = _.debounce(() => this.findAll(), 300);
  search() {
    this.debouncing();
  }

  delete(id) {
    this._modalService.open(NgbdModalConfirmAutofocus).result.then(data => {
      if (data == 'close') {
        this.service.delete(id);
      }
    });
  }
}
