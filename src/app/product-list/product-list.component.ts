import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, RouterModule} from '@angular/router';

import { ProductService } from '../services';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  public products: any[];
  public productBuffer: any;

  private _cafeteriaId: number;
  private _categoryId: number;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe((param) => {
        this._cafeteriaId = +param.cafId;
        this._categoryId = +param.catId;
        this._getProducts();
      });
  }

  public goToAddProductPage() {
    this.router.navigate(['add-product', this._cafeteriaId, this._categoryId]);
  }

  public setEditMode(product) {
    this.productBuffer = this._copy(product);
    this.products.forEach((item) => {
      item.edit = (item.prod_id === product.prod_id);
    });
  }

  public saveProduct() {
    if(this.productBuffer && this.productBuffer.prod_name) {
      let index: number = this._findIndex(this.products, (item) => {return item.prod_id === this.productBuffer.prod_id});

      this.products[index] = this.productBuffer;
      this.productBuffer = null;
    }

  }

  public removeProduct(product): void {
    let index: number = this._findIndex(this.products, (item) => {return item.prod_id === product.prod_id});

    this.products.splice(index, 1);
  }

  ////
  private _getProducts(): void {
    this.productService.getProductsForCategory(this._cafeteriaId, this._categoryId).then((response) => {
      this.products = response.data.products;
      console.log('this.products', this.products)
    }, (error) => {
      console.log('error ==> ', error);
    });
  }

  private _goTo(url: string): void {
    this.router.navigateByUrl(url);
  }

  private _copy(obj: any): any {
    let result: any = {};
    for (const key in obj) {
      result[key] = obj[key];
    }
    return result;
  }

  private _findIndex(array: any[], callback: (item: any) => boolean): number {
    let i: number = 0,
        len: number = (array && array.length) ? array.length : 0,
        result: number;

    for(; i < len; i ++) {
      if (callback(array[i])) {
        result = i;
        break;
      }
    }

    return result;
  }
}
