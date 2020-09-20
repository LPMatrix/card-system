import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { User } from 'src/app/shared/users.model';
import { AdminService } from '../admin.service';
import { AdminAuthService } from 'src/app/auth/admin.auth.service';
import { Subject, Subscription } from 'rxjs';
import { Agent } from 'src/app/shared/agent.model';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmationDialogServiceService } from '../../confirmation-dialog/confirmation-dialog-service.service';


@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit, OnDestroy, AfterViewInit {
  displayedColumns: string[] = [
  'Name', 'Unique Id', 'Email', 'Phone No', 'Gender', 'D.O.B', 'Branch', 'Zone', 'State',
  'Unit','Updated On', 'Action'
  ];
  dataSource: MatTableDataSource<User>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  users: User[] = [];
  agents: Agent[] = [];
  counts: { userCount: number, agentCount: number } = { userCount: 0, agentCount: 0 };
  arrayCount: number = 0;
  private usersSubscription: Subscription;
  private agentsSubscription: Subscription;
  constructor(private confirmationDialogService: ConfirmationDialogServiceService, private adminService: AdminService, private adminAuthService: AdminAuthService) {
    this.adminService.geAgentUsers();
    this.usersSubscription = this.adminService.getUserStatusListener()
      .subscribe(responseData => {
        this.users = responseData;
        this.counts.userCount = this.users.length;
            this.dataSource = new MatTableDataSource(this.users);
      });
    this.agentsSubscription = this.adminService.getAgentStatusListener()
      .subscribe(responseData => {
        this.agents = responseData;
        this.counts.agentCount = this.agents.length;
      });
   }

  ngOnInit(): void {
    
  }

  public openConfirmDialog(userId : string) {
    this.confirmationDialogService.confirm('','Are you sure you want to perform operation?')
    .then((confirmed) => this.onAccountStatus(userId))
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }

  public openDeleteDialog(userId : string) {
    this.confirmationDialogService.confirm('Delete','Are you sure you want to perform operation?')
    .then((confirmed) => this.onDeleteUser(userId))
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }

  onApprove(userId: string) {
    
    this.adminService.approve(userId);
    // this.getCount();
  }

  logout() {
    this.adminAuthService.logout();
  }

  ngOnDestroy(): void {
    this.usersSubscription.unsubscribe();
    this.agentsSubscription.unsubscribe();
  }

  onAccountStatus(agentId : string) {
    this.adminService.agentAccountStatus(agentId);
  }

  onDelete(agentId : string) {
    this.adminService.deleteAgent(agentId);
  }

  onDeleteUser(userId: string) {
    // Parse _id value as userId
    this.adminService.deleteUser(userId);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
