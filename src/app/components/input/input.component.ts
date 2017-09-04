import { Component, Input, Output, EventEmitter, Renderer, ElementRef, OnInit, AfterViewInit, HostListener, HostBinding, OnChanges } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements AfterViewInit, OnChanges {
  /**
   * input part
   */
  @Input('model') model: any;
  @Input('type') type: string;
  @Input('placeholder') placeholder: string;

  /**
   * error
   */
  @Input('errorText') errorText: string;
  @Input('showError') showError: boolean;

  /**
   * link
   */
  @Input('showLink') showLink: boolean;
  @Input('linkText') linkText: string;
  @Input('linkPosition') linkPosition: string;

  /**
   * validation
   */
  @Input('pattern') pattern: RegExp;
  @Input('validationError') validationError: string;

  /**
   * Outputs
   * @type {EventEmitter<any>}
   */
  @Output('linkAction') linkAction: EventEmitter<any> = new EventEmitter();
  @Output('output') output: EventEmitter<any> = new EventEmitter();
  @Output('invalid') invalid: EventEmitter<boolean> = new EventEmitter();


  constructor(
    private renderer: Renderer,
    private elementRef: ElementRef
  ) {}
//   @Input('placeholderMessage') placeholderMessage: string;
//   @Input('errorMessage') errorMessage: string;
//   @Input('invalidMessage') invalidMessage: string;
//
//   @Input('error') error: boolean;
//   @Input('invalid') invalid: boolean;
//
//   @Input('ngModel') ngModel: any;
//
//   // todo: add pattern and showing invalid messages
//
//
//   private _placeholderElement: any;
//   private _errorElement: any;
//   private _invalidElement: any;
//
//   constructor(
//     private renderer: Renderer,
//     private elementRef: ElementRef
//   ) {
//
//   }
//

  modelChanged(event) {
    this.output.emit(event);
  }

  ngOnChanges(values) {
    console.log('values ===> ', values);
    // if (values && values.error && values.error.currentValue) {
    //   this._setErrorInputField(true);
    // }
    // if (values && values.error && values.error.previousValue && !values.error.currentValue) {
    //   this._setErrorInputField(false);
    // }
    // if (values && values.errorMessage && values.errorMessage.previousValue && values.errorMessage.currentValue !== values.errorMessage.previousValue) {
    //   this._removeErrorText();
    //   this._addErrorText();
    // }
    // if (values && values.ngModel && values.ngModel.currentValue && values.ngModel.currentValue !== values.ngModel.previousValue && this._placeholderElement) {
    //   this.renderer.setElementClass(this._placeholderElement, 'focused', true);
    // }
  }
//
  ngAfterViewInit() {
    this.modelChanged(this.model);
    // this._placeholderElement = this.renderer.createElement(this.elementRef.nativeElement.parentNode, 'div');
    // this._placeholderElement.innerHTML = this.placeholderMessage;
    // this.renderer.setElementClass(this._placeholderElement, 'app-input-placeholder', true);
    //
    // // set focus on input, when click on placeholder
    // this._placeholderElement.addEventListener('click', () => {
    //   this.renderer.invokeElementMethod(this.elementRef.nativeElement, 'focus');
    // });
    //
    // if(this.ngModel) {
    //   this.renderer.setElementClass(this._placeholderElement, 'focused', true);
    // }
  }

  fieldFocus(element: HTMLElement, add: boolean) {
    this.renderer.setElementClass(element, 'focused', add);
    if (add) {
      this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector('input'), 'focus');
    }
  }

  inputBlur(model) {
   const placeholderElement: HTMLElement = this.elementRef.nativeElement.querySelector('.input-component__placeholder');
   if (!model && model !== 0) {
     this.fieldFocus(placeholderElement, false);
   } else if (this.pattern) {
     this.invalid.emit(this.pattern.test(model));
   }
  }

  inputLinkClick() {
    this.linkAction.emit();
  }

