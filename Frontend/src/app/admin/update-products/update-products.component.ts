import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-products',
  templateUrl: './update-products.component.html',
  styleUrls: ['./update-products.component.css']
})
export class UpdateProductsComponent implements OnInit {
name:any;
price:any;
quantity:any;
description:any;
  constructor() { }

  ngOnInit(): void {
  }
   updateProduct(updateRef: any) {
    console.log(updateRef);

    this.name = "";
    this.price = "";
    this.quantity = "";
    this.description= "";
  }

}
