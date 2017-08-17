import {Component, Input, OnInit, ElementRef, AfterViewInit} from '@angular/core';


import { TimeSelectService } from '../../services';

@Component({
  selector: 'app-time-select',
  templateUrl: './time-select.component.html',
  styleUrls: ['./time-select.component.scss']
})
export class TimeSelectComponent implements OnInit, AfterViewInit {
 public visible: boolean;
 public selectedDay: number;
 public workTime: {
   begin: string,
   end: string
 } = {
   begin: '',
   end: ''
 };

  constructor(
    private timeSelectService: TimeSelectService,
    private elementRef: ElementRef
  ) {

  }

  ngOnInit() {
    this.timeSelectService.timeSelectModal$.subscribe((data) => {
      this.visible = data.visible;
      this.selectedDay = data.dayNumber;
    });
  }

  ngAfterViewInit() {

  }

  close(): void {
    this.timeSelectService.timerModalListener$.emit({eventName: 'close'});
    this.visible = false;
    this.workTime = {
      begin: '',
      end: ''
    };
  }

  submitTime(): void {
    this.timeSelectService.timerModalListener$.emit({eventName: 'submit', workTime: this.workTime});
    this.visible = false;
    this.workTime = {
      begin: '',
      end: ''
    };
  }

}
