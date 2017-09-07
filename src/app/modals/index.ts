import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DirectivesModule } from '../directives';
import { PipesModule } from '../pipes';

import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';
import { TimeSelectModalComponent } from './time-select-modal/time-select-modal.component';
import { ModalContainerComponent } from './modal-container/modal-container.component';

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
    ConfirmModalComponent,
    TimeSelectModalComponent,
    ModalContainerComponent
  ],
  exports: [
    ConfirmModalComponent,
    TimeSelectModalComponent,
    ModalContainerComponent
  ]
})
export class ModalsModule {}
