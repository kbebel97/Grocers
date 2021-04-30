import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from 'src/app/models/Order.model';


@Injectable({
  providedIn: 'root'
})
export class UserOrdersService {

  constructor(private http: HttpClient) { }

  retrieveAllOrders() {
    return this.http.get<{ message: string, orders: any }>("http://localhost:9090/order/retrieveOrders");
  }
}
