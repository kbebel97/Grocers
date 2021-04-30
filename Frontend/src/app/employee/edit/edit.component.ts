import { Component, OnInit } from '@angular/core';
import { EditService } from './edit.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})

export class EditComponent implements OnInit {

  username : String;
  currentPassword:any;
  newPassword:any;
  newPassword2:any;
  message:any;

  constructor(public editService: EditService) { }

  ngOnInit(): void {
    this.username = JSON.parse(sessionStorage.loginObject)["userName"];
  }

  resetPassword(empRef: any) {
    //console.log(empRef);
    empRef.name = this.username;
    this.editService.updateEmployeePassword(empRef).subscribe((result:string)=> {
      this.message=result;
    });

    this.currentPassword = "";
    this.newPassword = "";
    this.newPassword2 = "";
  }

}
