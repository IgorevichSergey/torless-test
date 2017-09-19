import { Component, OnInit, Renderer } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CafeteriaService, TimeSelectService, UniversityService, ModalService } from '../../services';

// custom classes
import { CreatedCafeteria } from '../../custom-classes';

// modal
import { TimeSelectModalComponent } from '../../modals/time-select-modal/time-select-modal.component';

@Component({
  selector: 'app-create-cafeteria',
  templateUrl: './create-cafeteria.component.html',
  styleUrls: ['./create-cafeteria.component.scss']
})
export class CreateCafeteriaComponent implements OnInit {
  complete: number = 25; // 25, 50, 75, 100

  public createdCafeteria: CreatedCafeteria = new CreatedCafeteria();
  public universities: any[];
  public universityBuildings: any[];

  public uploadedFile: File;
  public uploadedImage: string;

  private _cafeteriaTypeId: number;

  constructor(
    private renderer: Renderer,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private cafeteriaService: CafeteriaService,
    private universityService: UniversityService,
    private timeSelectService: TimeSelectService,
    private modalService: ModalService
  ) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe((param) => {
        this._cafeteriaTypeId = +param.typeId;
      });

    this.activatedRoute.queryParams
      .subscribe((e) => {
        if(e.id) {
          this.cafeteriaService.getCafeteriaById(+e.id).then((response) => {
            this._copyExistingCafeteria(response.data.cafeteria);
          }, (error) => {
            console.log('error getCafeteriaById', error)
          });
        }
      });

    this._getUniversities();
  }

  public selectDay(event: MouseEvent) {
    let addClass: boolean = !(event.target as any).classList.contains('selected');

    this.renderer.setElementClass(event.target, 'selected', addClass);
  }

  public selectUniversity(event: Event) {
    this._getUniversityBuildingById(this.createdCafeteria.cafeteria.caf_university_id).then((universityBuildings) => {
      this.universityBuildings = universityBuildings;
    });
  }

  public createCafeteria(createdCafeteria: CreatedCafeteria): void {
    this.createdCafeteria.cafeteria.caf_type = this._cafeteriaTypeId;

    this.cafeteriaService.createCafeteria(this.createdCafeteria).then((response) => {
      console.log('response', response);
      this.router.navigate(['create-cafeteria-manager', response.data.caf_id]);
      // this._goTo('/create-cafeteria-manager');
    }, (error) => {
      console.log('error', error);
    });
  }

  public showTimeSelectModal(dayNumber: number, event): void {
    this.modalService.create(TimeSelectModalComponent, {
      workTime: this.createdCafeteria.work_time,
      selectedDay: dayNumber
    }, 'middle').then((response) => {
      console.log('response', response);
    }, (errors) => {
      console.log('errors', errors);
    });
    // this.timeSelectService.show(dayNumber, this.createdCafeteria.work_time[dayNumber - 1]).then((response) => {
    //   this._setSelectedTime(this.createdCafeteria.work_time, {
    //     day_number: dayNumber,
    //     time_start: (response as any).begin,
    //     time_end: (response as any).end
    //   });
    //   this.selectDay(event);
    // }, (error) => {
    //   console.log('error', error);
    // });
  }

  public showTimeText(dayNumber): boolean {
    let index = this._findIndex(this.createdCafeteria.work_time, (day) => {
          return day.day_number === dayNumber;
        });

    return (index >= 0);
  }

  public getTimeByDayNumber(dayNumber: number): string {
    let result: string,
        index: number = this._findIndex(this.createdCafeteria.work_time, (day) => {
          return day.day_number === dayNumber;
        });

    if(index >= 0) {
      result = `${this.createdCafeteria.work_time[index].time_start} - ${this.createdCafeteria.work_time[index].time_end}`
    } else {
      result = 'NA';
    }

    return result;
  }

  public goBack(): void {
    this._goTo('/cafeteria-type');
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
    this.uploadedImage = null;
    this.uploadedFile = null;
  }


  /////
  private _copyExistingCafeteria(existingCafeteria) {
    this.createdCafeteria.cafeteria = {
      caf_type: +existingCafeteria.caf_type,
      caf_name: existingCafeteria.caf_name,
      caf_university_id: +existingCafeteria.university_id,
      caf_university_building_id: +existingCafeteria.university_building_id,
      caf_kosher_type: +existingCafeteria.kosher_type,
      caf_veg_type: +existingCafeteria.veg_type,
      caf_address: existingCafeteria.caf_address,
      caf_description: existingCafeteria.description
    };

    existingCafeteria.working_time.forEach((item) => {
      this.createdCafeteria.work_time.push({
        day_number: item.day_number,
        time_start: item.time_start,
        time_end: item.time_end
      });
    });

    this._getUniversityBuildingById(this.createdCafeteria.cafeteria.caf_university_id).then((universityBuildings) => {
      this.universityBuildings = universityBuildings;
    });
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

  private _setSelectedTime(array: any[], newTime: { day_number: number, time_start: string, time_end: string }): void {
    let index = this._findIndex(this.createdCafeteria.work_time, (day) => {
          return day.day_number === newTime.day_number;
        });

    if(index >= 0) {
      this.createdCafeteria.work_time[index] = newTime;
    } else {
      this.createdCafeteria.work_time.push(newTime);
    }
  }

  private _goTo(url: string) {
    this.router.navigateByUrl(url);
  }

}
