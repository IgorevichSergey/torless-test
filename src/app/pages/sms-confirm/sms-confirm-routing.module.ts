import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// COMPONENT
import { SmsConfirmComponent } from './sms-confirm.component';

const routes: Routes = [
  { path: 'sms-confirm', component: SmsConfirmComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmsConfirmRoutingModule { }
