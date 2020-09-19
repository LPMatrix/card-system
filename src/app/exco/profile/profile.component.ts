import { Component, OnInit } from '@angular/core';
import { Agent } from '../../shared/agent.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExcoAuthService } from 'src/app/auth/exco.auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ExcoProfileComponent implements OnInit {

  agent : Agent = {
    name : '',
    email : '',
    image : '',
  };
  loading = false;
  agentForm : FormGroup;
  userInformation : Agent;
  message : string;
  constructor(private excoAuthService : ExcoAuthService, private router : Router) { }

  ngOnInit(): void {
    this.init();
    this.excoAuthService.getProfile()
    .subscribe(responseData => {
      this.agent = responseData.agent;
      this.userInformation = responseData.agent;
      this.agentForm.setValue({
        'name' : responseData.agent.name,
        'email' : responseData.agent.email,
        'password' : null,
        'newpassword' : null,
        'confirmpassword' : null
      })
    });
  }
  private init() {
    this.agentForm = new FormGroup({
      name : new FormControl(null, [Validators.required]),
      email : new FormControl({value : null, disabled: true}, [Validators.required, Validators.email]),
      password : new FormControl(null),
      newpassword : new FormControl(null, [Validators.minLength(8)]),
      confirmpassword : new FormControl(null, [Validators.minLength(8)])
    });
  }
  onSubmit() {
    if(!this.agentForm.valid) {
      return;
    }
    const password = this.agentForm.value.password;
    const confirmpassword = this.agentForm.value.confirmpassword;
    const newpassword = this.agentForm.value.newpassword;
    if(password !== null && newpassword !==null && confirmpassword !== newpassword) {
      this.message = "No match";
      return;
    }
    this.loading = true;
    this.message = null;
    this.excoAuthService.changeProfile(this.agentForm.value)
    .subscribe(responseData => {
      this.agent = responseData.agent;
      this.userInformation = responseData.agent;
      this.agentForm.setValue({
        'name' : responseData.agent.name,
        'email' : responseData.agent.email,
        'password' : null,
        'newpassword' : null,
        'confirmpassword' : null
      });
      this.excoAuthService.agentData.next(responseData.agent);
      this.loading = false;
    }, error => {
      this.loading = false;

    });
  }

  logout() {
    this.excoAuthService.logout()
  }

}
