import { InformationComponent } from './information/information.component';
import { PathComponent } from './path/path.component';
import { UserImageComponent } from './user-image/user-image.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { TimeSelectComponent } from './time-select/time-select.component';
import { InputComponent } from './input/input.component';
import { SelectComponent } from './select/select.component';
import { TextareaComponent } from './textarea/textarea.component';

export { InformationComponent, PathComponent, UserImageComponent, ProgressBarComponent, InputComponent };

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DirectivesModule } from '../directives';
import { PipesModule } from '../pipes';

// import { InformationComponent } from './information/information.component';
// import { PathComponent } from './path/path.component';
// import { UserImageComponent } from './user-image/user-image.component';
// import { ProgressBarComponent } from './progress-bar/progress-bar.component';

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
    TimeSelectComponent
  ],
  exports: [
    InformationComponent,
    PathComponent,
    UserImageComponent,
    ProgressBarComponent,
    InputComponent,
    TextareaComponent,
    SelectComponent,
    TimeSelectComponent
  ]
})
export class ComponentsModule {}
