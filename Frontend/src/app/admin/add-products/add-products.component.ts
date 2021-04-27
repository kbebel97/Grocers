import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
name:any;
price:any;
quantity:any;
description:any;

  constructor() { }

  ngOnInit(): void {
  }
  addProduct(productRef: any) {
    console.log(productRef);

    this.name = "";
    this.price = "";
    this.quantity = "";
    this.description="";
  }
}
