import { Component, Input, Renderer, ElementRef, AfterViewInit, OnInit } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements AfterViewInit, OnInit {
  @Input('hintText') hintText: string;
  hintsArray: string[];

  constructor(
    private elementref: ElementRef,
    private renderer: Renderer
  ) {


  }

  ngAfterViewInit() {
    this.renderer.setElementStyle(this.elementref.nativeElement, 'margin', '0 auto');
    console.log('this.hintText', this.hintText);
  }

  ngOnInit() {
    this.hintsArray = this.hintText.split(',').filter((item) => {
        return (item && item !== ' ');
    });
  }
}
