import {Directive, ElementRef, Renderer, Input, OnChanges} from '@angular/core';

@Directive({
  selector: 'img[app-check-image]'
})
export class CheckImageDirective implements OnChanges {
  @Input('defaultImage') defaultImage: string;
  @Input('image') image: string;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer,
  ) {}

  ngOnChanges(value) {
    console.log('value', value);
    if (value.image.currentValue) {
      console.log('value.image.currentValue', value.image.currentValue);
      this.checkImage(value.image.currentValue, () => {}, () => {
        console.log('defaultImage', this.defaultImage)
        this.renderer.setElementAttribute(this.elementRef.nativeElement, 'src', this.defaultImage ? this.defaultImage : 'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=');
      });
    }
  }

  private checkImage(imageSrc: string, good: () => void,  bad: () => void, ) {
    let img = new Image();
      img.onload = good;
      img.onerror = bad;
      img.src = imageSrc;
  }
}
