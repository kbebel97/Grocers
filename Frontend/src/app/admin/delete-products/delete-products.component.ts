import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-products',
  templateUrl: './delete-products.component.html',
  styleUrls: ['./delete-products.component.css']
})
export class DeleteProductsComponent implements OnInit {
name:any;
  constructor() { }

  ngOnInit(): void {
  }
  deleteProduct(deleteRef: any) {
    console.log(deleteRef);
   this.name = "";
  }
}
