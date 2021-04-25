import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Order } from 'src/app/models/Order.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders : Array<Order> = [];

  @ViewChild('tbody', {read: ElementRef, static: false}) tbody: ElementRef;


  constructor() { }



  searchRef=new FormGroup({
    email:new FormControl(),
  });


  ngOnInit(): void {
    let order0 : Order = {
      _id : "0",
      _userId : "0",
      email : "dummyemail@gmail.com",
      userName : "dummyuserName",
      orderItems : [{_id : "0", product : {_id : "0", name: "Playstation5", description : "console", price : 500}, Quantity: 2}]
    }

    let order : Order = {
      _id : "0",
      _userId : "0",
      email : "dummyemail@gmail.com",
      userName : "dummyuserName",
      orderItems : [{_id : "0", product : {_id : "0", name: "Playstation5", description : "console", price : 500}, Quantity : 6 }, {_id : "0", product : {_id : "0", name: "PS5", description : "console", price : 500}, Quantity : 6 }, {_id : "0", product : {_id : "0", name: "PS5", description : "console", price : 500}, Quantity : 6 }, {_id : "0", product : {_id : "0", name: "PS5", description : "console", price : 500}, Quantity : 6 } ]
    }

    let order1 : Order = {
      _id : "0",
      _userId : "0",
      email : "dummyemail@gmail.com",
      userName : "dummyuserName",
      orderItems : [{_id : "0", product : {_id : "0", name: "Playstation5", description : "console", price : 500}, Quantity : 6 }, {_id : "0", product : {_id : "0", name: "PS5", description : "console", price : 500}, Quantity : 6 }, {_id : "0", product : {_id : "0", name: "PS5", description : "console", price : 500}, Quantity : 6 }, {_id : "0", product : {_id : "0", name: "x", description : "l", price : 2}, Quantity : 6 } ]
    }
    // this.orders.push(order0);
    // this.orders.push(order1);
    this.orders.push(order);
    // this.orders.push(order1);

    // console.log(72 * this.orders.length);
    // this.orders.push(order);
    // this.orders.push(order);
    // this.orders.push(order);
    // this.orders.push(order1);
    // this.orders.push(order);
    // this.orders.push(order);
    // this.orders.push(order);
    // this.orders.push(order);


  }

  isDropDown(i){
    // console.log(document.getElementById('tbody').style.height);
  }



  search(){
    console.log(this.searchRef.value);
    let email = this.searchRef.get("email")?.value;
    this.searchRef.reset();
  }

}
