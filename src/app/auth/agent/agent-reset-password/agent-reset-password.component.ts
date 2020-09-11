import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-agent-reset-password',
  templateUrl: './agent-reset-password.component.html',
  styleUrls: ['./agent-reset-password.component.css']
})
export class AgentResetPasswordComponent implements OnInit {
  title = "Submit";
  token : string;
  agentId : string;
  loading = false;
  message : string;
  credentialsForm : FormGroup;
  constructor(
    private route : ActivatedRoute,
    private authService : AuthService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.init();
    this.loading =true
    this.route.params.subscribe(
      (params : Params) => {
        if(params['token']) {
          this.token = params['token'];
          this.authService.getResetPassword(this.token)
          .subscribe(responseData => {
            this.loading = false;
            this.agentId= responseData.agentId;
          }, error => {
            this.router.navigateByUrl('/agent');
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
    this.authService.postResetPassword(password, confirmpassword, this.token, this.agentId)
    .subscribe(responseData => {
      this.message = responseData.message;
      this.loading = false;
      this.router.navigateByUrl('agent/login');
    });
  }

}
