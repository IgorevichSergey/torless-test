import {AfterViewInit, Component} from '@angular/core';

import { ModalService } from '../../services';

@Component({
  selector: 'app-time-select-modal',
  templateUrl: './time-select-modal.component.html',
  styleUrls: ['./time-select-modal.component.scss', '../modal-container/modal-container.component.scss']
})
export class TimeSelectModalComponent implements AfterViewInit {
  workingDay: boolean;

  // Input
  workTime: any[];
  selectedDay: number;

  // Output
  resultWorkTime: any[];

  hours: any[] = [];

  prevSelectedDay: number;
  currSelectedDay: number;


  notWorkingDays: number[];

  constructor(
    private modalService: ModalService
  ) {
    this.__workingHoursGenerate();
  }

  ngAfterViewInit() {
    this.__isWorkingDay(this.workTime, this.selectedDay);
    this.resultWorkTime = this.workTime.slice();
  }


  public close() {
    this.modalService.closeModal$.emit();
  }

  public submit() {
    if (!this.isButtonDisabled()) {
      this.modalService.closeModal$.emit(this.resultWorkTime);
    } else {
      console.log('no. both values must be selected!');
    }
  }

  public makeWorking(status: boolean): void {
    this.workingDay = status;
  }

  public selectDay(dayNumber: number): void {
    this.prevSelectedDay = this.selectedDay;
    this.currSelectedDay = dayNumber;
    this.selectedDay = dayNumber;
    this.__isWorkingDay(this.resultWorkTime, this.selectedDay);

  }

  public setTime(event, timeType: string): void {
    let index: number = this.__findIndex(this.resultWorkTime, (item) => {
      return item.day_number === this.selectedDay;
    });

    if (!index && index !== 0) {
      let time: Object = {
        day_number: this.selectedDay
      };
      time[timeType] = event;
      this.resultWorkTime.push(time);
    } else {
      this.resultWorkTime[index][timeType] = event;
    }
  }

  public getValue(timeType: string): string {
    let index: number = this.__findIndex(this.resultWorkTime, (item) => {
      return item.day_number === this.selectedDay;
    });

    return (index || index === 0) ? this.resultWorkTime[index][timeType] : '';
  }


  public isButtonDisabled(): boolean {
    let result: boolean = false;

    for (let i: number = 0, len: number = (this.resultWorkTime && this.resultWorkTime.length) ? this.resultWorkTime.length : 0; i < len; i++ ) {
      if (this.resultWorkTime[i]) {
        if ((!this.resultWorkTime[i].time_start && this.resultWorkTime[i].time_end) || this.resultWorkTime[i].time_start && !this.resultWorkTime[i].time_end) {
          result = true;
          break;
        }
      }
    }

    return result;
  }

  ////
  private __workingHoursGenerate(): void {
    for (let i = 0, len = 24; i < len; i++) {
      for (let j = 1, _len = 4; j <= _len; j++ ) {
        let hours = i,
            minutes = '' + (15 * j);
        if (j === 4) {
          hours++;
          minutes = '00';
        }

        this.hours.push(hours + ':' + minutes);
      }
    }

    this.hours.splice(this.hours.length - 1, 1);
  }

  private __isWorkingDay(workTime: any[], dayNumber: number): void {
    const index: number = this.__findIndex(workTime, (item) => {
      return item.day_number === dayNumber;
    });
    if (index > -1) {
      if (!workTime[index] || workTime[index].time_start === '00:00' && workTime[index].time_end === '00:00') {
        this.workingDay = false;
      } else {
        this.workingDay = true;
      }
    } else {
      this.workingDay = false;
    }
  }

  private __findIndex(array: any[], callback: (item: any) => boolean): number {
    let i: number = 0,
        len: number = (array && array.length) ? array.length : 0,
        result: number;

    for (; i < len; i ++) {
      if (callback(array[i])) {
        result = i;
        break;
      }
    }

    return result;
  }


  // private __makeNotWorkingDay(dayNumber: number): void {
  //   let workingDay = this.__isWorkingDay(this.resultWorkTime, dayNumber); // because days start from 1
  //   if (!workingDay) {
  //     let index: number = this.__findIndex(this.resultWorkTime, (item) => {
  //       return item.day_number === dayNumber;
  //     });
  //     if (index) {
  //       this.resultWorkTime[index].offDay = true;
  //     } else {
  //       this.resultWorkTime.push({
  //         day_number: dayNumber,
  //         offDay: true
  //       });
  //     }
  //   }
  // }
}
