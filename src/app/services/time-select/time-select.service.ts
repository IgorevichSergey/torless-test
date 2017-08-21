import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class TimeSelectService {
  public timeSelectModal$: EventEmitter<any> = new EventEmitter();
  public timerModalListener$: EventEmitter<any> = new EventEmitter();

  constructor() { }

  public show(dayNumber: number, time?: any) {
    this.timeSelectModal$.emit({visible: true, dayNumber: dayNumber, time: time});

    return new Promise((resolve, reject) => {
      this.timerModalListener$.subscribe((data) => {
        if(data.eventName === 'submit') {
          resolve(data.workTime);
        } else {
          reject();
        }
      });
    });
  }

}
