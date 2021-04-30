import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RaiseTicketService {

  constructor(public http: HttpClient) { }

  
   logUserRequest(ticket: any): any {
    return this.http.post<{message:string,userRequest:any}>("http://localhost:9090/userRequest/logUserRequest", ticket)
  }
}


