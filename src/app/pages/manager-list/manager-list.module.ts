import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { ManagerListRoutingModule } from './manager-list-routing.module';
import { ManagerListComponent } from './manager-list.component';

import { DirectivesModule } from '../../directives';
import { ComponentsModule } from '../../components';

@NgModule({
  imports: [
    CommonModule,
    ManagerListRoutingModule,
    FormsModule,
    ComponentsModule,
    DirectivesModule
  ],
  declarations: [
    ManagerListComponent
  ]
})
export class ManagerListModule { }
