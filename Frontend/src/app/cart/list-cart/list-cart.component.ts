import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/login/login.service';
import { User } from 'src/app/models/model.user';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-list-cart',
  templateUrl: './list-cart.component.html',
  styleUrls: ['./list-cart.component.css']
})
export class ListCartComponent implements OnInit {

  cartItems : any[];
  totalPrice : number = 0;

  constructor(private cartService: CartService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.getCartList();
  }

  deleteItem(prodId){
    //deleteCartItems
    let loggedInUser = this.loginService.getUserFromLocal();
    const authUser = loggedInUser['fetchedUser']
    const userId = authUser['_id'];
    const token = loggedInUser.token;
    this.cartService.deleteCartItems(prodId, userId, token).subscribe(items =>{
      console.log("Items are deleted");
      this.getCartList();
    });
  }

  getCartList(){
    console.log("I am in list cart component");
    let loggedInUser = this.loginService.getUserFromLocal();
    const authUser = loggedInUser['fetchedUser']
    const userId = authUser['_id'];
    const token = loggedInUser.token;
    let itemFlag = false;
    this.cartService.getCartItemsForUser(userId, token).subscribe(userCartData =>{      
      this.cartItems = userCartData;
      for(let cartItem in this.cartItems) { 
        let item = this.cartItems[cartItem];
        this.totalPrice += item['productId'].price * item['quantity']
      }
      itemFlag = true;
      console.log("cart items price ", this.totalPrice);
      console.log("cart items ", this.cartItems);
    });
    if(!itemFlag){
      this.totalPrice = 0;
    }
  }

}
