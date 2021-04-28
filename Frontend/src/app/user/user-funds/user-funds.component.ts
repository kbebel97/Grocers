import { Component, OnInit } from '@angular/core';
import { UserFundService } from './user-fund.service';

@Component({
  selector: 'app-user-funds',
  templateUrl: './user-funds.component.html',
  styleUrls: ['./user-funds.component.css']
})
export class UserFundsComponent implements OnInit {

  currentFunds: number = 0;
  updatedFunds: any;
  message: any;
  sessionObj: any;
  constructor(public userFundService: UserFundService) { }

  ngOnInit(): void {
    this.sessionObj = JSON.parse(sessionStorage.loginObject);
    console.log(this.sessionObj);
    this.currentFunds = this.sessionObj.paymentMethods;
  }

  updateFunds(fundsRef: any) {
    fundsRef.userId = this.sessionObj._id;
    this.userFundService.updateUserFunds(fundsRef).subscribe((result: string) => {
      this.message = result;
    })
    this.updatedFunds = "";
  }

}
