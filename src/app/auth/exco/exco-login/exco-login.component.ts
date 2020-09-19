import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-exco-login',
  templateUrl: './exco-login.component.html',
  styleUrls: ['./exco-login.component.css']
})
export class ExcoLoginComponent implements OnInit {

  credentialsForm: FormGroup;
  title = "Login";
  loading: boolean = false;

  constructor(private router: Router) {}
  ngOnInit(): void {
    this.credentialsForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    this.title = "Please wait....";
    if (!this.credentialsForm.valid) {
      this.title = "Login"
      return;
    }
    this.loading = true;
  }

}
