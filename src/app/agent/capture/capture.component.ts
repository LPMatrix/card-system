import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AgentService } from '../agent.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-capture',
  templateUrl: './capture.component.html',
  styleUrls: ['./capture.component.css']
})
export class CaptureComponent implements OnInit {
  agentForm : FormGroup;
  constructor(private agentService : AgentService, private authService : AuthService) { }

  ngOnInit(): void {
    this.init();
  }

  private init() {
    this.agentForm = new FormGroup({
      firstname : new FormControl(null, [Validators.required]),
      middlename : new FormControl(null, [Validators.required]),
      lastname : new FormControl(null, [Validators.required]),
      email : new FormControl(null, [Validators.required, Validators.email]),
      gender : new FormControl(null, [Validators.required]),
      dob : new FormControl(null, [Validators.required]),
      zone : new FormControl(null, [Validators.required]),
      unit : new FormControl(null, [Validators.required]),
      phone_no : new FormControl(null, [Validators.required]),
      state : new FormControl(null, [Validators.required]),
      vehicle_no : new FormControl(null, [Validators.required]),
      image : new FormControl(null),
      fingerprint_thumb : new FormControl(null),
      fingerprint_index : new FormControl(null)
    });
  }

  onSubmit() {
    if(!this.agentForm.valid) {
      return;
    }
    this.agentService.createUser(this.agentForm.value);
  }

  logout() {
    this.authService.logout()
  }

}
