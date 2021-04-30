import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
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
  lockedUser: Boolean = false;
  numberOfAttempts: number;

  ngOnInit(): void {
    sessionStorage.loginObject = "";
    this.numberOfAttempts = 0;
  }

  checkUser(loginRef: any) {

    let userName = loginRef.userName;
    let password = loginRef.password;
    let role = loginRef.role;

    if (role == "User") {

//       this.loginService.login(this.userName, this.password).subscribe(user =>{
//         this.loginService.saveUserToLocal(user);
//         this.router.navigate(['/prodPortal']);
//       });

      this.loginService.retrieveAllUserDetails().subscribe(result => {
        this.userDetails = result;
        console.log(this.userDetails);
        let keepChecking = true;
        this.userDetails.forEach(data => {
          if (keepChecking) {
            if (userName == data.userName && password == data.password && data.numAttempts < 3) {
              this.loginSuccess = true;
              sessionStorage.loginObject = JSON.stringify(data);
              keepChecking = false;
            } else if (userName == data.userName && data.numAttempts == 3) {
              this.lockedUser = true;
              sessionStorage.loginObject = JSON.stringify(data);
              keepChecking = false;
            } else if (userName == data.userName && password != data.password) {
              this.numberOfAttempts = this.numberOfAttempts + 1;
              console.log(this.numberOfAttempts);
              if (this.numberOfAttempts == 3) {
                console.log("User account is locked");
                sessionStorage.loginObject = JSON.stringify(data);
                loginRef.numAttempts = this.numberOfAttempts;
                this.loginService.lockUserAccount(loginRef).subscribe((result: string) => {
                  console.log(result);
                  this.router.navigate(['./logUserTicket']);
                })
              }
            } else {
              this.loginSuccess = false;
            }
          }
        })

        if (this.loginSuccess) {
          //Give the routing path of user
          this.router.navigate(['/prodPortal/products']);
          console.log("Welcome to user portal");
        } else if (this.lockedUser) {
          console.log("The user is locked")
          this.router.navigate(['/logUserTicket']);
        } else {
          this.message = "Please enter the correct details";
        }

      });

    } else if (role == "Admin") {

      this.loginService.retrieveAllAdminDetails().subscribe(result => {
        this.adminDetails = result;
   //     console.log(this.adminDetails);
        let keepChecking = true;
        this.adminDetails.forEach(data => {
          if (keepChecking) {
            if (userName == data.username && password == data.password) {
              this.loginSuccess = true;
              sessionStorage.loginObject = JSON.stringify(data);
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
   //     console.log(this.employeeDetails);
        let keepChecking = true;
        this.employeeDetails.forEach(data => {
          if (keepChecking) {
            if (userName == data.userName && password == data.password) {
              this.loginSuccess = true;
              sessionStorage.loginObject = JSON.stringify(data);
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
