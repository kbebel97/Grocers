import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private baseUrl = 'http://localhost:9090'; 

  constructor(private http: HttpClient) { }

  addToCort(userId, productId, token): Observable<User>{ //userId, id, token
    const options = this.getOptions(token);
    return this.http.post<User>(`${this.baseUrl}/user/${userId}/addToCart`, {productId: productId}, options);
  }


  getCartItemsForUser(userId, token): Observable<any>{ //userId, id, token
    const options = this.getOptions(token);
    return this.http.get<any>(`${this.baseUrl}/user/${userId}/getCartItems`, options);
  }

  deleteCartItems(productId, userId, token): Observable<any>{ //userId, id, token
    const options = this.getOptions(token);
    return this.http.post<any>(`${this.baseUrl}/user/${userId}/cartDeleteProduct`,{productId: productId}, options);
  }

  getOptions(token){

    let headerObj = new HttpHeaders({
      'Authorization': 'Bearer ' + token
    });   

    const httpOptions = {
      headers: headerObj
    };
    return httpOptions;
  }
}
