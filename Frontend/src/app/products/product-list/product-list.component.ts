import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product';
import { ProductService } from './../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  prods: Product[];

  constructor(private prodService: ProductService) { }

  ngOnInit(): void {
    console.log("product list");
    this.loadProdList();
  }

  loadProdList(){
    console.log("product list");
    this.prodService.getProductList()
      .subscribe(data =>{
        console.log(data);
        this.prods = data['products'];
      });
  }

}
