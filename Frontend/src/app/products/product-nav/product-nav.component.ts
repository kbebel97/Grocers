import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-nav',
  templateUrl: './product-nav.component.html',
  styleUrls: ['./product-nav.component.css']
})
export class ProductNavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.goToAddProductComponent();
  }


  goToAddProductComponent() {
    console.log("In add product component");
    this.router.navigate(['/prodPortal/prodAdd']);
  }

  goToListProductsComponent() {
    console.log("In product list component");//
    this.router.navigate(['/prodPortal/prodList']);
  }

}
