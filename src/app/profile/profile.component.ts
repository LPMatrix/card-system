import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Agent } from '../shared/agent.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  agent : Agent;
  agentForm : FormGroup;
  constructor(private authService : AuthService) { }

  ngOnInit(): void {
    this.authService.getProfile()
    .subscribe(responseData => {
      this.agent = responseData.agent;
      this.agentForm = new FormGroup({
        name : new FormControl(this.agent.name, [Validators.required]),
        email : new FormControl(this.agent.email, [Validators.required, Validators.email]),
        password : new FormControl(null, [Validators.required]),
        confirmpassword : new FormControl(null, [Validators.required, Validators.minLength(8)])
      });
    });
  }
  onSubmit() {
    console.log(this.agentForm);
  }

}
