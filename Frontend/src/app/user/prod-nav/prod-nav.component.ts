import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './prod-nav.component.html',
  styleUrls: ['./prod-nav.component.css']
})
export class ProductNavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.goToAddProductComponent();
  }

  goToAddProductComponent() {
    this.router.navigate(['/prodPortal/products']);
  }

  goToListProductsComponent() {
    this.router.navigate(['/prodPortal/cart']);
  }

}
