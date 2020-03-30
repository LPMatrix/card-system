import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/users.model';
import { AgentService } from '../agent.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-agent-dashboard',
  templateUrl: './agent-dashboard.component.html',
  styleUrls: ['./agent-dashboard.component.css']
})
export class AgentDashboardComponent implements OnInit {
  users : User[] = []
  constructor(private agentService : AgentService, private authService: AuthService) { }

  ngOnInit(): void {
    this.agentService.getUsers();
    this.agentService.getUserStatusListener()
    .subscribe(responseData => {
      this.users = responseData;
    });
  }

  logout() {
    this.authService.logout();
  }
  

}
