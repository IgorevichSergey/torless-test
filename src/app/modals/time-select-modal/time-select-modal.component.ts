import { Component } from '@angular/core';

import { ModalService } from '../../services';

@Component({
  selector: 'app-time-select-modal',
  templateUrl: './time-select-modal.component.html',
  styleUrls: ['./time-select-modal.component.scss', '../modal-container/modal-container.component.scss']
})
export class TimeSelectModalComponent {
  workingDay: boolean;
  workTime: any[] = [];
  selectedDay: number;

  hours: any[] = [];

  test: string;



  constructor(
    private modalService: ModalService
  ) {
    this.__workingHoursGenerate();
  }


  close() {
    this.modalService.closeModal$.emit();
  }

  submit() {
    this.modalService.closeModal$.emit(true);
  }

  public makeWorking(status: boolean): void {
    console.log('status', status);
    this.workingDay = status;
  }


  ////
  private __workingHoursGenerate(): void {
    for(let i = 0, len = 24; i < len; i++) {
      for (let j = 1, _len = 4; j <= _len; j++ ) {
        let hours = i,
            minutes = '' + (15 * j);
        if(j === 4) {
          hours++;
          minutes = '00';
        }

        this.hours.push({time: hours + ' - ' + minutes});
      }
    }

    this.hours.splice(this.hours.length - 1, 1);
  }

  // private __timeIteration(time: string): string {
  //   let timeArray: string[] = time.split(' - '),
  //       hours: string | number = timeArray[0],
  //       minutes: string | number = timeArray[1];
  //
  //   let result: {hours: string, minutes: string} = {
  //     hours: '',
  //     minutes: ''
  //   };
  //
  //   minutes += Number(minutes) + 15 + '';
  //
  //   if(Number(minutes) >= 60) {
  //     result.hours += 1;
  //     result.minutes = '' + Number(minutes) - 60;
  //   }
  //
  //   return result.hours + ' - ' + result.minutes;
  //
  //
  // }

}
