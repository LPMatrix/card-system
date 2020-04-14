import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { User } from 'src/app/shared/users.model';
import { AgentService } from '../agent.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Subject, Subscription } from 'rxjs';
import { Agent } from 'src/app/shared/agent.model';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-agent-dashboard',
  templateUrl: './agent-dashboard.component.html',
  styleUrls: ['./agent-dashboard.component.css']
})
export class AgentDashboardComponent implements OnInit, OnDestroy {
  displayedColumns = [
  'Name', 'Unique Id', 'Email', 'Updated On', 'Gender', 'D.O.B', 'Zone', 
  'Unit', 'Phone No', 'State', 'Vehicle No', 'Action'
  ];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  users : User[] = [];
  userInformation : Agent;
  private userSubscription : Subscription;
  counts: { userCount: number } = {userCount: 0};
  constructor(private agentService : AgentService, private authService: AuthService) { }

  ngOnInit(): void {
    this.agentService.getUsers();
    this.userSubscription = this.agentService.getUserStatusListener()
    .subscribe(responseData => {
      this.users = responseData;
      this.dataSource = new MatTableDataSource(this.users);
      this.counts.userCount = this.users.length; 
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
    this.userSubscription.unsubscribe();
  }
  

}
