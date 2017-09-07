import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import 'hammerjs';

// MAIN COMPONENT
import { AppComponent } from './app.component';

// ROUTER
import { AppRoutingModule } from './app-routing.module';

// PAGES MODULES
import { LoginModule } from './pages/login/login.module';
import { RegisterModule } from './pages/register/register.module';
import { SmsConfirmModule } from './pages/sms-confirm/sms-confirm.module';
import { CafeteriaListModule } from './pages/cafeteria-list/cafeteria-list.module';
import { CafeteriaTypeModule } from './pages/cafeteria-type/cafeteria-type.module';
import { CreateCafeteriaModule } from './pages/create-cafeteria/create-cafeteria.module';
import { CreateMainCategoryModule } from './pages/create-main-category/create-main-category.module';
import { ProductListModule } from './pages/product-list/product-list.module';
import { CategoriesListModule } from './pages/categories-list/categories-list.module';
import { CreateManagerModule } from './pages/create-manager/create-manager.module';
import { AddProductModule } from './pages/add-product/add-product.module';
import { EditCafeteriaModule } from './pages/edit-cafeteria/edit-cafeteria.module';
import { EditProductModule } from './pages/edit-product/edit-product.module';

import { ManagerListModule } from './pages/manager-list/manager-list.module';
import { EditManagerModule } from './pages/edit-manager/edit-manager.module';
import { ConfirmEmailModule } from './pages/confirm-email/confirm-email.module';
import { RemovedProductsModule } from './pages/removed-products/removed-products.module';

// COMPONENTS
import { ComponentsModule  } from './components';

// SERVICES
import {
  ProductService,
  CategoryService,
  CafeteriaService,
  UserService,
  UniversityService,
  AuthGuardService,
  TimeSelectService,
  ModalService
} from './services';

// DIRECTIVES
import { DirectivesModule } from './directives/index';

// PIPES
import { PipesModule } from './pipes/index';

import { CategoriesListComponent } from './pages/categories-list/categories-list.component';
import { CreateManagerComponent } from './pages/create-manager/create-manager.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { EditCafeteriaComponent } from './pages/edit-cafeteria/edit-cafeteria.component';
import { EditProductComponent } from './pages/edit-product/edit-product.component';
import { ModalContainerComponent } from './modals/modal-container/modal-container.component';
import { TimeSelectModalComponent } from './modals/time-select-modal/time-select-modal.component';
import { ConfirmModalComponent } from './modals/confirm-modal/confirm-modal.component';

// MODALS
import { ModalsModule } from './modals';



// import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';
// import { ManagerListComponent } from './pages/manager-list/manager-list.component';
// import { EditManagerComponent } from './pages/edit-manager/edit-manager.component';
// import { ConfirmEmailComponent } from './pages/confirm-email/confirm-email.component';
// import { RemovedProductsComponent } from './pages/removed-products/removed-products.component';

// 3rd
// import { LodashModule } from 'ng2-lodash';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    LoginModule,
    RegisterModule,
    SmsConfirmModule,
    CafeteriaListModule,
    CafeteriaTypeModule,
    CreateCafeteriaModule,
    CreateMainCategoryModule,
    ProductListModule,
    CategoriesListModule,
    CreateManagerModule,
    AddProductModule,
    EditCafeteriaModule,
    EditProductModule,
    ManagerListModule,
    EditManagerModule,
    ConfirmEmailModule,
    RemovedProductsModule,
    ModalsModule,
    ComponentsModule,
    DirectivesModule,
    PipesModule,
    HttpModule
  ],
  providers: [
    AuthGuardService,
    ProductService,
    CategoryService,
    CafeteriaService,
    UserService,
    UniversityService,
    TimeSelectService,
    ModalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
