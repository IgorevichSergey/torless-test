import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { CategoriesListRoutingModule } from './categories-list-routing.module';
import { CategoriesListComponent } from './categories-list.component';

import { DirectivesModule } from '../directives';

import { DndModule } from 'ng2-dnd';

@NgModule({
  imports: [
    CommonModule,
    CategoriesListRoutingModule,
    FormsModule,
    DirectivesModule,
    DndModule.forRoot()
  ],
  declarations: [
    CategoriesListComponent
  ]
})
export class CategoriesListModule { }
