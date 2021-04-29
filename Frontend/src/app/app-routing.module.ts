import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestComponent } from './employee/request/request.component';
import { EditComponent } from './employee/edit/edit.component';
import { NavComponent } from './employee/nav/nav.component';
import { OrdersComponent } from './employee/orders/orders.component';
import { UnlockComponent } from './employee/unlock/unlock.component';
import { AdminPortalComponent } from './admin/admin-portal/admin-portal.component';
import { AddEmployeeComponent } from './admin/add-employee/add-employee.component';
import { AddProductsComponent } from './admin/add-products/add-products.component';
import { DeleteProductsComponent } from './admin/delete-products/delete-products.component';
import { UpdateProductsComponent } from './admin/update-products/update-products.component';
import { ViewRequestsComponent } from './admin/view-requests/view-requests.component';
import { DeleteEmployeeComponent } from './admin/delete-employee/delete-employee.component';
import { GenerateReportsComponent } from './admin/generate-reports/generate-reports.component';
import { LoginComponent } from './login/login.component';
import { UserSignupComponent } from './signup/user-signup.component';
import { ProductsComponent } from './user/products/products.component';
import { ProductNavComponent } from './user/prod-nav/prod-nav.component';
import { CartComponent } from './user/cart/cart.component';
import { RaiseTicketComponent } from './user/raise-ticket/raise-ticket.component';
import { UserOrderStatusComponent } from './user/user-order-status/user-order-status.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserFundsComponent } from './user/user-funds/user-funds.component';

const routes: Routes = [
  { path: "", redirectTo: "\login", pathMatch: "full" },
  { path: "\login", component: LoginComponent },
  { path: "\logUserTicket", component: RaiseTicketComponent },
  { path: "\signup", component: UserSignupComponent },

  { path: "\prodPortal", component: ProductNavComponent, children: [
      { path: 'products', component: ProductsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'staus', component: UserOrderStatusComponent },
      { path: 'profile', component: UserEditComponent },
      { path: 'funds', component: UserFundsComponent }
    ]
  },

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
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
