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

  valueReset(value) {
    if (!value) {
      this.setItem.emit();
    }
  }

}
