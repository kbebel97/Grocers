import { Component, OnInit } from '@angular/core';
import { UserEditService } from './user-edit.service';
import { User } from 'src/app/models/User.model';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  firstName: any;
  lastName: any;
  email: any;
  password: any;
  dateOfBirth: any;
  phoneNumber: any;
  address: any;
  message: any;
  street: any;
  apt: any;
  city: any;
  state: any;
  zipcode: any;
  sessionObj: any;
  constructor(public userEditService: UserEditService) { }

  ngOnInit(): void {
    this.sessionObj = JSON.parse(sessionStorage.loginObject);
    this.firstName = this.sessionObj.firstName;
    this.lastName = this.sessionObj.lastName;
    this.email = this.sessionObj.email;
    this.password = this.sessionObj.password;
    this.phoneNumber = this.sessionObj.phoneNumber;
    this.address = this.sessionObj.shippingAddresses;
    this.street = this.address[0].street;
    this.apt = this.address[0].Apt;
    this.city = this.address[0].city;
    this.state = this.address[0].state;
    this.zipcode = this.address[0].zipcode;
  }

  updateDetails(updateRef: any) {
    let userEdit: User = {
      _id: this.sessionObj._id,
      userName: this.sessionObj.userName,
      email: updateRef.email,
      password: updateRef.password,
      firstName: updateRef.firstName,
      lastName: updateRef.lastName,
      paymentMethods: this.sessionObj.paymentMethods,
      numAttempts: this.sessionObj.numAttempts,
      date: this.sessionObj.dateOfBirth,
      phoneNumber: updateRef.phoneNumber,
      addresses: [{
        street: updateRef.street,
        Apt: updateRef.apt,
        city: updateRef.city,
        state: updateRef.state,
        zipcode: updateRef.zipcode
      }]
    }
    this.userEditService.editUserDetails(userEdit).subscribe((result: string) => {
      this.message = result;
    })
    console.log(userEdit);
  }

}
