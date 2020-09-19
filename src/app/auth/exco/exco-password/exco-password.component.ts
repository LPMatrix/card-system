import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-exco-password',
  templateUrl: './exco-password.component.html',
  styleUrls: ['./exco-password.component.css']
})
export class ExcoPasswordComponent implements OnInit {

  title = "Submit";
  token : string;
  agentId : string;
  loading = false;
  message : string;
  credentialsForm : FormGroup;
  constructor(
    private route : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.init();
    this.loading =true
    this.route.params.subscribe(
      (params : Params) => {
        if(params['token']) {
          this.token = params['token'];
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
  }

}
