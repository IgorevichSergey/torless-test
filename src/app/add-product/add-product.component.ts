import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProductService } from '../services';

import { CreatedMainProduct } from '../custom-classes';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  public createdMainProduct: CreatedMainProduct = new CreatedMainProduct();
  public minutes: number[] = new Array(18);

  public newSubCategory: any;

  private _cafeteriaId: number;
  private _categoryId: number;
  // pr_name: '',
  // pr_price: '',
  // pr_cook_time: '',
  // pr_descr: '',

  // extra_cat_name: string;
  // extra_pr_name: string;
  // extra_pr_price: string;
  // extra_pr_descr: string;
  // double_extra_products: IDoubleExtraProduct[];

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
    this.createdMainProduct.pr_caf_id = this._cafeteriaId;
    this.createdMainProduct.pr_cat_id = this._categoryId;
    this.createdMainProduct.product.pr_price = '' + this.createdMainProduct.product.pr_price;
    this.productService.createMainProduct(this.createdMainProduct).then((response) => {
      console.log('response ==> ', response);
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

  public addNewSubCategory(): void {
    this.newSubCategory = {};
  }

  public saveNewSubCategory(newSubCategory: any): void {
    if(newSubCategory.extra_cat_name) {
      this.createdMainProduct.extra_categories.push({
        extra_cat_name: newSubCategory.extra_cat_name,
        extra_pr_name: this.createdMainProduct.product.pr_name,
        extra_pr_price: '' + this.createdMainProduct.product.pr_price,
        extra_pr_descr: this.createdMainProduct.product.pr_descr,
        double_extra_products: [{
          double_extra_pr_name: '',
          double_extra_pr_price: ''
        }]
      });

      this.newSubCategory = null;
    }

  }

  public isAddSuCategoryButtonDisabled(): boolean {
    let result: boolean = false;

    if (!this.createdMainProduct.product.pr_name ||
        !this.createdMainProduct.product.pr_price ||
        !this.createdMainProduct.product.pr_cook_time ||
        !this.createdMainProduct.product.pr_descr) {
      result = true;
    }

    return result;
  }

  public isSubmitButtonDisabled(): boolean {
    let result: boolean = false;

    result = this.isAddSuCategoryButtonDisabled();

    if(this.createdMainProduct.extra_categories.length === 0) {
      result = true;
    }

    return result;
  }


  ///
  private _goTo(url: string) {
    this.router.navigateByUrl(url);
  }

}
