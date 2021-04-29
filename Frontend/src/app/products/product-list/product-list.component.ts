import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/login/login.service';
import { Product } from 'src/app/models/product';
import { User } from './../../models/model.user';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from './../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  prods: Product[];

  constructor(private prodService: ProductService, private router: Router,
        private cartService: CartService, private loginService: LoginService) { }

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

  addProductToCart(id):any{
    console.log("Product adding to cart : ", id);  
    let loggedInUser = this.loginService.getUserFromLocal();
    const authUser = loggedInUser['fetchedUser']
    const userId = authUser['_id'];
    const token = loggedInUser['token'];
    return this.cartService.addToCort(userId, id, token).subscribe(result =>{
      return this.goToCartList();  
    });
    
  }

  goToCartList(){
    //return this.router.navigate['/prodPortal/cartList'];
    return this.router.navigateByUrl('/prodPortal/cartList');
  }

}
