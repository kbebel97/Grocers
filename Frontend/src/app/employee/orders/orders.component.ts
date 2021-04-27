import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Order } from 'src/app/models/Order.model';
import { OrdersService } from './orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  providers: [OrdersService]
})
export class OrdersComponent implements OnInit {

  orders : Array<Order> = [];
  updatedOrders : Array<Order> = [];

  @ViewChild('tbody', {read: ElementRef, static: false}) tbody: ElementRef;


  constructor(private OrdersService: OrdersService) { }

  searchRef=new FormGroup({
    email:new FormControl(),
  });


  ngOnInit(): void {
    this.OrdersService.retrieveAllOrders().subscribe((result) => {
      console.log(result.orders)
      this.orders = result.orders;
    })


    let order0 : Order = {
      _id : "0",
      _userId : "0",
      status: "shipped",
      date: "04/26/2021 1:40pm",
      email : "dummyemail@gmail.com",
      userName : "dummyuserName",
      orderItems : [{_id : "0", product : {_id : "0", name: "Playstation5 consolelll", description : "console", price : 500}, Quantity: 2}]
    }

    let order : Order = {
      _id : "0",
      _userId : "0",
      status: "shipped",
      date: "04/26/2021 1:40pm",
      email : "dummyemail@gmail.com",
      userName : "dummyuserName",
      orderItems : [{_id : "0", product : {_id : "0", name: "Playstation5 conselling fifhfs", description : "console", price : 500}, Quantity : 6 }, {_id : "0", product : {_id : "0", name: "PS5", description : "console", price : 500}, Quantity : 6 }, {_id : "0", product : {_id : "0", name: "PS5", description : "console", price : 500}, Quantity : 6 }, {_id : "0", product : {_id : "0", name: "PS5", description : "console", price : 500}, Quantity : 6 } ]
    }

    let order1 : Order = {
      _id : "0",
      _userId : "0",
      status: "shipped",
      date: "04/26/2021 1:40pm",
      email : "dummyemail@gmail.com",
      userName : "dummyuserName",
      orderItems : [{_id : "0", product : {_id : "0", name: "Playstation5", description : "console", price : 500}, Quantity : 6 }, {_id : "0", product : {_id : "0", name: "PS5", description : "console", price : 500}, Quantity : 6 }, {_id : "0", product : {_id : "0", name: "PS5", description : "console", price : 500}, Quantity : 6 }, {_id : "0", product : {_id : "0", name: "x", description : "l", price : 2}, Quantity : 6 } ]
    }
    this.orders.push(order0);
    this.orders.push(order1);
    this.orders.push(order);
    // this.orders.push(order1);

    console.log(72 * this.orders.length);
    this.orders.push(order);
    this.orders.push(order);
    this.orders.push(order);
    this.orders.push(order1);
    this.orders.push(order);
    this.orders.push(order);
    this.orders.push(order);
    this.orders.push(order);


  }

  changeOrderStatus(status: any, order : Order){
    console.log(order.status)
    order.status = status;
    console.log(order.status);
    this.updatedOrders.push(order);
  }

  search(){
    console.log(this.searchRef.value);
    let email = this.searchRef.get("email")?.value;
    this.searchRef.reset();
  }

  updateOrders(){
    this.OrdersService.updateOrders(this.updatedOrders).subscribe((result)=> {
      console.log(result.message);
      this.orders.forEach((order: Order)=> {
        result.orders.forEach((updatedOrder : Order) => {
          if(order._id == updatedOrder._id)
            order = updatedOrder;
        });
      })
      this.updatedOrders.splice(0, this.updatedOrders.length);
    });
  }

}
