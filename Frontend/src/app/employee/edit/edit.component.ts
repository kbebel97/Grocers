import { Component, OnInit } from '@angular/core';
import { EditService } from './edit.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  name:any;
  currentPassword:any;
  newPassword:any;
  newPassword2:any;
  message:any;

  constructor(public editService: EditService) { }

  ngOnInit(): void {
  }

  resetPassword(empRef: any) {
    console.log(empRef);
    this.editService.updateEmployeePassword(empRef).subscribe((result:string)=> {
      this.message=result;
    });
    this.name = "";
    this.currentPassword = "";
    this.newPassword = "";
    this.newPassword2 = "";
    // Get current password id:currPass
    // Get new password id:newPass
    // Get confirmation id:confNewPass

    // Check employee password in database
    //  If password is correct
    //    Confirm that new password matches confirmation password AND new password is not old password
    //    If confirmed
    //      Change employee password in database
    //      Alert user that password has been changed
    //      alert("Password has been sucessfully changed");
    //  If password is incorrect
    //    Alert user that password was incorrect
    //    alert("Password is incorrect");
  }

}
