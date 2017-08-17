import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { CreateManagerRoutingModule } from './create-manager-routing.module';
import { CreateManagerComponent } from './create-manager.component';

import { ComponentsModule } from '../components';
import { DirectivesModule } from '../directives';

import { DndModule } from 'ng2-dnd';

@NgModule({
  imports: [
    CommonModule,
    CreateManagerRoutingModule,
    FormsModule,
    DirectivesModule,
    ComponentsModule,
    DndModule.forRoot()
  ],
  declarations: [
    CreateManagerComponent
  ]
})
export class CreateManagerModule { }
