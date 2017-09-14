import { Component, Input, Output, EventEmitter, Renderer, ElementRef, OnInit, AfterViewInit, HostListener, HostBinding, OnChanges } from '@angular/core';
import set = Reflect.set;

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements AfterViewInit, OnChanges {
  /**
   * input part
   */
  @Input('model') model: any;
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
   * formatter
   */
  @Input('formatter') formatter: ((model: string | number) => string);

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

  modelChanged(model) {
    // console.log('event ==> ', event);
    // this.model = this.test(event);

      this.output.emit(model);

// if (this.formatter) {
//   setTimeout((() => {
//
//     this.model = this.formatter(model);
//     // console.log('this.model', this.model)
//     this.output.emit(this.model);
//
//   }).bind(this), 1);
// } else {
//   this.output.emit(this.model);
// }



  }

  ngOnChanges(values) {
    // console.log('textarea values ===> ', values);
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
    // if (values && values.model && values.model.currentValue && values.model.currentValue !== values.model.previousValue ) {
    //   this.model = values.model.currentValue;
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
      this.renderer.invokeElementMethod(this.elementRef.nativeElement.querySelector('textarea'), 'focus');
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

  // todo: use as PhoneFormat
  test(t: any): any {
    const numbers: string = t ? t.replace(/\D/g, '') : '',
          dashes: Object = {
            4: '-',
            7: '-',
            9: '-'
          },
          len = (numbers.length <= 10) ? numbers.length : 10;
    let result: string = '';

    for (let i = 0; i < len; i++) {
      result += (dashes[i] || '') + numbers[i];
    }
    console.log('result ===> ', result);
    // console.log('t', t);
    return result;
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
