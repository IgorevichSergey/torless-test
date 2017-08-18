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

    this.productService.getMainProduct(243).then((response) => {
      console.log('response ==> ', response);
    });
  }


  public saveProduct() {
    this.createdProduct.pr_caf_id = '' + this._cafeteriaId;
    this.createdProduct.pr_cat_id = '' + this._categoryId;
    this.createdProduct.product.pr_price = '' + this.createdProduct.product.pr_price;

    console.log('this.createdProduct', this.createdProduct);
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
    this.createdProduct.extra_categories.push(new ExtraCategories());

    // todo: сделать что то с этим говнищем
    this.createdProduct.extra_categories[0].extra_info.push(new ExtraInfo());
  }

  public addDoubleExtraProduct(doubleExtraProducts: DoubleExtraProduct[]): void {
    doubleExtraProducts.push(new DoubleExtraProduct());
  }

  public addExtraInfo(extra_info) {
    extra_info.push(new ExtraInfo());
    console.log('click')
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


  ///

}
