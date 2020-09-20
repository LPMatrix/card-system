import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { User } from 'src/app/shared/users.model';
import { Subject, Subscription } from 'rxjs';
import { Agent } from 'src/app/shared/agent.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
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
export class ExcoComponent implements OnInit, OnDestroy, AfterViewInit {
  displayedColumns = [
    'Name', 'Unique Id', 'Email', 'Gender', 'D.O.B', 'Phone No', 'Branch', 'Zone',
    'State',
    'Unit', 'Action'
  ];

  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  users: User[] = [];
  userInformation: Agent;
  private userSubscription: Subscription;
  counts: { userCount: number } = { userCount: 0 };
  constructor(private SpinnerService: NgxSpinnerService, private excoAuthService: ExcoAuthService, private agentService: AgentService) { }

  ngOnInit(): void {
    this.SpinnerService.show();
    this.userSubscription = this.agentService.getExcoUsers()
      .pipe(finalize(() => {
        this.SpinnerService.hide();
      }))
      .subscribe(responseData => {
        this.users = responseData.users;
        this.dataSource = new MatTableDataSource(this.users);
        this.counts.userCount = this.users.length;
      });
    this.excoAuthService.getAgentDataStatus()
      .subscribe(responseData => {
        this.userInformation = responseData;
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  logout() {
    this.excoAuthService.logout();
  }



  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    // this.userSubscription.unsubscribe();
  }

}
