import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { AddProductRoutingModule } from './app-product-routing.module';
import { AddProductComponent } from './add-product.component';

import { DirectivesModule } from '../directives';
import { ComponentsModule } from '../components';

@NgModule({
  imports: [
    CommonModule,
    AddProductRoutingModule,
    FormsModule,
    ComponentsModule,
    DirectivesModule
  ],
  declarations: [
    AddProductComponent
  ]
})
export class AddProductModule { }
