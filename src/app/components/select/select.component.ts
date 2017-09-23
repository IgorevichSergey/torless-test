import {Component, Input, Output, EventEmitter, HostListener, AfterViewInit, OnChanges, Renderer, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements AfterViewInit, OnChanges {
  // item list
  @Input('list') list: any[];
  // displayed value key
  @Input('key') key: string;
  // placeholder message
  @Input('placeholder') placeholder: string;
  // changed value
  @Input('value') value: string;
  // value key
  @Input('valueKey') valueKey: string;
  // set item output eventemitter
  @Output('setItem') setItem: EventEmitter<any> = new EventEmitter();

  @ViewChild('input') input: ElementRef;

  public inputFocused: boolean;

  // filter values
  public search: string;
  public filterParams: { value: string; by: string; };

  // show list variables
  public visibleList: boolean;

  constructor(
    private elementRef: ElementRef
  ) {
    console.log('add select init');
  }

  ngAfterViewInit() {
    document.addEventListener('click', ((event) => {
      const specifiedElement = this.elementRef.nativeElement;
      const isClickInside = specifiedElement.contains(event.target);
      if (!isClickInside) {
        this.showList(false);
        if (!this.value && (!this.filterParams || !this.filterParams.value)) {
          this.setFocus(false);
        }
      }
    }).bind(this));

    if (this.value) {
      this.setFocus(true);
    }
  }


  ngOnChanges(values) {
    // console.log('values ==> ', values);
    if (values && values.value && values.value.currentValue && (values.value.currentValue !== values.value.previousValue)) {
      this.setFocus(true);
    }

    if (values && values.value && !values.value.currentValue && values.value.previousValue) {
      this.filterParams = null;
    }
  }

  public filterGenerate(search: string): void {
    this.filterParams = {
      by: this.key,
      value: search
    };
  }

  public selectItem(item: any): void {
    this.value = this.key ? item[this.key] : item;
    this.filterParams = null;
    this.visibleList = false;
    this.search = '';

    this.setFocus(true);

    this.setItem.emit(item);
  }

//   public filterParams: { by: string; value: any; } = {
//     by: '',
//     value: ''
//   };
//
//   /**
//    * Model input
//    */
//   @Input('model') model: string | number;
//
//   /**
//    * array and displayed value
//    */
//   @Input('list') list: any[];
//   @Input('key') key: string;
//
//   /**
//    * placeholder string
//    */
//   @Input('placeholder') placeholder: string;
//
//   /**
//    * Model output
//    * @type {EventEmitter<any>}
//    */
//   @Output('output') output: EventEmitter<any> = new EventEmitter();
//
//
//   /**
//    * HTML elements
//    */
//   @ViewChild('listElement') listElement: ElementRef;
//   @ViewChild('inputElement') inputElement: ElementRef;
//   @ViewChild('placeholderElement') placeholderElement: ElementRef;
//
//   constructor(
//     private renderer: Renderer,
//     private elementRef: ElementRef
//   ) { }
//
//   ngOnChanges() {
//
//   }
//
//   ngAfterViewInit() {
//     this.filterParams = {
//       by: this.key,
//       value: ''
//     };
//
//     this.__setModel(this.model);
//
//     const specifiedElement = this.elementRef.nativeElement;
//
//     // console.log('this.listElement', this.listElement.nativeElement)
//     // console.log('this.inputElement', this.inputElement.nativeElement)
//
// // I'm using "click" but it works with any event
//     document.addEventListener('click', ((event) => {
//       const isClickInside = specifiedElement.contains(event.target);
//
//
//
//       if (!isClickInside) {
//         // console.log('click was outside')
//         console.log('isClickInside ==> ', isClickInside);
//
//         this.elementFocus(false);
//
//
//         // this.fieldFocus((this.inputElement as any).nativeElement, false);
//         // the click was outside the specifiedElement, do something
//       }
//     }).bind(this));
//
//     // this.elementRef.nativeElement.addEventListener('click', (data) => {
//     //   console.log('data', data);
//     // });
//   }
//
//   elementFocus(focus: boolean) {
//     this.inputFocus(focus);
//     this.showList(focus);
//
//     if (focus && this.placeholderElement) {
//       this.renderer.invokeElementMethod(this.placeholderElement.nativeElement, 'focus');
//     }
//
//     if (focus) {
//       this.renderer.invokeElementMethod(this.inputElement.nativeElement, 'focus');
//     }
//
//     // this.renderer.setElementClass(element, 'focused', add);
//     // this.renderer.setElementClass(this.elementRef.nativeElement.querySelector('.select-component__list'), 'visible', add);
//     // if (add) {
//     //   this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector('input'), 'focus');
//     // }
//   }
//
//   inputFocus(focus) {
//     this.renderer.setElementClass(this.inputElement.nativeElement, 'focused', focus);
//     // const placeholderElement: HTMLElement = this.elementRef.nativeElement.querySelector('.select-component__placeholder'),
//     //       listElement: HTMLElement = this.elementRef.nativeElement.querySelector('.select-component__list');
//     // this.renderer.setElementClass(listElement, 'visible', true);
//
//
//     if (!this.filterParams.value && this.filterParams.value !== 0) {
//       this.renderer.setElementClass(this.placeholderElement.nativeElement, 'focused', focus);
//     }
//   }
//
  showList(show: boolean): void {
    this.visibleList = show;
    // this.renderer.setElementClass(this.listElement.nativeElement, 'visible', show);
  }

  resetValue(): void {
    this.value = null;
    this.inputFocused = false;
    this.setItem.emit();
  }

  setFocus(focus: boolean): void {
    this.inputFocused = focus;
  }

  placeholderFocus(): void {
    this.inputFocused = true;
  }

  inputFocus(): void {
    if (this.input) {
      this.input.nativeElement.focus();
      this.inputFocused = true;
    }
  }

}
