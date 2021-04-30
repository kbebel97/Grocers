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

  userIds : Array<string>= [];
  userRequests : Array<userRequest> = [];
  // updatedRequests : Array<userRequest> = [];
  updatedRequests : Array<string> = [];
  loading: boolean  = false;
  updatedIds: Array<string> = [];
  constructor(private UnlockService : UnlockService) { }

  searchRef=new FormGroup({
    email:new FormControl(),
  });

  ngOnInit(): void {
    this.loading = true;
    this.UnlockService.getUserRequests().subscribe((result)=> {
      this.userRequests = result.userRequests;
      this.loading = false;
    })
  }

  unlock(request_ : userRequest, i : number){
    if(this.components.toArray()[i].checked == true){
      this.components.toArray()[i].checked = false;
      console.log(this.updatedRequests.indexOf(request_));
      // if(this.updatedRequests.indexOf(request_)!=-1){
      //     this.userIds.splice(this.userIds.indexOf(request_.userId), 1)
      //     this.updatedRequests.splice(this.updatedRequests.indexOf(request_), 1);
      // console.log(this.updatedRequests.indexOf(request_._id));
      if(this.updatedRequests.indexOf(request_._id)!=-1){
          this.updatedRequests.splice(this.updatedRequests.indexOf(request_._id), 1);
          this.updatedIds.splice(this.updatedIds.indexOf(request_.userId), 1);
      }
    }
    else {
      this.components.toArray()[i].checked = true;
      // if(this.updatedRequests.indexOf(request_)==-1){
      //   this.userIds.push(request_.userId);
      //   this.updatedRequests.push(request_);
      if(this.updatedRequests.indexOf(request_._id)==-1){
        this.updatedRequests.push(request_._id);
        this.updatedIds.push(request_.userId);
      }
    };
  }

  unlockAccounts(){
    console.log(this.updatedRequests);
    console.log(this.userIds);
    this.loading = true;
    // this.UnlockService.unlockUsers(this.updatedRequests, this.userIds).subscribe((result)=> {
    //   this.userRequests = result.fetchedRequests;
    //   console.log(result.message);
    //   this.loading = false;
    let userIds_userRequests = {
      updatedIds : this.updatedIds,
      userRequests : this.userRequests
    }
    this.UnlockService.unlockUsers(userIds_userRequests).subscribe((result)=> {
      console.log(result.message);
      this.userRequests = result.fetchedRequests;
    })
    this.updatedRequests.splice(0, this.updatedRequests.length);
    this.userIds.splice(0, this.userIds.length);
  }

  search(){
    console.log(this.searchRef.value);
    let email = this.searchRef.get("email")?.value;
    if(email!= null && email != ''){
      this.loading = true;
      this.UnlockService.search(email).subscribe((result)=> {
        this.userRequests = result.userRequests;
        this.loading = false;
        this.updatedRequests.splice(0, this.updatedRequests.length);
        this.userIds.splice(0,this.userIds.length);
      })
    }
    this.searchRef.reset();
  }

  check(){
    console.log(this.updatedRequests);
  }

  getNewest(){
    this.updatedRequests.splice(0, this.updatedRequests.length);
    this.userIds.splice(0,this.userIds.length);
    this.loading = true;
    this.UnlockService.getNewest().subscribe((result)=> {
      console.log(result.message);
      this.userRequests = result.userRequests;
      this.loading = false;
    })
  }

  getOldest(){
    this.updatedRequests.splice(0, this.updatedRequests.length);
    this.userIds.splice(0,this.userIds.length);
    this.loading = true;
    this.UnlockService.getOldest().subscribe((result)=> {
      console.log(result.message);
      this.userRequests = result.userRequests;
      this.loading = false;
    })
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
