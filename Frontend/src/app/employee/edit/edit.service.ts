import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EditService {

  constructor(public http: HttpClient) { }

  updateEmployeePassword(empRef:any):any{
    return this.http.put("http://localhost:9090/employee/updateEmployeePassword",empRef,{responseType:'text'})
  }
}
