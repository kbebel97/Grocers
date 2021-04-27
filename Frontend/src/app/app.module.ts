import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditComponent } from './employee/edit/edit.component';
import { UnlockComponent } from './employee/unlock/unlock.component';
import { OrdersComponent } from './employee/orders/orders.component';
import { LoginComponent } from './login/login/login.component';
import { AdminPortalComponent } from './admin/admin-portal/admin-portal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './employee/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';
import { AddEmployeeComponent } from './admin/add-employee/add-employee.component';
import { DeleteEmployeeComponent } from './admin/delete-employee/delete-employee.component';
import { AddProductsComponent } from './admin/add-products/add-products.component';
import { DeleteProductsComponent } from './admin/delete-products/delete-products.component';
import { UpdateProductsComponent } from './admin/update-products/update-products.component';
import { ViewRequestsComponent } from './admin/view-requests/view-requests.component';
import { GenerateReportsComponent } from './admin/generate-reports/generate-reports.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
<<<<<<< HEAD
import { RequestComponent } from './employee/request/request.component';
=======
import { MatProgressBarModule } from '@angular/material/progress-bar';

>>>>>>> 4d0a1b2626e90cc3fbac0d0ddfc14c4132e014ae


@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    UnlockComponent,
    OrdersComponent,
    LoginComponent,
    AdminPortalComponent,
    NavComponent,
    AddEmployeeComponent,
    DeleteEmployeeComponent,
    AddProductsComponent,
    DeleteProductsComponent,
    UpdateProductsComponent,
    ViewRequestsComponent,
    GenerateReportsComponent,
    RequestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
