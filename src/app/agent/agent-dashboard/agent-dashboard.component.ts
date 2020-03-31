import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/app/shared/users.model';
import { AgentService } from '../agent.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Subject } from 'rxjs';
declare var $: any;

@Component({
  selector: 'app-agent-dashboard',
  templateUrl: './agent-dashboard.component.html',
  styleUrls: ['./agent-dashboard.component.css']
})
export class AgentDashboardComponent implements OnInit, OnDestroy {
  users : User[] = [];
  userInformation : {name: string, image: string};
  dtTrigger: Subject<any> = new Subject();
  dtOptions: DataTables.Settings = {};
  counts: { userCount: number };
  constructor(private agentService : AgentService, private authService: AuthService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
    this.agentService.getUsers();
    this.getCount();
    this.userInformation = this.authService.getUserDetail();
    this.agentService.getUserStatusListener()
    .subscribe(responseData => {
      this.users = responseData;
      this.dtTrigger.next();
    });
  }

  getCount() {
    this.agentService.getCounts().subscribe(responseData => {
      console.log(responseData);
      this.counts = responseData;
    });
  }

  logout() {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
  

}
