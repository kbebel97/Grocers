import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from 'src/app/models/Order.model';
import { OrdersComponent } from './orders.component';

@Injectable()
export class OrdersService {

  constructor(private http: HttpClient){}


  retrieveAllOrders(){
    return this.http.get<{message: string, orders: any}>("http://localhost:9090/order/retrieveOrders");
  }

  updateOrders(updatedOrders : Array<Order>){
    return this.http.put<{message: string, orders: any}>("http://localhost:9090/order/updateOrders", updatedOrders);
  }
}
