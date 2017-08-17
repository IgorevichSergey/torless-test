import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { CreateMainCategoryRoutingModule } from './create-main-category-routing.module';
import { CreateMainCategoryComponent } from './create-main-category.component';

import { DirectivesModule } from '../directives';
import { ComponentsModule } from '../components';

@NgModule({
  imports: [
    CommonModule,
    CreateMainCategoryRoutingModule,
    FormsModule,
    DirectivesModule,
    ComponentsModule
  ],
  declarations: [
    CreateMainCategoryComponent
  ]
})
export class CreateMainCategoryModule { }
