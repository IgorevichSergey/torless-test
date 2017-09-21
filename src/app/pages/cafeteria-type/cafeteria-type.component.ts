import { Component, OnInit, ElementRef, Renderer } from '@angular/core';
import { Router, NavigationExtras, Params } from '@angular/router';


import { CafeteriaService } from '../../services';

import * as _ from 'lodash';

@Component({
  selector: 'app-create-branch',
  templateUrl: './cafeteria-type.component.html',
  styleUrls: ['./cafeteria-type.component.scss']
})
export class CafeteriaTypeComponent implements OnInit {
  complete: number = 50; // 25, 50, 75, 100
  cafeterias: any[];
  selectedCafeteriaType: number;
  selectedCafeteriaId: number;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer,
    private cafeteriaService: CafeteriaService,
    private router: Router
  ) { }

  ngOnInit() {}

  selectCafeteria(event) {
    this.selectedCafeteriaId = event ?  event.id : null;
  }

  selectElement(typeId: number): void {
    this.cafeteriaService.getUserCafeterias().then((res) => {
      this.cafeterias = this._filter(res.data);
      console.log('this.cafeterias', this.cafeterias);
      this.selectedCafeteriaType = typeId;
    }, (err) => {
      this.selectedCafeteriaType = typeId;
    });

  }

  public submitCafeteriaType(typeId) {
  // , { queryParams: { page: this.page + 1 } })
    let queryParams = {};
    console.log('this.selectedCafeteriaId', this.selectedCafeteriaId);
    if(this.selectedCafeteriaId) {
      queryParams = { queryParams: {id: this.selectedCafeteriaId} };
    }
    this.router.navigate(['/create-cafeteria', typeId], queryParams);
  }

  private _filter(array: any[]): any[] {
    return _.filter(array, (item) => {
      return item.id;
    });
  }

}
