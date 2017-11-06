import {Directive, ElementRef, Renderer, Input, Output, OnChanges, EventEmitter} from '@angular/core';

@Directive({
  selector: 'img[app-check-image]'
})
export class CheckImageDirective implements OnChanges {
  @Input('defaultImage') defaultImage: string;
  @Input('image') image: string;

  @Output('setImage') setImage: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnChanges(value) {
    console.log('value', value);
    if (value.image.currentValue) {

    } else {
      this.setImage.emit('data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=');
      // this.renderer.setElementAttribute(this.elementRef.nativeElement, 'src', 'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=');
    }
  }

}
