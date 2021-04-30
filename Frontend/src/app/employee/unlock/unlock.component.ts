import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatCheckbox } from '@angular/material/checkbox';
import { User } from 'src/app/models/User.model';
import { userRequest } from 'src/app/models/userRequest.model';
import { UnlockService } from './unlock.service';

@Component({
  selector: 'app-unlock',
  templateUrl: './unlock.component.html',
  styleUrls: ['./unlock.component.css'],
  providers: [UnlockService]
})
export class UnlockComponent implements OnInit {

  @ViewChildren('checkbox') components: QueryList<MatCheckbox>;

  userRequests : Array<userRequest> = [];
  updatedRequests : Array<string> = [];
  updatedIds: Array<string> = [];
  constructor(private UnlockService : UnlockService) { }

  searchRef=new FormGroup({
    email:new FormControl(),
  });

  ngOnInit(): void {

    this.UnlockService.getUserRequests().subscribe((result)=> {
      this.userRequests = result.userRequests;
    })
  }

  unlock(request_ : userRequest, i : number){
    if(this.components.toArray()[i].checked == true){
      this.components.toArray()[i].checked = false;
      console.log(this.updatedRequests.indexOf(request_._id));
      if(this.updatedRequests.indexOf(request_._id)!=-1){
          this.updatedRequests.splice(this.updatedRequests.indexOf(request_._id), 1);
          this.updatedIds.splice(this.updatedIds.indexOf(request_.userId), 1);
      }
    }
    else {
      this.components.toArray()[i].checked = true;
      if(this.updatedRequests.indexOf(request_._id)==-1){
        this.updatedRequests.push(request_._id);
        this.updatedIds.push(request_.userId);
      }
    };
  }

  unlockAccounts(){
    let userIds_userRequests = {
      updatedIds : this.updatedIds,
      userRequests : this.userRequests
    }
    this.UnlockService.unlockUsers(userIds_userRequests).subscribe((result)=> {
      console.log(result.message);
      this.userRequests = result.fetchedRequests;
    })
  }

  search(){
    console.log(this.searchRef.value);
    let email = this.searchRef.get("email")?.value;
    this.searchRef.reset();
  }

  check(){
    console.log(this.updatedRequests);
  }

  postDummy(){
    let userRequest : userRequest = {
      _id: "0",
      userId : "608b648027230a4828b46b40",
      userName : "testuser",
      email : "testuser",
      description : "hello, this is a description",
      date: new Date()
    }

    let userRequest2 : userRequest = {
      _id: "01",
      userId : "608b66f8ca54a05390fcaef6",
      userName : "testuser2",
      email : "testuser2",
      description : "hello, this is a description2",
      date: new Date()
    }

    this.UnlockService.postDummyRequest(userRequest).subscribe((result)=>  {
      console.log(result.userRequest);
    })

  }



}
