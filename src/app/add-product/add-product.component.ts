import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProductService } from '../services';

import { CreatedProduct, ExtraCategories, DoubleExtraProduct, ExtraInfo } from '../custom-classes';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  public createdProduct: CreatedProduct = new CreatedProduct();
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
      });
  }


  public saveProduct() {
    this.createdProduct.pr_caf_id = '' + this._cafeteriaId;
    this.createdProduct.pr_cat_id = '' + this._categoryId;
    this.createdProduct.product.pr_price = '' + this.createdProduct.product.pr_price;

    this.productService.createMainProduct(this.createdProduct).then((response) => {
      console.log('response ==> ', response);
      this.goBack();
    }, (error) => {
      console.log('error ===> ', error);
    });
  }

  public goBack() {
    this.router.navigate(['product-list', this._cafeteriaId, this._categoryId]);
  }

  public selectCookTime(minute: number): void {
    this.createdProduct.product.pr_cook_time = '' + minute;
  }

  public addNewExtraCategory(): void {
    let lastIndex: number = 0;
    this.createdProduct.extra_categories.push(new ExtraCategories());

    lastIndex = this.createdProduct.extra_categories.length - 1;

    // todo: сделать что то с этим говнищем
    this.createdProduct.extra_categories[lastIndex].extra_info.push(new ExtraInfo());
  }

  public addDoubleExtraProduct(doubleExtraProducts: DoubleExtraProduct[]): void {
    doubleExtraProducts.push(new DoubleExtraProduct());
  }

  public addExtraInfo(extra_info) {
    extra_info.push(new ExtraInfo());
  }

  public isSubmitButtonDisabled(): boolean {
    let result: boolean = false;

    if (!this.createdProduct.product.pr_name ||
      !this.createdProduct.product.pr_price ||
      !this.createdProduct.product.pr_cook_time ||
      !this.createdProduct.product.pr_descr) {
      result = true;
    }

    return result;
  }

  public removeExtraCategory(index: number): void {
    this.createdProduct.extra_categories.splice(index, 1);
  }


  ///

}
