import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CafeteriaService } from '../services';

@Component({
  selector: 'app-cafeteria-list',
  templateUrl: './cafeteria-list.component.html',
  styleUrls: ['./cafeteria-list.component.scss']
})
export class CafeteriaListComponent implements OnInit {
  public cafeteriaList: any[] = [];

  constructor(
    private cafeteriaService: CafeteriaService,
    private router: Router
  ) { }

  ngOnInit() {
    this._getCafeteriaList();
  }

  public selectNewCafeteriaType() {
    this.router.navigateByUrl('/cafeteria-type');
  }

  public editCafeteria(cafeteria) {
    console.log('cafeteria ==> ', cafeteria);
    this.router.navigate(['edit-cafeteria', cafeteria.id]);
  }

  public showCafeteriaMenu(cafeteria) {
    // console.log('show menu for cafeteria ==> ', cafeteria);
    this.cafeteriaService.getCafeteriaById(cafeteria.id).then((response) => {
      // console.log('response', response.data.cafeteria);
      this.router.navigate(['product-list', response.data.cafeteria.id, response.data.cafeteria.caf_type]);
    });
  }


  /////
  private _getCafeteriaList(): void {
    this.cafeteriaService.getUserCafeterias().then((response) => {
      console.log('response', response);
      this.cafeteriaList = response.data;
    }, (error) => {
      console.log('error', error);
    });
  }

}
