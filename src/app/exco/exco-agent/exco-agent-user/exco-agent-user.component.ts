import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Params } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AgentService } from 'src/app/agent/agent.service';
import { ExcoAuthService } from 'src/app/auth/exco.auth.service';
import { Agent } from 'src/app/shared/agent.model';
import { User } from 'src/app/shared/users.model';

@Component({
  selector: 'app-exco-agent-user',
  templateUrl: './exco-agent-user.component.html',
  styleUrls: ['./exco-agent-user.component.css']
})
export class ExcoAgentUserComponent implements OnInit {
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
  agentId: string;
  private userSubscription: Subscription;
  // counts: { userCount: number } = { userCount: 0 };
  constructor(private route: ActivatedRoute, private SpinnerService: NgxSpinnerService, private excoAuthService: ExcoAuthService, private agentService: AgentService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.SpinnerService.show();
        if (params['agentId']) {
          this.agentId = params['agentId'];
          this.getAllUsers(this.agentId);
        }
      }
    );
    this.userSubscription = this.excoAuthService.getAgentDataStatus()
      .subscribe(responseData => {
        this.userInformation = responseData;
      });
  }

  getAllUsers(agentId: string) {
    this.agentService.getAgentRegisteredUsers(agentId, this.postPerPage, this.currentPage)
      .pipe(finalize(() => {
        this.SpinnerService.hide();
      }))
      .subscribe(response => {
        this.users = response.users
        this.totalUsers = response.totalUsers
        this.dataSource = new MatTableDataSource(this.users);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }
  onChangedPage(pageData: PageEvent) {
    this.SpinnerService.show();
    this.currentPage = pageData.pageIndex + 1;
    this.postPerPage = pageData.pageSize;
    this.getAllUsers(this.agentId);
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
