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
  public showSpinner: boolean = false;

  public uploadedImage: string;
  public uploadedFile: File;

  public emailErrorMessage: string;

  public formErrors = {
    emailField: false,
    passwordField: false,
    confirmPasswordField: false
  };

  public formErrorMessages = {
    email: '',
    password: ''
  };

  private _errors = {
    invalidEmail: 'דוא"ל שנכתב שגוי',
    emailAlreadyExist: 'הדוא"ל כבר בשימוש',
    invalidPassword: 'חייב להכיל לפחות 6 סמלים',
    passwordsIsNotMatch: 'סיסמאות לא תואמות'
  };


  private _emailRegExp: RegExp = /(.+)@(.+){2,}\.(.+){2,}/;


  constructor (
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
    console.log('createdUser', createdUser);
    console.log('this.uploadedFile', this.uploadedFile);
    this.showSpinner = true;
    this.checkEmail(createdUser.user.us_email || '').then(() => {
      this.userService.registration(createdUser).then((response) => {
        this.registrationError = false;
        this.showSpinner = false;
        console.log('response ===> ', response);
        console.log('response', response.data.token);
        if (this.uploadedFile) {
          this.userService.saveCompanyImage(this.uploadedFile, response.data.token).then((imgResponse) => {
            this._goTo('/welcome-page');
          }, (error) => {
            console.log('error ===> ', error);
          });
        } else {
          console.log('go to cafeteria type');

        }

        this._goTo('/welcome-page');

        console.log('todo: save new image');
      }, (error) => {
        this.registrationError = true;
        this.showSpinner = false;
      });
    }, () => {
      console.log('email already exist, or has incorrect format.');
      this.showSpinner = false;
    });

  }

  contactUsModal() {
    this.modalService.create(ContactUsModalComponent, null, 'middle').then(() => {
console.log("sumbit CB")
    }, () => {
console.log("error CB")
    });
  }

  checkEmail(email: string): Promise<any> {
    return new Promise((resolve, reject) => {
      if(email) {
        if(this._emailRegExp.test(email)) {
          this.userService.checkUserEmail(email).then((data) => {
            resolve();
            this.formErrors.emailField = false;
          }, (error) => {
            reject();
            this.formErrors.emailField = true;
            this.formErrorMessages.email = this._errors.emailAlreadyExist;
          });
        } else {
          reject();
          this.formErrors.emailField = true;
          this.formErrorMessages.email = this._errors.invalidEmail;
        }
      } else {
        reject();
      }
    });

  }

  isPasswordValid(password: string, type: string): void {
    if (password && password !== '') {
      if (password.length >= 6) {
        this.formErrors[type] = false;
      } else {
        this.formErrors[type] = true;
        this.formErrorMessages.password = this._errors.invalidPassword;
      }
    }
  }

  isPasswordConfirm(password, confirmPassword): void {
    if (password && confirmPassword) {
      this.formErrors.passwordField = (password !== confirmPassword);
      this.formErrors.confirmPasswordField = (password !== confirmPassword);
      this.formErrorMessages.password = this._errors.passwordsIsNotMatch;
    }
  }
  // passwordsIsNotMatch

  // public isButtonDisabled(user): boolean {
  //   let result: boolean = (this.confirmedPassword !== user.us_pass);
  //
  //   for (let key in user) {
  //     if (!user[key]) {
  //       result = true;
  //     }
  //   }
  //
  //   return result;
  // }

  isButtonDisabled(user, company): boolean {
    console.log('user', user);
    console.log('company', company);
    let disable = false;
    for (const key in user) {
      if (!user[key] || user[key] === '' || user[key] === null || user[key] === undefined) {
        disable = true;
        break;
      }
    }

    for (const key in company) {
      if (!company[key] || company[key] === '' || company[key] === null || company[key] === undefined) {
        disable = true;
        break;
      }
    }

    if (!disable) {
      if (this.__hasError()) {
        disable = true;
      }

      disable = this.confirmedPassword !== user.us_pass;
    }

    // for (const key in user) {
    //   // console.log('user[key]', user[key])
    //   if (!user[key] || String(user[key]).length < 2) {
    //     disable = true;
    //   }
    // }

    return disable;
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

        // let token = localStorage.getItem('torless_token') ? localStorage.getItem('torless_token') : null;
        // this.userService.saveCompanyImage(this.uploadedFile, token).then((response) => {
        //   console.log('response ===> ', response);
        // }, (error) => {
        //   console.log('error ===> ', error);
        // });

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

  phoneFormatter(t: string): any {
    const numbers: string = t ? t.replace(/\D/g, '') : '',
      dashes: Object = {
        3: '-'
      },
      len = (numbers.length <= 10) ? numbers.length : 10;

    let result: string = '';

    for (let i = 0; i < len; i++) {
      result += (dashes[i] || '') + numbers[i];
    }

    return result;
  }

  /////
  private _goTo(url: string, params?: NavigationExtras): void {
    this.router.navigateByUrl(url, params);
  }

  private __hasError(): boolean {
    let result: boolean = false;
    for (const key in this.formErrors) {
      if (this.formErrors[key]) {
        result = true;
      }
    }

    return result;
  }

}
