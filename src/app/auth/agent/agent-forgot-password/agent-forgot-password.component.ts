import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Location } from '@angular/common';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-agent-forgot-password',
  templateUrl: './agent-forgot-password.component.html',
  styleUrls: ['./agent-forgot-password.component.css']
})
export class AgentForgotPasswordComponent implements OnInit {
  credentialsForm: FormGroup;
  title = "Submit";
  loading = false;
  message: string;

  constructor(
    private router: Router,
    private _location: Location,
    private authService: AuthService
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

    this.authService.forgotPassword(this.credentialsForm.value.email)
      .subscribe(responseData => {
        this.loading = false;
        this.credentialsForm.reset();
        this.message = responseData.message;
        this.title = "Submit";
      });

  }

}
