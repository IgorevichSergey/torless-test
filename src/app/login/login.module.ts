import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import { DirectivesModule } from '../directives';

// import { DndModule } from 'ng2-dnd';




@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    DirectivesModule,
    // DndModule.forRoot()
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }
