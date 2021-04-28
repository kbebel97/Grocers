import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { User } from 'src/app/models/model.user';
import {UserService} from '../user.service';
import {User} from 'src/app/models/User.model'
import { Address } from 'src/app/models/address.model';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  signupRef: any;

  constructor(private router: Router, public userService: UserService) { }
  firstName: any;
  lastName: any;
  userName: any;
  email:any;
  password: any;
  dateOfBirth:any;
  phoneNumber:any;
  address:any;
  message:any;
  street:any;
  apt: any;
  city: any;
  state: any;
  zipcode:any;
  
  ngOnInit(): void {
  }

  registerUser(signupRef)
  {

    console.log(signupRef);
    let address: Address

    
    let user: User={
      _id:"",
      userName: signupRef.userName,
      email: signupRef.email,
      password: signupRef.password,
      firstName: signupRef.firstName,
      lastName: signupRef.lastName,
      locked: false,
      numAttempts: 0,
      date: signupRef.dateOfBirth,
      phoneNumber: signupRef.phoneNumber,
      addresses: [{
        street: signupRef.street,
        Apt: signupRef.apt,
        city: signupRef.city,
        state: signupRef.state,
        zipcode: signupRef.zipcode}] 

      
    }
    //console.log(address)
    this.userService.storeUserDetailsInfo(user).
    subscribe(result => this.message = result.message,error => this.message = error);
  }

}
