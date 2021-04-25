import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPortalComponent } from './admin/admin-portal/admin-portal.component';
import { EditComponent } from './employee/edit/edit.component';
import { NavComponent } from './employee/nav/nav.component';
import { OrdersComponent } from './employee/orders/orders.component';
import { UnlockComponent } from './employee/unlock/unlock.component';
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [
  { path: "\login", component: LoginComponent },
  { path: "\adminPortal", component: AdminPortalComponent },
  { path: "\employeePortal", component: NavComponent, children: [
    { path: 'orders', component: OrdersComponent },
    { path: 'unlock', component: UnlockComponent },
    { path: 'edit' , component: EditComponent }
  ]},
  { path: "", redirectTo: "\login", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
