import { Component, OnInit, ElementRef, Renderer } from '@angular/core';
import { Router, NavigationExtras, Params } from '@angular/router';


import { CafeteriaService } from '../services';

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

  selectElement(typeId: number): void {
    this.cafeteriaService.getUserCafeterias().then((res) => {
      this.cafeterias = res.data;
      console.log('res.data', res.data);
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

}
