import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

  email: any;
  message: any;

  constructor(public adminService: AdminService) { }

  ngOnInit(): void {
  }

  deleteEmployee(employeeRef: any) {
    this.adminService.deleteEmployeeByEmail(employeeRef.email).subscribe((result: string) => {
      this.message = result;
    })
    this.email = "";
  }

}
