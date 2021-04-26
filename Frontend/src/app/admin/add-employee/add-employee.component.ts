import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  addEmployee(employeeRef: any) {
    console.log(employeeRef);

    this.email = "";
    this.userName = "";
    this.password = "";
    this.firstName = "";
    this.lastName = "";
  }
}
