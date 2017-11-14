import { Component, OnInit } from '@angular/core';

import { ModalService } from '../../services';


@Component({
  selector: 'app-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.scss']
})
export class ErrorModalComponent implements OnInit {

  constructor(
    private modalService: ModalService
  ) { }

  ngOnInit() {
  }

  close() {
    this.modalService.closeModal$.emit(true);
  }


}
