import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProductService } from '../services';

import { CreatedMainProduct, CreatedDoubleExtraProduct, CreatedExtraCategory } from '../custom-classes';

import * as _ from 'lodash';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  public updatedMainProduct: CreatedMainProduct;
  public minutes: number[] = new Array(18);

  private _cafeteriaId: number;
  private _categoryId: number;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe((param) => {
        this._cafeteriaId = +param.cafId;
        this._categoryId = +param.catId;

        this.productService.getMainProduct(+param.id).then((response) => {
          console.log('response ==> ', response);
          this.updatedMainProduct = this._parseDataFromServer(response.data);
        });
      });
// 243

  }


  public saveProduct() {
    // this.updatedMainProduct.pr_caf_id = this._cafeteriaId;
    // this.updatedMainProduct.pr_cat_id = this._categoryId;
    this.updatedMainProduct.product.pr_price = '' + this.updatedMainProduct.product.pr_price;

    console.log('this.updatedMainProduct', this.updatedMainProduct);
    this.productService.createMainProduct(this.updatedMainProduct).then((response) => {
      console.log('response ==> ', response);
      this.goBack();
    }, (error) => {
      console.log('error ===> ', error);
    });
  }

  public goBack() {
    this.router.navigate(['product-list', this.updatedMainProduct.pr_caf_id, this.updatedMainProduct.pr_cat_id]);
  }

  public selectCookTime(minute: number): void {
    this.updatedMainProduct.product.pr_cook_time = '' + minute;
  }

  public addNewExtraCategory(): void {
    this.updatedMainProduct.extra_categories.push(new CreatedExtraCategory());
  }

  public addDoubleExtraProduct(doubleExtraProducts: CreatedDoubleExtraProduct[]): void {
    console.log('doubleExtraProducts ==> ', doubleExtraProducts)
    doubleExtraProducts.push(new CreatedDoubleExtraProduct());
  }

  public isSubmitButtonDisabled(): boolean {
    let result: boolean = false;

    if (!this.updatedMainProduct.product.pr_name ||
      !this.updatedMainProduct.product.pr_price ||
      !this.updatedMainProduct.product.pr_cook_time ||
      !this.updatedMainProduct.product.pr_descr) {
      result = true;
    }

    return result;
  }


  ///


  private _parseDataFromServer(products: any[]): CreatedMainProduct {
    let result: CreatedMainProduct = new CreatedMainProduct();

    result.pr_caf_id = this._cafeteriaId;
    result.pr_cat_id = this._categoryId;

    result.product.pr_name = products[0].prod_name;
    result.product.pr_descr = products[0].prod_descr;
    result.product.pr_price = products[0].prod_price;
    result.product.pr_cook_time = products[0].prod_cook_time;

    return result;
  }

}
