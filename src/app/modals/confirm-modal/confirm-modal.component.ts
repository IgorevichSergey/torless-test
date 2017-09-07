import { Component, OnInit } from '@angular/core';

import { ModalService } from '../../services';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss']
})
export class ConfirmModalComponent implements OnInit {

  constructor(
    private modalService: ModalService
  ) {
    console.log('confirm modal init');
  }

  ngOnInit() {
  }

  close() {
    this.modalService.closeModal$.emit();
  }

  submit() {
    this.modalService.closeModal$.emit(true);
  }

}
