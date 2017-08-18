import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProductService } from '../services';

import { CreatedMainProduct, CreatedExtraCategory, CreatedDoubleExtraProduct } from '../custom-classes';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  public createdMainProduct: CreatedMainProduct = new CreatedMainProduct();
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
    })
  }


  public saveProduct() {
    this.createdMainProduct.pr_caf_id = this._cafeteriaId;
    this.createdMainProduct.pr_cat_id = this._categoryId;
    this.createdMainProduct.product.pr_price = '' + this.createdMainProduct.product.pr_price;

    console.log('this.createdMainProduct', this.createdMainProduct);
    this.productService.createMainProduct(this.createdMainProduct).then((response) => {
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
    this.createdMainProduct.product.pr_cook_time = '' + minute;
  }

  public addNewExtraCategory(): void {
    this.createdMainProduct.extra_categories.push(new CreatedExtraCategory());
  }

  public addDoubleExtraProduct(doubleExtraProducts: CreatedDoubleExtraProduct[]): void {
    doubleExtraProducts.push(new CreatedDoubleExtraProduct());
  }

  public isSubmitButtonDisabled(): boolean {
    let result: boolean = false;

    if (!this.createdMainProduct.product.pr_name ||
      !this.createdMainProduct.product.pr_price ||
      !this.createdMainProduct.product.pr_cook_time ||
      !this.createdMainProduct.product.pr_descr) {
      result = true;
    }

    return result;
  }


  ///

}
