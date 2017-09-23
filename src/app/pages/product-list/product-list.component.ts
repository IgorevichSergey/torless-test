import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ProductService } from '../../services';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss', '../pages.scss']
})
export class ProductListComponent implements OnInit {
  public products: any[];

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

  public removeProduct(product): void {
    this.productService.deleteProduct(product.prod_id).then((response) => {
      let index: number = this._findIndex(this.products, (item) => {return item.prod_id === product.prod_id});
      this.products.splice(index, 1);
    });

  }

  public emptyProduct(product): void {
    this.productService.emptyProduct(product.prod_id).then((response) => {
      let index: number = this._findIndex(this.products, (item) => {return item.prod_id === product.prod_id});
      this.products[index].prod_type = -2;
    });
  }

  public fullProduct(product): void {
    this.productService.fullProduct(product.prod_id).then((response) => {
      let index: number = this._findIndex(this.products, (item) => {return item.prod_id === product.prod_id});
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

  public productsDropped(): void {
    let orderedProducts: {prod_id: number; position: number}[] = [];

    this.products.forEach((item, i) => {
      orderedProducts.push({
        prod_id: item.prod_id,
        position: i + 1
      });
    });
 console.log('orderedProducts', orderedProducts);
    this.productService.orderProducts(orderedProducts).then((response) => {
      console.log('response => ', response);
    }, (error) => {
      console.log('error', error);
    });
  }

  ////
  private _getProducts(): void {
    this.productService.getProductsForCategory(this._cafeteriaId, this._categoryId).then((response) => {
      this.products = response.data.products;
      console.log('this.products', this.products);
    }, (error) => {
      console.log('error ==> ', error);
    });
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
