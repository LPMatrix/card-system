import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-agent-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class AgentLoginComponent implements OnInit {
  credentialsForm: FormGroup;
  title = "Login";
  loading: boolean = false;

  constructor(private router: Router, private authService : AuthService) {}
  ngOnInit(): void {
    this.authService.autoAuthUser();
    if(this.authService.getAuthStatus()) {
      this.router.navigateByUrl('/agent');
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
    this.authService.login(this.credentialsForm.value)
    .pipe(finalize(() => {
      this.loading= false;
      this.title = "Login";
    }))
    .subscribe(responseData => {
      this.router.navigateByUrl('/agent/dashboard');
      this.credentialsForm.reset();
    });
  }

  
}
