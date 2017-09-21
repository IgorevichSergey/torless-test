import { Component, OnInit } from '@angular/core';
import { PlatformLocation } from '@angular/common';
import { NavigationExtras, Router } from '@angular/router';
import { UserService, ModalService } from '../../services';

import { CreatedUser } from '../../custom-classes';

import { ContactUsModalComponent } from '../../modals/contact-us-modal/contact-us-modal.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public createdUser: CreatedUser = new CreatedUser();
  public registrationError: boolean = false;
  public confirmedPassword: string = '';
  public confirmPasswordError: boolean = false;

  public uploadedImage: string;
  public uploadedFile: File;

  public emailErrorMessage: string;

  public formErrors = {
    emailField: false
  };

  public formErrorMessages = {
    email: ''
  };

  private _errors = {
    invalidEmail: 'דוא"ל שנכתב שגוי',
    emailAlreadyExist: 'הדוא"ל כבר בשימוש'
  };


  private _emailRegExp: RegExp = /(.+)@(.+){2,}\.(.+){2,}/;


  constructor(
    private userService: UserService,
    private modalService: ModalService,
    private router: Router,
    private platformLocation: PlatformLocation
  ) {

    console.log('platformLocation.getBaseHrefFromDOM()', platformLocation.getBaseHrefFromDOM());
    // console.log(platformLocation.location.href);
    // console.log(platformLocation.location.origin);
  }

  ngOnInit() {}

  registerUser(createdUser: CreatedUser): void {
    this.userService.registration(createdUser).then((response) => {
      this.registrationError = false;
      console.log('response ===> ', response);
      console.log('response', response.data.token);
      if (this.uploadedFile) {
        this.userService.saveCompanyImage(this.uploadedFile, response.data.token).then((imgResponse) => {

          this._goTo('/cafeteria-type');
        }, (error) => {
          console.log('error ===> ', error);
        });
      } else {
        console.log('go to cafeteria type');
        this._goTo('/cafeteria-type');
      }


      // todo: go to next page
      // this._goTo('/cafeteria-type');
      console.log('todo: save new image');
    }, (error) => {
      this.registrationError = true;
    });
  }

  contactUsModal() {
    this.modalService.create(ContactUsModalComponent, null, 'middle').then(() => {
console.log("sumbit CB")
    }, () => {
console.log("error CB")
    });
  }

  checkEmail(email: string): void {
    if(email) {
      if(this._emailRegExp.test(email)) {
        this.userService.checkUserEmail(email).then((data) => {
          this.formErrors.emailField = false;
        }, (error) => {
          this.formErrors.emailField = true;
          this.formErrorMessages.email = this._errors.emailAlreadyExist;
        });
      } else {
        this.formErrors.emailField = true;
        this.formErrorMessages.email = this._errors.invalidEmail;
      }
    }

  }

  public passwordsCheck(firstPass, secondPass): void {
    this.confirmPasswordError = ((firstPass !== secondPass) && firstPass !== '' && secondPass !== '');
  }

  public isButtonDisabled(user): boolean {
    let result: boolean = (this.confirmedPassword !== user.us_pass);

    for (let key in user) {
      if (!user[key]) {
        result = true;
      }
    }

    return result;
  }

  public termsAndConditions(): void {
    window.open(this.platformLocation.getBaseHrefFromDOM() + 'terms-and-conditions', '_blank');
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

        // let token = localStorage.getItem('torless_token') ? localStorage.getItem('torless_token') : '6104ff56de74232da2495690d165c54b';
        this.userService.saveCompanyImage(this.uploadedFile, '9cb923ae0f8c4993dadecf1bef0b6f27').then((response) => {
          console.log('response ===> ', response);
        }, (error) => {
          console.log('error ===> ', error);
        });

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
  private _goTo(url: string, params?: NavigationExtras): void {
    this.router.navigateByUrl(url, params);
  }

}
