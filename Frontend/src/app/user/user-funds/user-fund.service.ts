import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserFundService {

  constructor(public http: HttpClient) { }

  updateUserFunds(fundsRef: any): any {
    return this.http.put("http://localhost:9090/user/updateUserFunds", fundsRef, { responseType: 'text' })
  }
}
