import { Component, Input, Renderer, ElementRef, AfterViewInit, OnInit } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements AfterViewInit {
  @Input('hintText') hintText: string;
  @Input('hintPosition') hintPosition: string = 'top left';
  @Input('color') color: string = '#909090';

  constructor(
    private elementref: ElementRef,
    private renderer: Renderer
  ) {


  }

  ngAfterViewInit() {
    // this.renderer.setElementStyle(this.elementref.nativeElement, 'position', 'absolute');
    // if (this.elementHorizontalPosition === 'center') {
    //   this.renderer.setElementStyle(this.elementref.nativeElement, 'left', '50%');
    // } else if (this.elementHorizontalPosition === 'left') {
    //   this.renderer.setElementStyle(this.elementref.nativeElement, 'left', '0');
    // }
    // if (this.elementVerticalPosition === 'bottom') {
    //   this.renderer.setElementStyle(this.elementref.nativeElement, 'margin-top', 'inherit');
    // }

    console.log('this.hintText', this.hintText);
  }
}
