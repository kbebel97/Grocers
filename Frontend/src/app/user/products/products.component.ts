import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/Product.model';
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products : Array<Product> = [];

  constructor(private prodService: ProductService) { }

  ngOnInit(): void {
    this.prodService.getProductList()
    .subscribe(data =>{
      console.log(data);
      this.products = data['products'];
    });
  }

  addProductToCart(id){

  }

}
