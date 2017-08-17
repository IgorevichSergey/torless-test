import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { ProductListRoutingModule } from './product-list-routing.module';
import { ProductListComponent } from './product-list.component';

import { DirectivesModule } from '../directives';
import { ComponentsModule } from '../components';

import { DndModule } from 'ng2-dnd';

@NgModule({
  imports: [
    CommonModule,
    ProductListRoutingModule,
    FormsModule,
    DirectivesModule,
    ComponentsModule,
    DndModule.forRoot()
  ],
  declarations: [
    ProductListComponent
  ]
})
export class ProductListModule { }
