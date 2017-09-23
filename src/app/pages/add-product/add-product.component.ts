import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProductService, CafeteriaService, EventService } from '../../services';

import { CreatedProduct, ExtraCategories, DoubleExtraProduct, ExtraInfo } from '../../custom-classes';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  public createdProduct: any = new CreatedProduct();
  public minutes: number[] = new Array(18);

  public uploadedFile: File;
  public uploadedImage: string;

  public emptyProduct: boolean = false;

  public vegTypes: {veg_id: number, veg_type: string}[];

  private _cafeteriaId: number;
  private _categoryId: number;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private cafeteriaService: CafeteriaService,
    private eventService: EventService
  ) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe((param) => {
        this._cafeteriaId = +param.cafId;
        this._categoryId = +param.catId;
        this.cafeteriaService.getCafeteriaById(this._cafeteriaId).then((response) => {
          this.eventService.headerText$.emit(response.data.cafeteria.caf_name);
        });
      });
    this.__getVegTypes();
  }


  public saveProduct() {
    this.createdProduct.pr_caf_id = '' + this._cafeteriaId;
    this.createdProduct.pr_cat_id = '' + this._categoryId;
    this.createdProduct.product.pr_price = '' + this.createdProduct.product.pr_price;

    this.productService.createMainProduct(this.createdProduct).then((response) => {
      console.log('response ==> ', response);
      if (this.uploadedFile) {
        this.productService.saveImage(this.uploadedFile, response.data.prod_id).then((imgResponse) => {
          console.log('imgResponse', imgResponse);
          this.goBack();
        }, (imgError) => {
          console.warn('imgError', imgError);
        });
      } else {
        this.goBack();
      }
      // todo: delete after BE connect
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

  deleteImage() {
    this.uploadedFile = null;
    this.uploadedImage = null;
  }


  makeEmpty(status: number): void {
    this.createdProduct.product.pr_type = status;
  }

  ///

  private __makeEmptyProduct(productId: number): void {
    this.productService.emptyProduct(productId).then(() => {
      this.router.navigate(['removed-products', this._cafeteriaId, this._categoryId]);
    });
  }

  private __getVegTypes(): void {
    this.productService.getVegTypes().then((response) => {
      this.vegTypes = response.data;
    })
  }

}
