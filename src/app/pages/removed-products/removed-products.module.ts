import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { RemovedProductsComponent } from './removed-products.component';
import { RemovedProductsRoutingModule } from './removed-products-routing.module';


import { DirectivesModule } from '../../directives';
import { ComponentsModule } from '../../components';

@NgModule({
  imports: [
    CommonModule,
    RemovedProductsRoutingModule,
    FormsModule,
    ComponentsModule,
    DirectivesModule
  ],
  declarations: [
    RemovedProductsComponent
  ]
})
export class RemovedProductsModule { }
