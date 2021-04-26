import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

  email: any;
  constructor() { }

  ngOnInit(): void {
  }

  deleteEmployee(employeeRef: any) {
    console.log(employeeRef);

    this.email = "";
  }

}
