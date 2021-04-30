import { AfterViewChecked, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Product } from 'src/app/models/Product.model';
import { ProductService } from './product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductService]
})
export class ProductsComponent implements OnInit , AfterViewChecked{

  @ViewChild('side_bar', {static: false}) side_bar: ElementRef;

  loading: boolean = false;

  products : Array<Product> = [];

  constructor(private productService: ProductService, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.loading = true;
    this.productService.getProducts().subscribe(result =>{
      this.products = result.products;
      console.log(this.products);
      this.loading = false;
    });
  }

  ngAfterViewChecked(){
    this.setSideBarHeight();
  }

  setSideBarHeight(){
    var height_ = 297 * this.products.length;
    this.renderer.setStyle(this.side_bar.nativeElement, 'height', height_ + "px");
  }

  myRecentPurchases(){

  }

  recentPurchases(){

  }

  under25(){

  }

  under50(){

  }

  under100(){

  }



}
