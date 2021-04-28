import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  product: Product = new Product();

  constructor(private prodService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  save(){
    this.prodService.createProduct(this.product)
          .subscribe(prod => {
            console.log(prod);
            this.gotoProdList();
          },
          error => console.log(error)
          );
  }

  onSubmit(){
    this.save();
  }

  gotoProdList(){
    this.router.navigate(['prodPortal/prodList']);
  }

}
