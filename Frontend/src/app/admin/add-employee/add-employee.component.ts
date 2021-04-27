import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  email: any;
  userName: any;
  password: any;
  firstName: any;
  lastName: any;
  message: any;

  constructor(public adminService: AdminService) { }

  ngOnInit(): void {
  }

  addEmployee(employeeRef: any) {
    console.log(employeeRef);
    this.adminService.storeEmployeeDetailsInfo(employeeRef).subscribe(result => this.message = result,error => this.message = error);

    this.email = "";
    this.userName = "";
    this.password = "";
    this.firstName = "";
    this.lastName = "";
  }
}
