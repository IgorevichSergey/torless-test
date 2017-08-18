import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { EditCafeteriaRoutingModule } from './edit-cafeteria-routing.module';
import { EditCafeteriaComponent } from './edit-cafeteria.component';

import { ComponentsModule } from '../components';
import { DirectivesModule } from '../directives';

import { DndModule } from 'ng2-dnd';

@NgModule({
  imports: [
    CommonModule,
    EditCafeteriaRoutingModule,
    FormsModule,
    DirectivesModule,
    ComponentsModule,
    DndModule.forRoot()
  ],
  declarations: [
    EditCafeteriaComponent
  ]
})
export class EditCafeteriaModule { }
