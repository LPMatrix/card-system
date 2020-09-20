import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ExcoAuthService } from 'src/app/auth/exco.auth.service';
@Component({
  selector: 'app-exco-forget-password',
  templateUrl: './exco-forget-password.component.html',
  styleUrls: ['./exco-forget-password.component.css']
})
export class ExcoForgetPasswordComponent implements OnInit {
  credentialsForm: FormGroup;
  title = "Submit";
  loading = false;
  message: string;

  constructor(
    private router: Router,
    private _location: Location,
    private excoAuthService: ExcoAuthService
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

    this.excoAuthService.forgotPassword(this.credentialsForm.value.email)
      .subscribe(responseData => {
        this.loading = false;
        this.credentialsForm.reset();
        this.message = responseData.message;
        this.title = "Submit";
      });

  }
}
