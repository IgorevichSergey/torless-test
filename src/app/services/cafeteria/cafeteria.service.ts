import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../../../environments/environment';

import { CreatedCafeteria, UpdatedCafeteria, CreatedProduct } from '../../custom-classes';

@Injectable()
export class CafeteriaService {
  private _host: string;
  private _imageHost: string;
  private _headers: Headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

  constructor(
    private http: Http
  ) {
    this._host = environment.host;
    this._imageHost = environment.cafeteriaImage;
  }

  public createCafeteria(createdCafeteria: CreatedCafeteria): Promise<any> {
    const token: string = localStorage.getItem('torless_token');
    const data: string = JSON.stringify({tag: 'create_cafeteria', 'token': token, cafeteria: createdCafeteria.cafeteria, work_time: createdCafeteria.work_time});

    return new Promise((resolve, reject) => {
      this._setRequest(data).then((response) => {
        resolve(response);
      }, (error) => {
        reject(error);
      });
    });

  }


  public getUserCafeterias(): Promise<any> {
    const token: string = localStorage.getItem('torless_token');
    const data: string = JSON.stringify({tag: 'get_user_cafeterias', token: token});

    return new Promise((resolve, reject) => {
      this._setRequest(data).then((response) => {
        resolve(response);
      }, (error) => {
        reject(error);
      });
    });

  }

  public getCafeteriaById(cafeteriaId: number): Promise<any> {
    const token: string = localStorage.getItem('torless_token');
    const data: string = JSON.stringify({tag: 'get_cafeteria_by_id', token: token, g_caf_id: cafeteriaId});

    return new Promise((resolve, reject) => {
      this._setRequest(data).then((response) => {
        resolve(response);
      }, (error) => {
        reject(error);
      });
    });

  }

  public updateCafeteria(updatedCafeteria: UpdatedCafeteria): Promise<any> {
    const token: string = localStorage.getItem('torless_token');
    const data: string = JSON.stringify({tag: 'update_cafeteria', token: token, cafeteria: updatedCafeteria.cafeteria, work_time: updatedCafeteria.work_time});

    return new Promise((resolve, reject) => {
      this._setRequest(data).then((response) => {
        resolve(response);
      }, (error) => {
        reject(error);
      });
    });
  }


  public getInfo(): Promise<any> {
    const token: string = localStorage.getItem('torless_token');
    const data: string = JSON.stringify({tag: 'get_company_name', token: token});

    return new Promise((resolve, reject) => {
      this._setRequest(data).then((response) => {
        resolve(response);
      }, (error) => {
        reject(error);
      });
    });
  }

  public saveImage(file: File, cafeteriaId: number): Promise<any> {
    const formData = new FormData(),
          token: string = localStorage.getItem('torless_token');

    formData.append('file', file);
    formData.append('token', token);
    formData.append('cafeteria_id', '' + cafeteriaId);

    return new Promise((resolve, reject) => {
      this.http.post(this._imageHost, formData)
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
