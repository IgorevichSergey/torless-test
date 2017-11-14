import { InformationComponent } from './information/information.component';
import { PathComponent } from './path/path.component';
import { UserImageComponent } from './user-image/user-image.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { InputComponent } from './input/input.component';
import { SelectComponent } from './select/select.component';
import { TextareaComponent } from './textarea/textarea.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

export { InformationComponent, PathComponent, UserImageComponent, ProgressBarComponent, InputComponent, LoadingSpinnerComponent };

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DirectivesModule } from '../directives';
import { PipesModule } from '../pipes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DirectivesModule,
    PipesModule
  ],
  declarations: [
    InformationComponent,
    PathComponent,
    UserImageComponent,
    ProgressBarComponent,
    InputComponent,
    TextareaComponent,
    SelectComponent,
    LoadingSpinnerComponent
  ],
  exports: [
    InformationComponent,
    PathComponent,
    UserImageComponent,
    ProgressBarComponent,
    InputComponent,
    TextareaComponent,
    SelectComponent,
    LoadingSpinnerComponent
  ]
})
export class ComponentsModule {}
