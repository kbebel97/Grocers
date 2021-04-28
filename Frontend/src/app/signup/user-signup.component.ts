import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from 'src/app/models/address.model';
import { User } from '../models/User.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

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


  registerUser(signupRef){
    let user: User={
      _id:"",
      userName: signupRef.userName,
      email: signupRef.email,
      password: signupRef.password,
      firstName: signupRef.firstName,
      lastName: signupRef.lastName,
      paymentMethods:0,
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

    this.userService.storeUserDetailsInfo(user).
    subscribe(result => this.message = result.message,error => this.message = error);
  }

}
