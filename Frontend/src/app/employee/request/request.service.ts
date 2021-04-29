import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(public http: HttpClient) { }

  submitRequest(reqRef:any): Observable<any>{
    return this.http.post<{message: string, requests: any}>("http://localhost:9090/employee/submitRequest",reqRef);
  }

  retrieveAllRequests(username:any){
    return this.http.get<{message: string, requests: any}>("http://localhost:9090/employee/retrieveRequests/" + username);
  }
}
