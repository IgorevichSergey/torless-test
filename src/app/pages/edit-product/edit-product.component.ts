import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProductService, CafeteriaService, EventService, ModalService } from '../../services';

import { ExtraInfo, DoubleExtraProduct, ExtraCategories } from '../../custom-classes';

import { ErrorModalComponent } from '../../modals';

import * as _ from 'lodash';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  public updatedMainProduct: any; // todo: set UpdatedMainProduct interface
  public minutes: number[] = new Array(18);
  public showSpinner: boolean = false;

  public uploadedImage: string;
  public uploadedFile: File;

  public vegTypes: {veg_id: number, veg_type: string}[];

  private _cafeteriaId: number;
  private _categoryId: number;
  private _productId: number;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private cafeteriaService: CafeteriaService,
    private eventService: EventService,
    private modalService: ModalService
  ) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe((param) => {
      console.log('param', param)
        this._productId = +param.id;
        this._cafeteriaId = +param.cafId;
        this._categoryId = +param.catId;

        this.cafeteriaService.getCafeteriaById(this._cafeteriaId).then((response) => {
          this.eventService.headerText$.emit(response.data.cafeteria.caf_name);
        });

        this.productService.getMainProduct(this._productId).then((response) => {
          console.log('response ==> ', response);
          console.log('response.data', response.data)
          this.updatedMainProduct = this._parseBEData(response.data);
        });
      });

    this.__getVegTypes();

  }


  public updateProduct() {
    // this.updatedMainProduct.pr_caf_id = this._cafeteriaId;
    // this.updatedMainProduct.pr_cat_id = this._categoryId;

    console.log('this.updatedMainProduct', this.updatedMainProduct);
    console.log('this._cafeteriaId', this._cafeteriaId);
    console.log('this._categoryId', this._categoryId);
    console.log('this._productId', this._productId);

    console.log('this.uploadedFile', this.uploadedFile);
    this.showSpinner = true;
    this.productService.updateProduct(this.updatedMainProduct, this._cafeteriaId, this._categoryId, this._productId).then((response) => {
      this.showSpinner = false;
      console.log('response ==> ', response);
      if (this.uploadedFile) {
        this.productService.saveImage(this.uploadedFile, this._productId).then(() => {
          this.showSpinner = false;
          this.goBack();
        }, () => {
          this.modalService.create(ErrorModalComponent).then(() => {
            this.showSpinner = false;
            this.goBack();
          });
        });
      } else {
        this.showSpinner = false;
        this.goBack();
      }

    }, (error) => {
      this.showSpinner = false;
      console.log('error ===> ', error);
    });
  }

  public goBack() {
    this.router.navigate(['product-list', this._cafeteriaId, this._categoryId]);
  }

  public selectCookTime(minute: number): void {
    this.updatedMainProduct.product.pr_cook_time = '' + minute;
  }

  public addNewExtraCategory(): void {
    this.updatedMainProduct.extra_categories.push(new ExtraCategories());
  }

  public addDoubleExtraProduct(doubleExtraProducts: DoubleExtraProduct[]): void {
    console.log('doubleExtraProducts ==> ', doubleExtraProducts)
    doubleExtraProducts.push(new DoubleExtraProduct());
  }

  public isSubmitButtonDisabled(): boolean {
    let result: boolean = false;

    if (!this.updatedMainProduct ||
      !this.updatedMainProduct.product ||
      !this.updatedMainProduct.product.pr_name ||
      !this.updatedMainProduct.product.pr_price ||
      !this.updatedMainProduct.product.pr_cook_time ||
      !this.updatedMainProduct.product.pr_descr) {
      result = true;
    }

    return result;
  }

  public addExtraInfo(extra_info) {
    extra_info.push({
      extra_pr_name: '',
      extra_pr_descr: '',
      extra_pr_price: '',
      double_extra_products: []
    });
  }

  public removeExtraCategory(index: number): void {
    this.updatedMainProduct.extra_categories.splice(index, 1);
  }

  public makeEmpty(statusCode: number): void {
    this.updatedMainProduct.product.prod_type = statusCode;
  }

  public openFileUploader(fileUploader: HTMLElement | any): void {
    if (fileUploader.files && fileUploader.files[0]) {
      const files: FileList = fileUploader.files;
      const file: File = files[0];
      const reader: FileReader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = (() => {
        this.uploadedFile = file;
        this.uploadedImage = reader.result;

        // image size check 150x150
        // const img: HTMLImageElement = new Image();
        // img.src = reader.result;
        // img.onload = () => {
        //   if (img.width <= 150 && img.height <= 150) {
        //     // prev.src = this.src;
        //     this.uploadedImage = img.src;
        //   } else {
        //     console.log('ERROR');
        //   }
        // };

      }).bind(this);

      reader.onerror = ((error) => {
        console.log('Error: ', error);
      });

    }

  }

  public deleteImage(): void {
    this.uploadedFile = null;
    this.uploadedImage = null;
  }

  ///

  private _parseBEData(beData): any {
    let result: any = {};
    result.extra_categories = beData.extra_categories;
    this.uploadedImage = (beData.product.prod_image === 'none') ? '' : beData.product.prod_image;
    result.product = {
      pr_name: beData.product.prod_name,
      pr_price: beData.product.prod_price,
      pr_cook_time: String(beData.product.prod_cook_time),
      pr_descr: beData.product.prod_descr,
      pr_type: beData.product.prod_type
    };

    return result;
  }

  private __getVegTypes(): void {
    this.productService.getVegTypes().then((response) => {
      this.vegTypes = response.data;
    })
  }
}
