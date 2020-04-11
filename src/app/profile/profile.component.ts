import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Agent } from '../shared/agent.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserAuthService } from '../auth/user.auth.service';
import { User } from '../shared/users.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userForm : FormGroup;
  loading = false;
  userInformation : User;
  message : string;
  constructor(private userAuthService : UserAuthService) { }

  ngOnInit(): void {
    this.init();
    this.userAuthService.getUserDataStatus()
      .subscribe(responseData => {
        this.userInformation = responseData;
      });
  }

  private init() {
    this.userForm = new FormGroup({
      password : new FormControl(null, [Validators.required]),
      newpassword : new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirmpassword : new FormControl(null, [Validators.required, Validators.minLength(8)])
    })
  }

  onSubmit(){
    if(!this.userForm.valid) {
      return;
    }
    if(this.userForm.value.confirmpassword !== this.userForm.value.newpassword) {
      this.message = "No match";
      return;
    }
    this.loading = true;
    this.message = null;
    const password = this.userForm.value.password;
    const newpassword = this.userForm.value.newpassword;
    const confirmpassword = this.userForm.value.confirmpassword;
    this.userAuthService.changeProfile(password, newpassword, confirmpassword)
    .subscribe(responseData => {
      this.userForm.setValue({
        'password' : null,
        'newpassword' : null,
        'confirmpassword' : null
      });
      this.loading = false;
    }, error =>  {
      this.loading = false;
    });
  }
}
