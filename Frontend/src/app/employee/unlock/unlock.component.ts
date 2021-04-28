import { Component, ElementRef, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatCheckbox } from '@angular/material/checkbox';
import { User } from 'src/app/models/User.model';

@Component({
  selector: 'app-unlock',
  templateUrl: './unlock.component.html',
  styleUrls: ['./unlock.component.css']
})
export class UnlockComponent implements OnInit {

  @ViewChildren('checkbox') components: QueryList<MatCheckbox>;
  @ViewChild('tbody',  {read: ElementRef, static:false}) tbody : ElementRef;

  lockedAccounts : Array<User> = [];
  constructor(private renderer: Renderer2) { }

  searchRef=new FormGroup({
    email:new FormControl(),
  });

  ngOnInit(): void {

  //  let user0 : User = {
   //   _id: "0",
   //   userName: "dummy1",
    //  email : "dummy1@gmail.com",
   //   password: "dummy1password",
   //   firstName: "dummy1first",
    //  lastName: "dummy1last",
    //  locked: true,
    //  numAttempts : 2
   // }

    //let user1 : User = {
     // _id: "0",
      //userName: "dummy1",
    //  email : "dummy1@gmail.com",
    //  password: "dummy1password",
    //  firstName: "dummy1first",
     // lastName: "dummy1last",
     // locked: true,
     // numAttempts : 2
    //}

 //   this.lockedAccounts.push(user0);
  //  this.lockedAccounts.push(user0);
  //  this.lockedAccounts.push(user0);
  //  this.lockedAccounts.push(user0);
  //  this.lockedAccounts.push(user0);
  //  this.lockedAccounts.push(user0);
  //  this.lockedAccounts.push(user1);
  //  this.lockedAccounts.push(user1);
  //  this.lockedAccounts.push(user0);
   // this.lockedAccounts.push(user0);
  //  this.lockedAccounts.push(user0);
  //  this.lockedAccounts.push(user1);
  //  this.lockedAccounts.push(user0);
  //  this.lockedAccounts.push(user0);
  //  this.lockedAccounts.push(user0);
  //  this.lockedAccounts.push(user0);
   // this.lockedAccounts.push(user0);
  //  this.lockedAccounts.push(user0);
  //  this.lockedAccounts.push(user0);
   // this.lockedAccounts.push(user0);
  }

  unlock(i : number){
    if(this.components.toArray()[i].checked == true)
      this.components.toArray()[i].checked = false;
    else this.components.toArray()[i].checked = true;
  }

  search(){
    console.log(this.searchRef.value);
    let email = this.searchRef.get("email")?.value;
    this.searchRef.reset();
  }



}
