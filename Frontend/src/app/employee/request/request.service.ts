import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(public http: HttpClient) { }

  submitRequest(reqRef:any): Observable<any>{
    return this.http.post("http://localhost:9090/employee/submitRequest",reqRef,{responseType:'text'})
  }

  retrieveAllRequests(){
    return this.http.get<{message: string, requests: any}>("http://localhost:9090/employee/retrieveRequests");
  }
}
