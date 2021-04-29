import { Injectable } from '@angular/core';
import { userRequest } from 'src/app/models/userRequest.model';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class UnlockService {

  constructor(private http: HttpClient){}

  postDummyRequest(request : userRequest){
    return this.http.post<{message: string, userRequest : userRequest}>("http://localhost:9090/userRequest/postRequest", request)
  }

  getUserRequests(){
    return this.http.get<{message: String, userRequests: any}>("http://localhost:9090/userRequest/getRequests");
  }

  unlockUsers(updatedRequests: Array<userRequest>){
    return this.http.post<{message: String}>('http://localhost:9090/userRequest/unlockAccounts', updatedRequests);
  }
}
