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
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { SmsConfirmModule } from './sms-confirm/sms-confirm.module';
import { CafeteriaListModule } from './cafeteria-list/cafeteria-list.module';
import { CafeteriaTypeModule } from './cafeteria-type/cafeteria-type.module';
import { CreateCafeteriaModule } from './create-cafeteria/create-cafeteria.module';
import { CreateMainCategoryModule } from './create-main-category/create-main-category.module';
import { ProductListModule } from './product-list/product-list.module';
import { CategoriesListModule } from './categories-list/categories-list.module';
import { CreateManagerModule } from './create-manager/create-manager.module';
import { AddProductModule } from './add-product/add-product.module';

// COMPONENTS
import { ComponentsModule  } from './components';

// SERVICES
import { ProductService, CategoryService, CafeteriaService, UserService, UniversityService, AuthGuardService, TimeSelectService } from './services';

// DIRECTIVES
import { DirectivesModule } from './directives/index';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CreateManagerComponent } from './create-manager/create-manager.component';
import { AddProductComponent } from './add-product/add-product.component';


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
    ComponentsModule,
    DirectivesModule,
    HttpModule
  ],
  providers: [
    AuthGuardService,
    ProductService,
    CategoryService,
    CafeteriaService,
    UserService,
    UniversityService,
    TimeSelectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
