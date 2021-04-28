import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { Admin } from 'src/app/models/model.admin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, public loginService: LoginService) { }

  userName: any;
  password: any;
  adminDetails?: any;
  userDetails?: any;
  employeeDetails?: any;
  message: String;
  loginSuccess: Boolean = false;

  ngOnInit(): void {
  }

  checkUser(loginRef: any) {

    let userName = loginRef.userName;
    let password = loginRef.password;
    let role = loginRef.role;

    if (role == "User") {

      this.loginService.login(this.userName, this.password).subscribe(user =>{
        this.loginService.saveUserToLocal(user);
        this.router.navigate(['/prodPortal']);
      });

      /*this.loginService.retrieveAllUserDetails().subscribe(result => {
        this.userDetails = result;
        console.log(this.userDetails);
        let keepChecking = true;
        this.userDetails.forEach(data => {
          if (keepChecking) {
            if (userName == data.username && password == data.password) {
              this.loginSuccess = true;
              keepChecking = false;
              console.log(data);
            } else {
              this.loginSuccess = false;
            }
          }
        })

        if (this.loginSuccess) {
          //Give the routing path of user
          this.router.navigate(['/prodPortal']);
          console.log("Welcome to user portal");
        } else {
          this.message = "Please enter the correct details";
        }

      });*/

    } else if (role == "Admin") {

      this.loginService.retrieveAllAdminDetails().subscribe(result => {
        this.adminDetails = result;
        console.log(this.adminDetails);
        let keepChecking = true;
        this.adminDetails.forEach(data => {
          if (keepChecking) {
            if (userName == data.username && password == data.password) {
              this.loginSuccess = true;
              keepChecking = false;
              console.log(data);
            } else {
              this.loginSuccess = false;
            }
          }
        })

        if (this.loginSuccess) {
          this.router.navigate(['./adminPortal/addProducts']);
        } else {
          this.message = "Please enter the correct details";
        }

      });

    } else if (role == "Employee") {

      this.loginService.retrieveAllEmployeeDetails().subscribe(result => {
        this.employeeDetails = result;
        console.log(this.employeeDetails);
        let keepChecking = true;
        this.employeeDetails.forEach(data => {
          if (keepChecking) {
            if (userName == data.userName && password == data.password) {
              this.loginSuccess = true;
              keepChecking = false;
            } else {
              this.loginSuccess = false;
            }
          }
        })

        if (this.loginSuccess) {
          this.router.navigate(['./employeePortal/orders']);
          console.log("Welcome to employee portal");
        } else {
          this.message = "Please enter the correct details";
        }

      });

    } else {
      this.message = "Please select appropriate role";
    }

    this.userName = "";
    this.password = "";
  }


}
