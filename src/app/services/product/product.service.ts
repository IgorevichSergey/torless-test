import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../../../environments/environment';

import { CreatedProduct } from '../../custom-classes';

@Injectable()
export class ProductService {
  private _host: string;
  private _headers: Headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

  constructor(
    private http: Http
  ) {
    this._host = environment.host;
  }

  public createMainProduct(createdProduct: CreatedProduct): Promise<any> {
    const token: string = localStorage.getItem('torless_token');
    const data: string = JSON.stringify({tag: 'create_main_product', token: token, pr_caf_id: createdProduct.pr_caf_id, pr_cat_id:  createdProduct.pr_cat_id, product: createdProduct.product, extra_categories: createdProduct.extra_categories});

    return new Promise((resolve, reject) => {
      this._setRequest(data).then((response) => {
        resolve(response);
      }, (error) => {
        reject(error);
      });
    });

  }

  public getProductsForCategory(cafeteriaId: number, categoryId: number): Promise<any> {
    const token: string = localStorage.getItem('torless_token');
    const data: string = JSON.stringify({ tag: 'get_products_for_category', token: token, gcp_caf_id: cafeteriaId, gcp_cat_id: categoryId});

    return new Promise((resolve, reject) => {
      this._setRequest(data).then((response) => {
        resolve(response);
      }, (error) => {
        reject(error);
      });
    });

  }

  public getMainProduct(productId: number): Promise<any> {
    const token: string = localStorage.getItem('torless_token');
    const data: string = JSON.stringify({tag: 'get_product_by_id', token: token, prod_id: productId});

    return new Promise((resolve, reject) => {
      this._setRequest(data).then((response) => {
        resolve(response);
      }, (error) => {
        reject(error);
      });
    });
  }

  public deleteProduct(productId: number): Promise<any> {
    const token: string = localStorage.getItem('torless_token');
    const data: string = JSON.stringify({tag: 'delete_product', token: token, prod_id: productId});

    return new Promise((resolve, reject) => {
      this._setRequest(data).then((response) => {
        resolve(response);
      }, (error) => {
        reject(error);
      });
    });
  }

  public emptyProduct(productId: number): Promise<any> {
    const token: string = localStorage.getItem('torless_token');
    const data: string = JSON.stringify({tag: 'empty_product', token: token, prod_id: productId});

    return new Promise((resolve, reject) => {
      this._setRequest(data).then((response) => {
        resolve(response);
      }, (error) => {
        reject(error);
      });
    });
  }

  public fullProduct(productId: number): Promise<any> {
    const token: string = localStorage.getItem('torless_token');
    const data: string = JSON.stringify({tag: 'full_product', token: token, prod_id: productId});

    return new Promise((resolve, reject) => {
      this._setRequest(data).then((response) => {
        resolve(response);
      }, (error) => {
        reject(error);
      });
    });
  }

  public updateProduct(updatedProduct: any, cafeteriaId: number, categoryId: number, productId: number): Promise<any> {
    const token: string = localStorage.getItem('torless_token');
    const data: string = JSON.stringify({tag: 'update_main_product', token: token, pr_caf_id: cafeteriaId, pr_cat_id: categoryId, pr_prod_id: productId, product: updatedProduct.product, extra_categories: updatedProduct.extra_categories});

    return new Promise((resolve, reject) => {
      this._setRequest(data).then((response) => {
        resolve(response);
      }, (error) => {
        reject(error);
      });
    });
  }

  /////
  private _setRequest(data: string): Promise<any> {
    const body: URLSearchParams = new URLSearchParams();
    body.set('data', data);
    return new Promise((resolve, reject) => {
      this.http.post(this._host, body.toString(), { headers: this._headers })
        .map(response => response.json())
        .subscribe((response) => {
          if (response.success) {
            resolve(response);
          } else {
            reject(response);
          }
        }, (error) => {
          reject(error);
        });
    });
  }

}
