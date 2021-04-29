import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeRequests } from 'src/app/models/EmployeeRequests.model';
import { RequestService } from './request.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css'],
  providers: [RequestService]
})
export class RequestComponent implements OnInit {

  username : String = JSON.parse(sessionStorage.loginObject)["userName"];
  requests : Array<EmployeeRequests> = [];
  loading : boolean = false;
  itemQuantity = 0; //placeholder because database has no quantity

  name:any;
  productID:any;
  quantity:any;
  description:any;
  message:any;

  constructor(public requestService: RequestService) { }

  ngOnInit(): void {
    this.loading = true;
    this.requestService.retrieveAllRequests().subscribe((result) => {
      console.log(result.requests)
      this.requests = result.requests;
      this.loading = false;
    })
  }

  submitRequest(reqRef:any) {
    console.log(reqRef);
    this.requestService.submitRequest(reqRef).subscribe(result => this.message = result,error => this.message = error);
    this.name = "";
    this.productID = "";
    this.quantity = "";
    this.description = "";
  }

}
