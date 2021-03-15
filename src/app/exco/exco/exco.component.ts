import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { User } from 'src/app/shared/users.model';
import { Subject, Subscription } from 'rxjs';
import { Agent } from 'src/app/shared/agent.model';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import { MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AgentService } from 'src/app/agent/agent.service';
import { ExcoAuthService } from 'src/app/auth/exco.auth.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-exco',
  templateUrl: './exco.component.html',
  styleUrls: ['./exco.component.css']
})
export class ExcoComponent implements OnInit, OnDestroy {
  displayedColumns = [
    'Name', 'Unique Id', 'Email', 'Gender', 'D.O.B', 'Phone No', 'Branch', 'Zone',
    'State',
    'Unit', 'Action'
  ];

  dataSource;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  users: User[] = [];
  userInformation: Agent;
  totalUsers: number = 0;
  postPerPage: number = 20;
  currentPage: number = 1
  pageSizeOptions = [20, 50, 100, 200];
  private userSubscription: Subscription;
  // counts: { userCount: number } = { userCount: 0 };
  constructor(private SpinnerService: NgxSpinnerService, private excoAuthService: ExcoAuthService, private agentService: AgentService) { }

  ngOnInit(): void {
    this.SpinnerService.show();
    this.agentService.getExcoUsers(this.postPerPage, this.currentPage)
      .pipe(finalize(() => {
        this.SpinnerService.hide();
      }))
      .subscribe(responseData => {
        // 
      });
    this.userSubscription = this.agentService.excoUsersChanged
      .subscribe((responseData: { users: User[], totalUsers: number }) => {
        this.users = responseData.users;
        this.totalUsers = responseData.totalUsers;
        this.dataSource = new MatTableDataSource(this.users);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    this.excoAuthService.getAgentDataStatus()
      .subscribe(responseData => {
        this.userInformation = responseData;
      });
  }

  onChangedPage(pageData: PageEvent) {
    this.SpinnerService.show();
    this.currentPage = pageData.pageIndex + 1;
    this.postPerPage = pageData.pageSize;
    this.agentService.getExcoUsers(this.postPerPage, this.currentPage)
      .pipe(finalize(() => {
        this.SpinnerService.hide();
      }))
      .subscribe(responseData => {
        // do nothing
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  logout() {
    this.excoAuthService.logout();
  }


  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.userSubscription.unsubscribe();
  }

}
