import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPortalComponent } from './admin/admin-portal/admin-portal.component';
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [
  { path: "\login", component: LoginComponent },
  { path: "\adminPortal", component: AdminPortalComponent },
  { path: "", redirectTo: "\login", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
