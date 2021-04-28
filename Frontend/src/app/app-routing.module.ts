import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPortalComponent } from './admin/admin-portal/admin-portal.component';
import { RequestComponent } from './employee/request/request.component';
import { EditComponent } from './employee/edit/edit.component';
import { NavComponent } from './employee/nav/nav.component';
import { OrdersComponent } from './employee/orders/orders.component';
import { UnlockComponent } from './employee/unlock/unlock.component';
import { LoginComponent } from './login/login/login.component';
import { ProductNavComponent } from './products/product-nav/product-nav.component';
import {ProductAddComponent} from './products/product-add/product-add.component';
import { ProductListComponent } from './products/product-list/product-list.component'

import { AddEmployeeComponent } from './admin/add-employee/add-employee.component';
import { AddProductsComponent } from './admin/add-products/add-products.component';
import { DeleteProductsComponent } from './admin/delete-products/delete-products.component';
import { UpdateProductsComponent } from './admin/update-products/update-products.component';
import { ViewRequestsComponent } from './admin/view-requests/view-requests.component';
import { DeleteEmployeeComponent } from './admin/delete-employee/delete-employee.component';
import { GenerateReportsComponent } from './admin/generate-reports/generate-reports.component';
import {UserSignupComponent} from './products/user-signup/user-signup.component'
const routes: Routes = [
  {
    path: "\prodPortal", component: ProductNavComponent, children: [
      { path: 'prodList', component: ProductListComponent },
   //   {path: 'prodAdd', component: ProductAddComponent}
    ]
  },

  
  { path: "\login", component: LoginComponent },
  {path: "\signup", component: UserSignupComponent},
  {
    path: "\adminPortal", component: AdminPortalComponent, children: [
      { path: 'addProducts', component: AddProductsComponent },
      { path: 'deleteProducts', component: DeleteProductsComponent },
      { path: 'updateProducts', component: UpdateProductsComponent },
      { path: 'viewRequests', component: ViewRequestsComponent },
      { path: 'addEmployee', component: AddEmployeeComponent },
      { path: 'deleteEmployee', component: DeleteEmployeeComponent },
      { path: 'generateReports', component: GenerateReportsComponent }
    ]
  },
  { path: "\employeePortal", component: NavComponent, children: [
    { path: 'orders', component: OrdersComponent },
    { path: 'unlock', component: UnlockComponent },
    { path: 'edit' , component: EditComponent },
    { path: 'request' , component: RequestComponent }
  ]},
  { path: "", redirectTo: "\login", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
