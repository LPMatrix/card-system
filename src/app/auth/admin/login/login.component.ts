import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminAuthService } from '../../admin.auth.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-admin-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class AdminLoginComponent implements OnInit {
  credentialsForm: FormGroup;
  title = "Login";
  loading: boolean = false;
  constructor(private router: Router, private adminAuthService: AdminAuthService) { }
  ngOnInit(): void {
    this.adminAuthService.autoAuthAdmin();
    if (this.adminAuthService.getAdminAuthStatus()) {
      this.router.navigateByUrl('/admin');
    }
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
    this.adminAuthService.login(this.credentialsForm.value)
      .pipe(finalize(() => {
        this.title = "Login";
        this.loading = false;
      }))
      .subscribe(responseData => {
        this.router.navigateByUrl('/admin');
        this.credentialsForm.reset();
      });
  }

}
