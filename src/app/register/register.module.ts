import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';

import { DirectivesModule } from '../directives';


@NgModule({
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule,
    DirectivesModule
  ],
  declarations: [
    RegisterComponent
  ]
})
export class RegisterModule { }
