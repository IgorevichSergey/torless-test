import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { ConfirmEmailRoutingModule } from './confirm-email-routing.module';
import { ConfirmEmailComponent } from './confirm-email.component';

import { DirectivesModule } from '../../directives';
import { ComponentsModule } from '../../components';

@NgModule({
  imports: [
    CommonModule,
    ConfirmEmailRoutingModule,
    FormsModule,
    ComponentsModule,
    DirectivesModule
  ],
  declarations: [
    ConfirmEmailComponent
  ]
})
export class ConfirmEmailModule { }
