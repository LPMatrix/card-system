import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from '../user.auth.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentialsForm: FormGroup;
  title = "Login";
  loading = false;
  constructor(private router: Router, private userAuthService: UserAuthService) { }
  ngOnInit(): void {
    this.userAuthService.autoAuthUser();
    if (this.userAuthService.getUserAuthStatus()) {
      this.router.navigateByUrl('/home');
    }
    this.credentialsForm = new FormGroup({
      uniqueId: new FormControl(null, Validators.required),
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
    this.userAuthService.login(this.credentialsForm.value)
      .pipe(finalize(() => {
        this.title = "Login";
        this.loading = false;
      }))
      .subscribe(responseData => {
        this.router.navigateByUrl('/');
        this.credentialsForm.reset();
      });
  }


}
