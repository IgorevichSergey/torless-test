import { Component, OnInit } from '@angular/core';

import { CafeteriaService, ModalService } from '../../services';

@Component({
  selector: 'app-select-cafeteria-modal',
  templateUrl: './select-cafeteria-modal.component.html',
  styleUrls: ['./select-cafeteria-modal.component.scss', '../modal-container/modal-container.component.scss']
})
export class SelectCafeteriaModalComponent implements OnInit {
  cafeterias: any[];
  selectedCafeteria: any;

  constructor(
    private cafeteriaService: CafeteriaService,
    private modalService: ModalService
  ) { }

  ngOnInit() {
    this.cafeteriaService.getUserCafeterias().then((response) => {
      this.cafeterias = response.data;
      console.log('cafeterias', response.data);
    })
  }

  close() {
    this.modalService.closeModal$.emit();
  }

  submit() {
    if(this.selectedCafeteria) {
      this.modalService.closeModal$.emit(this.selectedCafeteria);
    }

  }

  public selectCafeteria(cafeteria: any): void {
    this.selectedCafeteria = cafeteria;
  }

}
