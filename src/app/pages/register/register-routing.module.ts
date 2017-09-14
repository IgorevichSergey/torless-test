import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedInGuardService } from '../../services';

// COMPONENT
import { RegisterComponent } from './register.component';

const routes: Routes = [
  { path: 'registration', component: RegisterComponent, canActivate: [ LoggedInGuardService ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
