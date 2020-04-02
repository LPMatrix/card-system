import { Component, OnInit, OnDestroy, } from '@angular/core';
import { User } from 'src/app/shared/users.model';
import { AdminService } from '../admin.service';
import { AdminAuthService } from 'src/app/auth/admin.auth.service';
import { Subject, Subscription } from 'rxjs';
import { Agent } from 'src/app/shared/agent.model';
declare var $: any;


@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit, OnDestroy {
  users: User[] = [];
  agents: Agent[] = [];
  counts: { userCount: number, agentCount: number } = { userCount: 0, agentCount: 0 };
  arrayCount: number = 0;
  dtTrigger: Subject<any> = new Subject();
  dtOptions: DataTables.Settings = {};
  private usersSubscription: Subscription;
  private agentsSubscription: Subscription;
  constructor(private adminService: AdminService, private adminAuthService: AdminAuthService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
    this.adminService.geAgentUsers();
    this.usersSubscription = this.adminService.getUserStatusListener()
      .subscribe(responseData => {
        this.users = responseData;
        this.counts.userCount = this.users.length;
        this.dtTrigger.next();
      });
    this.agentsSubscription = this.adminService.getAgentStatusListener()
      .subscribe(responseData => {
        this.agents = responseData;
        this.counts.agentCount = this.agents.length;
        // this.dtTrigger.next();
      });
  }

  onApprove(userId: string) {
    
    this.adminService.approve(userId);
    // this.getCount();
  }

  logout() {
    this.adminAuthService.logout();
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
    this.usersSubscription.unsubscribe();
    this.agentsSubscription.unsubscribe();
  }

  onAccountStatus(agentId : string) {
    this.adminService.agentAccountStatus(agentId);
  }

  onDelete(agentId : string) {
    this.adminService.deleteAgent(agentId);
  }
}
