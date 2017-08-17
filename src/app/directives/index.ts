import { NgModule } from '@angular/core';

import { InputDirective } from './input/input.directive';
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    InputDirective
  ],
  exports: [
    InputDirective
  ]
})
export class DirectivesModule {}
