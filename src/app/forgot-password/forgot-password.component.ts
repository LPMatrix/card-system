import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
credentialsForm: FormGroup;
  title = "Login";
  loading = false;

  constructor(private router: Router, private _location: Location) {
  	this.credentialsForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
    });
   }

  ngOnInit(): void {
  }

  backClicked() {
    this._location.back();
  }

  onSubmit() {
    this.title = "Please wait....";
    if (!this.credentialsForm.valid) {
      
      return;
    }
    this.loading = true;
   
  }

}
