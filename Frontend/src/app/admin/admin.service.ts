import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(public http: HttpClient) { }

  storeEmployeeDetailsInfo(employeeRef: any): Observable<any> {
     return this.http.post("http://localhost:9090/admin/addEmployeeDetails", employeeRef, { responseType: "text" })
  }

  deleteEmployeeByEmail(email: any): Observable<any> {
    return this.http.delete("http://localhost:9090/admin/deleteEmployeeByEmail/" + email, { responseType: 'text' });
  }

  storeProductDetailsInfo(productRef: any): Observable<any> {
     return this.http.post("http://localhost:9090/admin/addProductDetails", productRef, { responseType: "text" })
  }

  deleteProductByName(name: any): Observable<any> {
    return this.http.delete("http://localhost:9090/admin/deleteProductByName/" + name, { responseType: 'text' });
  }

   updateProductPrice(productRef:any):any{
    return this.http.put("http://localhost:9090/admin/updateProductPrice",productRef,{responseType:'text'})
  }
}

