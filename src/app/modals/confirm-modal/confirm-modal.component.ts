import { Component } from '@angular/core';

import { ModalService } from '../../services';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss', '../modal-container/modal-container.component.scss']
})
export class ConfirmModalComponent {
  public headerText: string;
  public bodyText: string;

  constructor(
    private modalService: ModalService
  ) {
    console.log('confirm modal init');
  }

  close() {
    this.modalService.closeModal$.emit();
  }

  submit() {
    this.modalService.closeModal$.emit(true);
  }

}
