import { InformationComponent } from './information/information.component';
import { PathComponent } from './path/path.component';
import { UserImageComponent } from './user-image/user-image.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { TimeSelectComponent } from './time-select/time-select.component';

export { InformationComponent, PathComponent, UserImageComponent, ProgressBarComponent };

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DirectivesModule } from '../directives';

// import { InformationComponent } from './information/information.component';
// import { PathComponent } from './path/path.component';
// import { UserImageComponent } from './user-image/user-image.component';
// import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DirectivesModule
  ],
  declarations: [
    InformationComponent,
    PathComponent,
    UserImageComponent,
    ProgressBarComponent,
    TimeSelectComponent
  ],
  exports: [
    InformationComponent,
    PathComponent,
    UserImageComponent,
    ProgressBarComponent,
    TimeSelectComponent
  ]
})
export class ComponentsModule {}
