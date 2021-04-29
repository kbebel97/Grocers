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

  username : String;
  requests : Array<EmployeeRequests> = [];
  loading : boolean = false;
  itemQuantity = 0; //placeholder because database has no quantity

  productID:any;
  description:any;
  message:any;

  constructor(public requestService: RequestService) { }

  ngOnInit(): void {
    this.loading = true;
    this.username = JSON.parse(sessionStorage.loginObject)["userName"];
    this.requestService.retrieveAllRequests(this.username).subscribe((result) => {
      //console.log(result.requests)
      this.requests = result.requests;
      this.loading = false;
    })
  }

  submitRequest(reqRef:any) {
    //console.log(reqRef);
    reqRef.name = this.username;
    this.requestService.submitRequest(reqRef).subscribe(result => {
      this.message = result.message;
      this.requests = result.requests;
    },
      error => {
        this.message = error;
    });

    this.productID = "";
    this.description = "";
  }

}
