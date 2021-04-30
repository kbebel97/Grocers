import { Component, OnInit } from '@angular/core';
import {RaiseTicketService} from './raise-ticket.service'

@Component({
  selector: 'app-raise-ticket',
  templateUrl: './raise-ticket.component.html',
  styleUrls: ['./raise-ticket.component.css']
})
export class RaiseTicketComponent implements OnInit {
  sessionObj: any;
  description:any;
  message: any;
  

  constructor(public raiseTicketService:RaiseTicketService ) { }
  
  

  ngOnInit(): void {
  this.sessionObj = JSON.parse(sessionStorage.loginObject);
    console.log(this.sessionObj.username);
    
  }
  raiseTicket(ticketRef: any) {
  //console.log("raise ticket")
    let ticket = { userId: this.sessionObj._id, userName: this.sessionObj.userName, email: this.sessionObj.email,description:this.description, date: new Date()}
   console.log(ticket)
    this.raiseTicketService.logUserRequest(ticket).subscribe((result) => {
    this.message = result.message;
    })

    this.description="";
  }
}
