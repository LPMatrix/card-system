import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserAuthService } from '../../user.auth.service';
import { User } from 'src/app/shared/users.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  title = "Submit";
  token : string;
  userId : string;
  loading = false;
  message : string;
  credentialsForm : FormGroup;
  constructor(
    private route : ActivatedRoute,
    private userAuthService : UserAuthService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.init();
    this.loading =true
    this.route.params.subscribe(
      (params : Params) => {
        if(params['token']) {
          this.token = params['token'];
          this.userAuthService.getResetPassword(this.token)
          .subscribe(responseData => {
            this.loading = false;
            this.userId= responseData.userId;
          }, error => {
            this.router.navigateByUrl('/');
          });
        }
      }
    );
  }

  private init() {
    this.credentialsForm = new FormGroup({
      password : new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirmpassword : new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    if(!this.credentialsForm.valid) {
      return;
    }
    if(this.credentialsForm.value.password !== this.credentialsForm.value.confirmpassword) {
      return;
    }
    this.loading = true;
    const password = this.credentialsForm.value.password;
    const confirmpassword = this.credentialsForm.value.confirmpassword;
    this.userAuthService.postResetPassword(password, confirmpassword, this.token, this.userId)
    .subscribe(responseData => {
      this.message = responseData.message;
      this.loading = false;
      this.router.navigateByUrl('/login');
    });
  }

}
