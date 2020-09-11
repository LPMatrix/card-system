import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
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
export class AgentDashboardComponent implements OnInit, OnDestroy, AfterViewInit {
  displayedColumns = [
  'Name', 'Unique Id', 'Email', 'Gender', 'D.O.B', 'Phone No', 'Branch', 'Zone', 
  'State',
  'Unit',  'Action'
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

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  logout() {
    this.authService.logout();
  }



  ngAfterViewInit():void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.userSubscription.unsubscribe();
  }
  

}
