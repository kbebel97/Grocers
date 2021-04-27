import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditComponent } from './employee/edit/edit.component';
import { UnlockComponent } from './employee/unlock/unlock.component';
import { OrdersComponent } from './employee/orders/orders.component';
import { LoginComponent } from './login/login/login.component';
import { AdminPortalComponent } from './admin/admin-portal/admin-portal.component';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav/nav.component';
import { ProductListComponent } from './products/product-list/product-list.component'
import { ProductAddComponent } from './products/product-add/product-add.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    UnlockComponent,
    OrdersComponent,
    LoginComponent,
    AdminPortalComponent,
    NavComponent,
    ProductListComponent,
    ProductAddComponent,
    ProductEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
