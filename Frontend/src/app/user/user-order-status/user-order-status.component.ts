<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Order } from 'src/app/models/Order.model';
=======
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Order } from 'src/app/models/Order.model';
import { FormControl, FormGroup } from '@angular/forms';
import { UserOrdersService } from './user-orders.service';
>>>>>>> 1c5c5f7df209d94264d475cf179eec2234022100

@Component({
  selector: 'app-user-order-status',
  templateUrl: './user-order-status.component.html',
  styleUrls: ['./user-order-status.component.css']
})
export class UserOrderStatusComponent {

<<<<<<< HEAD


=======
  orders: Array<Order> = [];
  updatedOrders: Array<Order> = [];
  sessionObj: any;
  userName: any;

  @ViewChild('tbody', { read: ElementRef, static: false }) tbody: ElementRef;

  loading: boolean = false;

  constructor(private OrdersService: UserOrdersService) { }

  ngOnInit(): void {
    this.sessionObj = JSON.parse(sessionStorage.loginObject);
    this.userName = this.sessionObj.userName;
    this.loading = true;
    this.OrdersService.retrieveAllOrders().subscribe((result) => {
      console.log(result.orders)
      result.orders.forEach(data => {
        console.log(data.userName);
        if (this.userName == data.userName) {
          this.orders.push(data);
        }
      })
      this.loading = false;
    })
  }
>>>>>>> 1c5c5f7df209d94264d475cf179eec2234022100
}
