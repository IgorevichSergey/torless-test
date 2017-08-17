import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { CreateCafeteriaRoutingModule } from './create-cafeteria-routing.module';
import { CreateCafeteriaComponent } from './create-cafeteria.component';

import { DirectivesModule } from '../directives';
import { ComponentsModule } from '../components';




@NgModule({
  imports: [
    CommonModule,
    CreateCafeteriaRoutingModule,
    FormsModule,
    DirectivesModule,
    ComponentsModule
  ],
  declarations: [
    CreateCafeteriaComponent
  ]
})
export class CreateCafeteriaModule { }
