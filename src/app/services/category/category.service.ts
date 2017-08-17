import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../../../environments/environment';

import { CreatedCafeteria, CreatedMainCategoryClass, UpdatedMainCategory } from '../../custom-classes';

@Injectable()
export class CategoryService {
  private _host: string;
  private _headers: Headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

  constructor(
    private http: Http
  ) {
    this._host = environment.host;
    // this._token = WindowLocalStorage.get('torless_token');
  }

  public createMainCategory(createdMainCategory: CreatedMainCategoryClass): Promise<any> {
    const token: string = localStorage.getItem('torless_token');
    const data: string = JSON.stringify({tag: 'create_main_category', token: token, ct_caf_id: createdMainCategory.ct_caf_id, ct_name: createdMainCategory.ct_name});

    return new Promise((resolve, reject) => {
      this._setRequest(data).then((response) => {
        resolve(response);
      }, (error) => {
        reject(error);
      });
    });

  }

  public getCategoriesForCafeteria(cafeteriaId: number): Promise<any> {
    const token: string = localStorage.getItem('torless_token');
    const data: string = JSON.stringify({tag: 'get_categories_for_cafe', token: token, gc_caf_id: cafeteriaId});

    return new Promise((resolve, reject) => {
      this._setRequest(data).then((response) => {
        resolve(response);
      }, (error) => {
        reject(error);
      });
    });

  }

  public updateMainCategory(updatedMainCategory: UpdatedMainCategory): Promise<any> {
    const token: string = localStorage.getItem('torless_token');
    const data: string = JSON.stringify({tag: 'update_main_category', token: token, upm_caf_id: updatedMainCategory.upm_caf_id, upm_cat_id: updatedMainCategory.upm_cat_id, upm_cat_name: updatedMainCategory.upm_cat_name, upm_cat_number: updatedMainCategory.upm_cat_number});

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
