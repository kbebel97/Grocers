import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  userName: any;
  password: any;

  ngOnInit(): void {
  }

  checkUser(loginRef: any) {

    let userName = loginRef.userName;
    let password = loginRef.password;
    let role = loginRef.role;

    if (role == "User") {
      if (userName == "user" && password == "user123") {
        console.log("Entering the User portal")
        //Call User landing page like admin
      } else {
        console.log("Please enter the correct details")
      }
    } else if (role == "Admin") {
      if (userName == "admin" && password == "admin123") {
        console.log("Entering the Admin portal")
        this.router.navigate(['./adminPortal']);
      } else {
        console.log("Please enter the correct details")
      }
    } else if (role == "Employee") {
      if (userName == "employee" && password == "employee123") {
        //Call User employee page like admin
        console.log("Entering the Employee portal")
        this.router.navigate(['./employeePortal/orders']);
      } else {
        console.log("Please enter the correct details")
      }
    } else {
      console.log("Please select appropriate role")
    }

    this.userName = "";
    this.password = "";
  }

}
