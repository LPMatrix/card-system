import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Agent } from '../../shared/agent.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';
import { AgentService } from 'src/app/agent/agent.service';

@Component({
  selector: 'app-validate',
  templateUrl: './validate.component.html',
  styleUrls: ['./validate.component.css']
})
export class ValidateComponent implements OnInit {
  @ViewChild('content') content: ElementRef;
  uniqueID: string;
  userInformation: Agent;
  user: any;
  constructor(private agentService: AgentService) { }

  ngOnInit(): void {
  }

  fetchUser() {
    // if(this.uniqueID != '')
    if (this.uniqueID !== '') {
      this.agentService.getUserDetailById(this.uniqueID)
        .subscribe(responseData => {
          this.user = responseData.user;
          console.log(this.user);
        });
    }
  }

  logout() {

  }

}
