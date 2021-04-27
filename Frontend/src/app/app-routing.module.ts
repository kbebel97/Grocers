import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPortalComponent } from './admin/admin-portal/admin-portal.component';
import { LoginComponent } from './login/login/login.component';
import {ProductAddComponent} from './products/product-add/product-add.component';
import { ProductListComponent } from './products/product-list/product-list.component'

const routes: Routes = [
  /* { path: "\login", component: LoginComponent },
  { path: "\adminPortal", component: AdminPortalComponent },
  { path: "", redirectTo: "\login", pathMatch: "full" } */
  {path: "prodAdd", component: ProductAddComponent},
  {path: "prodList", component: ProductListComponent},
  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
