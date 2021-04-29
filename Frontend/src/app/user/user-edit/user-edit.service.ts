import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserEditService {

  constructor(public http: HttpClient) { }

  editUserDetails(updateRef: any): any {
    return this.http.put("http://localhost:9090/user/editUserDetails", updateRef, { responseType: 'text' })
  }

}
