import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/Product.model';

@Injectable()
export class ProductService {

  private baseUrl = 'http://localhost:9090/product';

  constructor(private http: HttpClient) { }

  createProduct(product: Product): Observable<Product>{
    return this.http.post<Product>(`${this.baseUrl}/save`, product);
  }

  getProductList(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products`)
  }

  getProducts() {
    return this.http.get<{message: string, products: any}>("http://localhost:9090/product/products");
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
