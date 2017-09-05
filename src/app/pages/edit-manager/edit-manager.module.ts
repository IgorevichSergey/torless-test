import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { EditManagerRoutingModule } from './edit-manager-routing.module';
import { EditManagerComponent } from './edit-manager.component';

import { DirectivesModule } from '../../directives';
import { ComponentsModule } from '../../components';

@NgModule({
  imports: [
    CommonModule,
    EditManagerRoutingModule,
    FormsModule,
    ComponentsModule,
    DirectivesModule
  ],
  declarations: [
    EditManagerComponent
  ]
})
export class EditManagerModule { }
