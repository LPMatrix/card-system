import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AgentService } from 'src/app/agent/agent.service';
import { ExcoAuthService } from 'src/app/auth/exco.auth.service';
import { Agent } from 'src/app/shared/agent.model';
import { User } from 'src/app/shared/users.model';

@Component({
  selector: 'app-exco-agent',
  templateUrl: './exco-agent.component.html',
  styleUrls: ['./exco-agent.component.css']
})
export class ExcoAgentComponent implements OnInit {
  displayedColumns = [
    'name', 'email', 'updatedAt', 'is_active', 'Action'
  ];
  dataSource;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  users: User[] = [];
  agents: Agent[] = [];
  totalUsers: number = 0;
  totalAgents: number = 0;
  arrayCount: number = 0;
  userInformation: Agent;
  private usersSubscription: Subscription;
  private agentsSubscription: Subscription;
  constructor(
    private SpinnerService: NgxSpinnerService,
    private excoAuthService: ExcoAuthService,
    private agentService: AgentService,
    private router: Router
  ) { }


  openAgent(id: string) {
    // console.log(id)
    this.router.navigateByUrl('/exco/agent/' + id + '/users');
  }

  ngOnInit(): void {
    this.SpinnerService.show();
    this.agentService.getAgents()
      .pipe(finalize(() => {
        this.SpinnerService.hide();
      }))
      .subscribe(responseData => {
        this.agents = responseData.agents;
        this.totalAgents = responseData.totalAgents;
        this.totalUsers = responseData.totalUsers;
        this.dataSource = new MatTableDataSource(this.agents);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

      });
    this.excoAuthService.getAgentDataStatus()
      .subscribe(responseData => {
        this.userInformation = responseData;
      });
  }

  logout() {
    this.excoAuthService.logout();
  }

  ngOnDestroy(): void {
    // this.usersSubscription.unsubscribe();
    // this.agentsSubscription.unsubscribe();
  }


  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
