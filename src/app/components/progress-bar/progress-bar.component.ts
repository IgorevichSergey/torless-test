import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent {
  @Input('width') width: number;
  @Input('dots') dots: number = 3;

  public dotsArray = new Array(this.dots);

  constructor() {}

  public getRightPosition(index: number): string {
    let step: number = 100 / this.dots,
        result: string = step * (index + 1) + '%';
    return result;
  }

  public isFilled(index: number): boolean {
    let step: number = 100 / this.dots,
        currentPosition: number = step * (index + 1);
    return currentPosition <= this.width;
  }
}
