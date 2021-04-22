import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditComponent } from './employee/edit/edit.component';
import { UnlockComponent } from './employee/unlock/unlock.component';
import { OrdersComponent } from './employee/orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    UnlockComponent,
    OrdersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
