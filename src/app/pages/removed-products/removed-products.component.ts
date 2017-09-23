import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductService, CafeteriaService, EventService } from '../../services';

@Component({
  selector: 'app-removed-products',
  templateUrl: './removed-products.component.html',
  styleUrls: ['./removed-products.component.scss', '../pages.scss']
})
export class RemovedProductsComponent implements OnInit {
  public products: any[];
  public productBuffer: any;

  private _cafeteriaId: number;
  private _categoryId: number;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private cafeteriaService: CafeteriaService,
    private eventService: EventService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe((param) => {
        this._cafeteriaId = +param.cafId;
        this._categoryId = +param.catId;
        this.cafeteriaService.getCafeteriaById(this._cafeteriaId).then((response) => {
          this.eventService.headerText$.emit(response.data.cafeteria.caf_name);
        });
        console.log('this._cafeteriaId', this._cafeteriaId)
        console.log('this._categoryId', this._categoryId)
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
    this.productService.deleteProduct(product.prod_id).then((response) => {
      const index: number = this._findIndex(this.products, (item) => {return item.prod_id === product.prod_id});
      this.products.splice(index, 1);
    });

  }

  public emptyProduct(product): void {
    this.productService.emptyProduct(product.prod_id).then((response) => {
      const index: number = this._findIndex(this.products, (item) => {return item.prod_id === product.prod_id});
      this.products[index].prod_type = -2;
    });
  }

  public fullProduct(product): void {
    this.productService.fullProduct(product.prod_id).then((response) => {
      const index: number = this._findIndex(this.products, (item) => {return item.prod_id === product.prod_id});
      this.products[index].prod_type = 1;
    });
  }

  public editProduct(product): void {
    if(product.prod_id) {
      this.router.navigate(['edit-product', this._cafeteriaId, this._categoryId, product.prod_id]);
    }
  }

  public goToCategoriesList(): void {
    this.router.navigate(['categories-list', this._cafeteriaId]);
  }

  public goToCafeteriasList(): void {
    this.router.navigate(['cafeteria-list']);
  }

  public goToRemovedProductList(): void {
    this.router.navigate(['removed-products', this._cafeteriaId, this._categoryId]);
  }

  public restoreProduct(product: any): void {
    this.productService.restoreProduct()
  }

  ////
  private _getProducts(): void {
    this.productService.getRemovedProducts(this._cafeteriaId).then((response) => {
      console.log('response', response);
      this.products = response.data;
    }, (error) => {
      console.log('error ==> ', error);
    });
  }

  private _goTo(url: string): void {
    this.router.navigateByUrl(url);
  }

  private _copy(obj: any): any {
    const result: any = {};
    for(const key in obj) {
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
