import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { User } from 'src/app/shared/users.model';
import { AgentService } from '../agent.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Subject, Subscription } from 'rxjs';
import { Agent } from 'src/app/shared/agent.model';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import { MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { finalize } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-agent-dashboard',
  templateUrl: './agent-dashboard.component.html',
  styleUrls: ['./agent-dashboard.component.css']
})
export class AgentDashboardComponent implements OnInit, OnDestroy{
  displayedColumns = [
  'firstname', 'uniqueId', 'email', 'gender', 'dob', 'Phone No', 'branch', 'zone', 
  'state',
  'unit',  'Action'
  ];
  dataSource;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  users : User[] = [];
  totalUsers: number = 0;
  totalAgents: number = 0;
  postPerPage: number = 20;
  currentPage: number = 1
  pageSizeOptions = [20, 50, 100, 200];
  userInformation : Agent;
  loading: boolean = false;
  private userSubscription : Subscription;
  counts: { userCount: number } = {userCount: 0};
  constructor(
    private SpinnerService: NgxSpinnerService,
    private agentService : AgentService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    // this.loading = true;
    this.SpinnerService.show(); 
    this.agentService.getUsers(this.postPerPage, this.currentPage)
    .pipe(finalize(() => {
      this.SpinnerService.hide();
    }))
    .subscribe(response => {
      // do nothing
    });
    this.userSubscription = this.agentService.usersChanged
    .subscribe((responseData: { users: User[], totalUsers: number }) => {
      this.users = responseData.users;
      this.totalUsers = responseData.totalUsers;
      this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
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

  onChangedPage(pageData: PageEvent) {
    // console.log(pageData);
    this.SpinnerService.show();
    this.currentPage = pageData.pageIndex + 1;
    this.postPerPage = pageData.pageSize;
    this.agentService.getUsers(this.postPerPage, this.currentPage)
      .pipe(finalize(() => {
        this.SpinnerService.hide();
      }))
      .subscribe(response => {
        // do nothing
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
