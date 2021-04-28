import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from 'src/app/models/Order.model';

@Injectable()
export class OrdersService {

  constructor(private http: HttpClient){}


  retrieveAllOrders(){
    return this.http.get<{message: string, orders: any}>("http://localhost:9090/order/retrieveOrders");
  }

  updateOrders(updatedOrders : Array<Order>){
    return this.http.put<{message: string, orders: any}>("http://localhost:9090/order/updateOrders", updatedOrders);
  }

  placeOrder(order : Order){
    return this.http.post<{message: string, order : Order}>("http://localhost:9090/order/postOrder", order)
  }

  search(email : string){
    return this.http.get<{message: string, orders : any}>("http://localhost:9090/order/searchOrders/" + email)
  }

  newestOrders(){
    return this.http.get<{message: string, orders: any}>("http://localhost:9090/order/newOrders")
  }

  oldestOrders(){
    return this.http.get<{message: string, orders: any}>("http://localhost:9090/order/oldOrders")
  }

  deliveryOrders(){
    return this.http.get<{message: string, orders: any}>("http://localhost:9090/order/deliveryOrders")
  }

  deliveredOrders(){
    return this.http.get<{message: string, orders: any}>("http://localhost:9090/order/deliveredOrders")
  }

  shippedOrders(){
    return this.http.get<{message: string, orders: any}>("http://localhost:9090/order/shippedOrders")
  }

  canceledOrders(){
    return this.http.get<{message: string, orders: any}>("http://localhost:9090/order/canceledOrders")
  }


}
