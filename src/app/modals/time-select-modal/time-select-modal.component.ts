import {AfterViewInit, Component} from '@angular/core';

import { ModalService } from '../../services';

class Day {
  public dayName: string;
  public dayNumber: number;
  public opened: boolean = false;
  public closed: boolean = false;

  constructor (
    dayName: string,
    dayNumber: number,
    public openAt?: string,
    public closeAt?: string
  ) {
    this.dayName = dayName;
    this.dayNumber = dayNumber;
  }
}

class Week {
  public days: Day[];
  public getDay(dayNumber: number): Day {
    let i: number = 0,
      len: number = (this.days && this.days.length) ? this.days.length : 0,
      result: Day;

    for (; i < len; i ++) {
      if (this.days[i].dayNumber === dayNumber) {
        result = this.days[i];
        break;
      }
    }

    return result;
  }
  public changeDay(newValue: Day): void {
    let index: number;

    for (let i = 0, len = this.days.length; i < len; i++ ) {
      if (this.days[i].dayNumber === newValue.dayNumber) {
        index = i;
        break;
      }
    }

    if (index > -1) {
      this.days[index] = newValue;
    }
  }

  constructor (
    days: Day[]
  ) {
    this.days = days;
  }
}

const daysOfWeekNames: string[] = [
  'mon',
  'tues',
  'wed',
  'thurs',
  'fri',
  'sut',
  'sun'
];

@Component({
  selector: 'app-time-select-modal',
  templateUrl: './time-select-modal.component.html',
  styleUrls: ['./time-select-modal.component.scss', '../modal-container/modal-container.component.scss']
})
export class TimeSelectModalComponent implements AfterViewInit {
  week: Week;

  viewedDay: Day;

  // Input
  workTime: any[];
  selectedDay: number;

  // Output

  hours: any[] = [];

  constructor(
    private modalService: ModalService
  ) {
    this.__workingHoursGenerate();
  }

  ngAfterViewInit() {

    this.__setWeek(this.workTime.slice());

    this.viewedDay = this.week.getDay(this.selectedDay);
  }


  public close() {
    this.modalService.closeModal$.emit();
  }

  public submit() {
    if (!this.isButtonDisabled()) {

      this.modalService.closeModal$.emit(this.__parseResult(this.week.days));
    } else {
      console.log('no. both values must be selected!');
    }
  }

  public makeWorking(working: boolean): void {
    this.viewedDay.opened = working;
    this.viewedDay.closed = !working;
  }

  public selectDay(day: Day): void {
    this.viewedDay = day;
  }

  public setTime(event, timeType: 'openAt' | 'closeAt'): void {
    // public setTime(event, timeType: 'time_start' | 'time_end'): void {
    this.viewedDay[timeType] = event;
    this.week.changeDay(this.viewedDay);
  }

  public getValue(timeType: 'openAt' | 'closeAt'): string {
    return this.viewedDay[timeType] ? this.viewedDay[timeType] : '';
  }

  public isButtonDisabled(): boolean {
    let result: boolean = false;

    if (this.viewedDay && this.viewedDay.opened) {
      if ((this.viewedDay.closeAt && this.viewedDay.openAt) || (!this.viewedDay.closeAt && !this.viewedDay.openAt)) {
        result = false;
      } else {
        result = true;
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

  private __setWeek(array: any[]): void {
    let days: Day[] = [],
      sortedArr: any[] = array.sort((a, b) => {
        if (a && b && (a.day_number < b.day_number)) {
          return -1;
        }

        if (a && b && (a.day_number > b.day_number)) {
          return 1;
        }

        return 0;
      }),
      maxDayNumber: number = (sortedArr[sortedArr.length - 1] && sortedArr[sortedArr.length - 1].day_number) ? sortedArr[sortedArr.length - 1].day_number : 0,
      length: number = maxDayNumber === 7 ? maxDayNumber : 7;

    for (let i = 0, len = length; i < len; i++) {
      let day = new Day(
        daysOfWeekNames[i],
        i + 1,
        (sortedArr[i] && sortedArr[i].time_start) ? sortedArr[i].time_start : '',
        (sortedArr[i] && sortedArr[i].time_end) ? sortedArr[i].time_end : ''
      );

      if (day.openAt && day.closeAt) {
        day.opened = true;
      }

      days.push(day);
    }

    this.week = new Week(days);
  }

  public __parseResult(days: Day[]): {
    day_number: number;
    time_start: string;
    time_end: string;
  }[] {
    let result: {
      day_number: number;
      time_start: string;
      time_end: string;
    }[] = [];

    for (let i = 0, len = days.length; i < len; i++ ) {
      if (days[i].opened) {
        result.push({
          day_number: days[i].dayNumber,
          time_start: days[i].openAt,
          time_end: days[i].closeAt
        });
      }
    }

    return result;
  }
}
