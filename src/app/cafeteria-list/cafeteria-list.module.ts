import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { CafeteriaListRoutingModule } from './cafeteria-list-routing.module';
import { CafeteriaListComponent } from './cafeteria-list.component';

import { DirectivesModule } from '../directives';

@NgModule({
  imports: [
    CommonModule,
    CafeteriaListRoutingModule,
    FormsModule,
    DirectivesModule
  ],
  declarations: [
    CafeteriaListComponent
  ]
})
export class CafeteriaListModule { }
