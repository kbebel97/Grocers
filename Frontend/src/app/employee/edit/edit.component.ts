import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  resetPassword() {
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
