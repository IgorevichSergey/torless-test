import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TermsConditionsComponent } from './terms-conditions.component';
import { TermsConditionsRoutingModule } from './terms-conditions-routing.module';

import { DirectivesModule } from '../../directives';
import { ComponentsModule } from '../../components';

@NgModule({
  imports: [
    CommonModule,
    TermsConditionsRoutingModule,
    FormsModule,
    ComponentsModule,
    DirectivesModule
  ],
  declarations: [
    TermsConditionsComponent
  ]
})
export class TermsConditionsModule { }
