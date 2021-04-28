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
  updatedRequests : Array<userRequest> = [];
  constructor(private UnlockService : UnlockService) { }

  searchRef=new FormGroup({
    email:new FormControl(),
  });

  ngOnInit(): void {

    this.UnlockService.getUserRequests().subscribe((result)=> {
      this.userRequests = result.userRequests;
    })

    let user0 : User = {
      _id: "0",
      userName: "dummy1",
      email : "dummy1@gmail.com",
      password: "dummy1password",
      firstName: "dummy1first",
      lastName: "dummy1last",
      locked: true,
      numAttempts : 2
    }

    let user1 : User = {
      _id: "0",
      userName: "dummy1",
      email : "dummy1@gmail.com",
      password: "dummy1password",
      firstName: "dummy1first",
      lastName: "dummy1last",
      locked: true,
      numAttempts : 2
    }
  }

  unlock(request_ : userRequest, i : number){
    if(this.components.toArray()[i].checked == true){
      this.components.toArray()[i].checked = false;
      console.log(this.updatedRequests.indexOf(request_));
      if(this.updatedRequests.indexOf(request_)!=-1){
          this.updatedRequests.splice(this.updatedRequests.indexOf(request_), 1);
      }
    }
    else {
      this.components.toArray()[i].checked = true;
      if(this.updatedRequests.indexOf(request_)==-1){
        this.updatedRequests.push(request_);
      }
    };
  }

  unlockAccounts(){
    this.UnlockService.unlockUsers(this.updatedRequests).subscribe((result)=> {
      console.log(result.message);
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
      userId : "60898d37d33e6a28c8a30231",
      userName : "testuser",
      email : "testuser",
      description : "hello, this is a description",
      date: new Date()
    }

    this.UnlockService.postDummyRequest(userRequest).subscribe((result)=>  {
      console.log(result.userRequest);
    })

  }



}
