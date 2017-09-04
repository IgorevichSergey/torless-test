import { Component, OnInit, Renderer } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import { UpdatedCafeteria } from '../../custom-classes';

import { CafeteriaService, UniversityService, TimeSelectService } from '../../services';

@Component({
  selector: 'app-edit-cafeteria',
  templateUrl: './edit-cafeteria.component.html',
  styleUrls: ['./edit-cafeteria.component.scss']
})
export class EditCafeteriaComponent implements OnInit {
  private _cafeteriaId: number;
  public updatedCafeteria: UpdatedCafeteria;

  public universities: any[];
  public universityBuildings: any[];

  constructor(
    private renderer: Renderer,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private timeSelectService: TimeSelectService,
    private cafeteriaService: CafeteriaService,
    private universityService: UniversityService
  ) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe((param) => {
        this._cafeteriaId = +param.id;
        this._getCafeteria(+param.id).then((data) => {
          this.updatedCafeteria = this._parseCafeteriaToSaveFormat(data);
          this.getBuildingsByUniversityId(this.updatedCafeteria.cafeteria.up_caf_university_id);
          this._getUniversityBuildingById(this.updatedCafeteria.cafeteria.up_caf_university_building_id);
        });
      });

    this._getUniversities();
  }

  public showTimeSelectModal(dayNumber: number, event): void {
    this.timeSelectService.show(dayNumber).then((response) => {
      this._setSelectedTime(this.updatedCafeteria.work_time, {
        up_day_number: dayNumber,
        up_time_start: (response as any).begin,
        up_time_end: (response as any).end
      });
      this.selectDay(event);
    }, (error) => {
      console.log('error', error);
    });
  }

  public selectDay(event: MouseEvent) {
    let addClass: boolean = !(event.target as any).classList.contains('selected');

    this.renderer.setElementClass(event.target, 'selected', addClass);
  }

  public showTimeText(dayNumber): boolean {
    let index = this._findIndex(this.updatedCafeteria.work_time, (day) => {
      return day.up_day_number === dayNumber;
    });

    return (index >= 0);
  }

  public getTimeByDayNumber(dayNumber: number): string {
    let result: string,
        index: number = this._findIndex(this.updatedCafeteria.work_time, (day) => {
          return day.up_day_number === dayNumber;
        });

    if (index >= 0) {
      result = `${this.updatedCafeteria.work_time[index].up_time_start} - ${this.updatedCafeteria.work_time[index].up_time_end}`;
    } else {
      result = 'NA';
    }

    return result;
  }

  public getBuildingsByUniversityId(universityId: number) {
    this._getUniversityBuildingById(universityId).then((universityBuildings) => {
      this.universityBuildings = universityBuildings;
    });
  }

  public updateCafeteria(updatedCafeteria: UpdatedCafeteria): void {
    this.cafeteriaService.updateCafeteria(updatedCafeteria).then((data) => {
      console.log('update data', data);
      this.goBack();
    });
  }

  public goBack(): void {
    this.router.navigate(['cafeteria-list']);
  }



  ////
  private _getCafeteria(id: number): Promise<any> {
    console.log('id ==> ', id)
    return new Promise((resolve, reject) => {
      this.cafeteriaService.getCafeteriaById(id).then((response) => {
        if (response && response.data && response.data.cafeteria) {
          resolve(response.data.cafeteria);
        } else {
          reject();
        }
      });
    });

  }

  private _parseCafeteriaToSaveFormat(cafeteria: any): UpdatedCafeteria {
    let result: UpdatedCafeteria = new UpdatedCafeteria(),
        workTime: any = cafeteria.working_time;

    workTime.forEach((item) => {
      for (let key in item) {
        if (key === 'day_number' || key === 'time_end' || key === 'time_start') {
          item['up_' + key] = item[key];
        }
        delete item[key];
      }
    });

    result.work_time = workTime;
    console.log('result', result);
    console.log('cafeteria', cafeteria);
    //
    result.cafeteria.up_caf_id = cafeteria.id;
    result.cafeteria.up_caf_type = cafeteria.caf_type;
    result.cafeteria.up_caf_name = cafeteria.caf_name;
    result.cafeteria.up_caf_university_id = cafeteria.university_id;
    result.cafeteria.up_caf_university_building_id = cafeteria.university_building_id;
    result.cafeteria.up_caf_kosher_type = cafeteria.kosher_type;
    result.cafeteria.up_caf_veg_type = cafeteria.veg_type;
    result.cafeteria.up_caf_address = cafeteria.caf_address;
    result.cafeteria.up_caf_description = cafeteria.description;

      // up_caf_id: null,
      // up_caf_type: null,
      // up_caf_name: '',
      // up_caf_university_id: null,
      // up_caf_university_building_id: null,
      // up_caf_kosher_type: null,
      // up_caf_veg_type: null,
      // up_caf_address: '',
      // up_caf_description: ''

    // caf_address
    //   :
    //   "test address"
    // caf_icon
    //   :
    //   null
    // caf_image
    //   :
    //   null
    // caf_name
    //   :
    //   "my first cafe"
    // caf_type
    //   :
    //   1
    // company_id
    //   :
    //   36
    // description
    //   :
    //   "sdfsdfsdfsdfsdfsdf"
    // id
    //   :
    //   65
    // kosher_type
    //   :
    //   0
    // university_building_id
    //   :
    //   1
    // university_id
    //   :
    //   1
    // veg_type
    //   :
    //   0

    return result;
  }

  private _findIndex(array: any[], callback: (item: any) => boolean): number {
    let i: number = 0,
      len: number = (array && array.length) ? array.length : 0,
      result: number;

    for(; i < len; i ++) {
      if(callback(array[i])) {
        result = i;
        break;
      }
    }

    return result;
  }

  private _setSelectedTime(array: any[], newTime: { up_day_number: number, up_time_start: string, up_time_end: string }): void {
    let index = this._findIndex(this.updatedCafeteria.work_time, (day) => {
      return day.up_day_number === newTime.up_day_number;
    });

    if(index >= 0) {
      this.updatedCafeteria.work_time[index] = newTime;
    } else {
      this.updatedCafeteria.work_time.push(newTime);
    }
  }

  private _getUniversities() {
    this.universityService.getUniversityList().then((response) => {
      // todo: RENAME response.data.cafeteria -> response.data.universities
      this.universities = response.data.universities;
    });
  }

  private _getUniversityBuildingById(id: number): Promise<any> {
    return new Promise((resolve, reject) => {
      this.universityService.getUniversitybuildings(id).then((response) => {
        resolve(response.data.cafeteria);
      });
    });
  }

}