//
//   @HostListener('focus') onFocus() {
//     this.renderer.setElementClass(this._placeholderElement, 'focused', true);
//   }
//
//   @HostListener('blur') onBlur() {
//     if(!this.elementRef.nativeElement.value) {
//       this.renderer.setElementClass(this._placeholderElement, 'focused', false);
//       this._setErrorInputField(false);
//     }
//   }
//
//
// ///////
//   private _setErrorInputField(status: boolean): void {
//     if (status) {
//       this._addErrorText();
//       this._addInputBorder('#ff5b57');
//     } else {
//       this._removeErrorText();
//       this._removeInputBorder();
//     }
//   }
//   private _addErrorText() {
//     if (this.errorMessage) {
//       this._errorElement = this.renderer.createElement(this.elementRef.nativeElement.parentNode, 'div');
//       this._errorElement.innerHTML = this.errorMessage;
//       this.renderer.setElementClass(this._errorElement, 'app-input-error-message', true);
//     }
//   }
//
//   private _removeErrorText() {
//     if (this._errorElement) {
//       this._errorElement.remove();
//     }
//   }
//
//   private _addInputBorder(color) {
//     this.renderer.setElementAttribute(this.elementRef.nativeElement, 'style', 'border-bottom: 1px solid ' + color + ';');
//   }
//
//   private _removeInputBorder() {
//     this.renderer.setElementAttribute(this.elementRef.nativeElement, 'style', null);
//   }

}
// // import {
// //   Directive, Input, Renderer, ElementRef, OnInit, AfterViewInit, HostListener, HostBinding,
// //   OnChanges
// // } from '@angular/core';
//
// // @Component({
// //   selector: '[appInput]'
// // })
// export class InputDirective implements AfterViewInit, OnChanges {
//   @Input('placeholderMessage') placeholderMessage: string;
//   @Input('errorMessage') errorMessage: string;
//   @Input('invalidMessage') invalidMessage: string;
//
//   @Input('error') error: boolean;
//   @Input('invalid') invalid: boolean;
//
//   @Input('ngModel') ngModel: any;
//
//   // todo: add pattern and showing invalid messages
//
//
//   private _placeholderElement: any;
//   private _errorElement: any;
//   private _invalidElement: any;
//
//   constructor(
//     private renderer: Renderer,
//     private elementRef: ElementRef
//   ) {
//
//   }
//
//   ngOnChanges(values) {
//     if(values && values.error && values.error.currentValue) {
//       this._setErrorInputField(true);
//     }
//     if(values && values.error && values.error.previousValue && !values.error.currentValue) {
//       this._setErrorInputField(false);
//     }
//     if(values && values.errorMessage && values.errorMessage.previousValue && values.errorMessage.currentValue !== values.errorMessage.previousValue) {
//       this._removeErrorText();
//       this._addErrorText();
//     }
//     if(values && values.ngModel && values.ngModel.currentValue && values.ngModel.currentValue !== values.ngModel.previousValue && this._placeholderElement) {
//       this.renderer.setElementClass(this._placeholderElement, 'focused', true);
//     }
//   }
//
//   ngAfterViewInit() {
//     this._placeholderElement = this.renderer.createElement(this.elementRef.nativeElement.parentNode, 'div');
//     this._placeholderElement.innerHTML = this.placeholderMessage;
//     this.renderer.setElementClass(this._placeholderElement, 'app-input-placeholder', true);
//
//     // set focus on input, when click on placeholder
//     this._placeholderElement.addEventListener('click', () => {
//       this.renderer.invokeElementMethod(this.elementRef.nativeElement, 'focus');
//     });
//
//     if(this.ngModel) {
//       this.renderer.setElementClass(this._placeholderElement, 'focused', true);
//     }
//   }
//
//   @HostListener('focus') onFocus() {
//     this.renderer.setElementClass(this._placeholderElement, 'focused', true);
//   }
//
//   @HostListener('blur') onBlur() {
//     if(!this.elementRef.nativeElement.value) {
//       this.renderer.setElementClass(this._placeholderElement, 'focused', false);
//       this._setErrorInputField(false);
//     }
//   }
//
//
//   ///////
//   private _setErrorInputField(status: boolean): void {
//     if(status) {
//       this._addErrorText();
//       this._addInputBorder('#ff5b57');
//     } else {
//       this._removeErrorText();
//       this._removeInputBorder();
//     }
//   }
//   private _addErrorText() {
//     if(this.errorMessage) {
//       this._errorElement = this.renderer.createElement(this.elementRef.nativeElement.parentNode, 'div');
//       this._errorElement.innerHTML = this.errorMessage;
//       this.renderer.setElementClass(this._errorElement, 'app-input-error-message', true);
//     }
//   }
//
//   private _removeErrorText() {
//     if(this._errorElement) {
//       this._errorElement.remove();
//     }
//   }
//
//   private _addInputBorder(color) {
//     this.renderer.setElementAttribute(this.elementRef.nativeElement, 'style', 'border-bottom: 1px solid ' + color + ';');
//   }
//
//   private _removeInputBorder() {
//     this.renderer.setElementAttribute(this.elementRef.nativeElement, 'style', null);
//   }
// }
