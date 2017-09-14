import { Component } from '@angular/core';

import { ModalService } from '../../services';

@Component({
  selector: 'app-contact-us-modal',
  templateUrl: './contact-us-modal.component.html',
  styleUrls: ['./contact-us-modal.component.scss', '../modal-container/modal-container.component.scss']
})
export class ContactUsModalComponent {
  emailError: boolean;
  email: string;
  messageError: boolean;
  message: string;
  invalidForm: boolean;

  constructor(
    private modalService: ModalService
  ) {}

  submit() {
    console.log('sumbit')
    // this.modalService.closeModal$.emit();
  }

  close() {
    this.modalService.closeModal$.emit();
  }

  // todo: use as PhoneFormat
  phoneFormatter(t: any): any {
    const numbers: string = t ? t.replace(/\D/g, '') : '',
          dashes: Object = {
            3: '-',
            5: '-',
            7: '-'
          },
          len = (numbers.length <= 10) ? numbers.length : 10;
    let result: string = '';

    for (let i = 0; i < len; i++) {
      result += (dashes[i] || '') + numbers[i];
    }

    return result;
  }
}
