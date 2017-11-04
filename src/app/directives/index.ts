import { NgModule } from '@angular/core';

import { InputDirective } from './input/input.directive';
import { CheckImageDirective } from './check-image/check-image.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    InputDirective,
    CheckImageDirective
  ],
  exports: [
    InputDirective,
    CheckImageDirective
  ]
})
export class DirectivesModule {}
