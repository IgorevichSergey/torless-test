import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { SmsConfirmRoutingModule } from './sms-confirm-routing.module';
import { SmsConfirmComponent } from './sms-confirm.component';

import { DirectivesModule } from '../directives';


@NgModule({
  imports: [
    CommonModule,
    SmsConfirmRoutingModule,
    FormsModule,
    DirectivesModule
  ],
  declarations: [
    SmsConfirmComponent
  ]
})
export class SmsConfirmModule { }
