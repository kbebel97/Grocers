import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

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
message:any;

  constructor(public adminService: AdminService) { }

  ngOnInit(): void {
  }
   updateProduct(updateRef: any) {
   console.log(updateRef);
    this.adminService.updateProductPrice(updateRef).subscribe((result:string)=> {
      this.message=result;
     })
    this.name = "";
    this.price = "";
    this.quantity = "";
    this.description= "";
  }

}
