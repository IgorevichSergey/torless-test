import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { CafeteriaTypeRoutingModule } from './cafeteria-type-routing.module';
import { CafeteriaTypeComponent } from './cafeteria-type.component';

import { DirectivesModule } from '../directives';
import { ComponentsModule } from '../components';

@NgModule({
  imports: [
    CommonModule,
    CafeteriaTypeRoutingModule,
    FormsModule,
    DirectivesModule,
    ComponentsModule
  ],
  declarations: [
    CafeteriaTypeComponent
  ]
})
export class CafeteriaTypeModule { }
