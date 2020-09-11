import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { UserAuthService } from '../../user.auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  credentialsForm: FormGroup;
  title = "Submit";
  loading = false;
  message: string;

  constructor(
    private router: Router,
    private _location: Location,
    private userAuthController: UserAuthService
  ) {
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

    this.userAuthController.forgotPassword(this.credentialsForm.value.email)
      .subscribe(responseData => {
        this.loading = false;
        this.credentialsForm.reset();
        this.message = responseData.message;
        this.title = "Submit";
      });

  }

}
