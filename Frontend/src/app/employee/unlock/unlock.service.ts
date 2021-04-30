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

  // unlockUsers(updatedRequests: Array<userRequest>, userIds: Array<string>){
  //   let userIDs_requestIDS = {
  //     updatedRequests: updatedRequests,
  //     userIds: userIds
  //   };
  //   return this.http.post<{message: String, fetchedRequests: any}>('http://localhost:9090/userRequest/unlockAccounts', userIDs_requestIDS);
  // }

  getNewest(){
    return this.http.get<{message: String, userRequests: any}>("http://localhost:9090/userRequest/getLatestRequests");

  }

  getOldest(){
    return this.http.get<{message: String, userRequests: any}>("http://localhost:9090/userRequest/getOldestRequests");
  }

  search(email : string){
    return this.http.get<{message: String, userRequests: any}>("http://localhost:9090/userRequest/search/" + email);
  }
  unlockUsers(userIds_userRequests){
    return this.http.post<{message: String, fetchedRequests: any}>('http://localhost:9090/userRequest/unlockAccounts', userIds_userRequests);
  }
}
