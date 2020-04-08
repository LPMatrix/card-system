import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminAuthService } from 'src/app/auth/admin.auth.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {
  adminForm : FormGroup;
  loading = false;
  constructor(private adminAuthService : AdminAuthService) { }

  ngOnInit(): void {
    this.init();
  }

  private init() {
    this.adminForm = new FormGroup({
      password : new FormControl(null, [Validators.required]),
      newpassword : new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirmpassword : new FormControl(null, [Validators.required, Validators.minLength(8)])
    })
  }

  onSubmit(){
    if(!this.adminForm.valid) {
      return;
    }
    if(this.adminForm.value.confirmpassword !== this.adminForm.value.newpassword) {
      return;
    }
    this.loading = true
    const password = this.adminForm.value.password;
    const newpassword = this.adminForm.value.newpassword;
    const confirmpassword = this.adminForm.value.confirmpassword;
    this.adminAuthService.changeProfile(password, newpassword, confirmpassword)
    .subscribe(responseData => {
      console.log(responseData);
      this.adminForm.setValue({
        'password' : null,
        'newpassword' : null,
        'confirmpassword' : null
      });
      this.loading = false;
    });
  }

  logout() {
    this.adminAuthService.logout();
  }
}
