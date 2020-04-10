import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/app/shared/users.model';
import { AgentService } from '../agent.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Subject, Subscription } from 'rxjs';
import { Agent } from 'src/app/shared/agent.model';
declare var $: any;

@Component({
  selector: 'app-agent-dashboard',
  templateUrl: './agent-dashboard.component.html',
  styleUrls: ['./agent-dashboard.component.css']
})
export class AgentDashboardComponent implements OnInit, OnDestroy {
  users : User[] = [];
  userInformation : Agent;
  dtTrigger: Subject<any> = new Subject();
  dtOptions: DataTables.Settings = {};
  private userSubscription : Subscription;
  counts: { userCount: number } = {userCount: 0};
  constructor(private agentService : AgentService, private authService: AuthService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
    this.agentService.getUsers();
    this.userSubscription = this.agentService.getUserStatusListener()
    .subscribe(responseData => {
      this.users = responseData;
      this.counts.userCount = this.users.length; 
      this.dtTrigger.next();
    });
    this.authService.getAgentDataStatus()
    .subscribe(responseData => {
      this.userInformation = responseData;
    });
  }


  logout() {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
    this.userSubscription.unsubscribe();
  }
  

}
