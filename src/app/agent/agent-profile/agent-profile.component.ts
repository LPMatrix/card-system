import { Component, OnInit } from '@angular/core';
import { Agent } from '../../shared/agent.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agent-profile',
  templateUrl: './agent-profile.component.html',
  styleUrls: ['./agent-profile.component.css']
})
export class AgentProfileComponent implements OnInit {
  agent : Agent = {
    name : '',
    email : '',
    image : '',
  };
  loading = false;
  agentForm : FormGroup;
  userInformation : {name: string, image: string};
  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit(): void {
    this.init();
    this.userInformation = this.authService.getUserDetail();
    this.authService.getProfile()
    .subscribe(responseData => {
      this.agent = responseData.agent;
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
      password : new FormControl(null, [Validators.required]),
      newpassword : new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirmpassword : new FormControl(null, [Validators.required, Validators.minLength(8)])
    });
  }
  onSubmit() {
    if(!this.agentForm.valid) {
      return;
    }
    if(this.agentForm.value.confirmpassword !== this.agentForm.value.newpassword) {
      return;
    }
    this.loading = true;
    this.authService.changeProfile(this.agentForm.value)
    .subscribe(responseData => {
      this.agent = responseData.agent;
      this.agentForm.setValue({
        'name' : responseData.agent.name,
        'email' : responseData.agent.email,
        'password' : null,
        'newpassword' : null,
        'confirmpassword' : null
      });
      this.loading = false;
    });
  }

  logout() {
    this.authService.logout();
  }

}
