import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { AdminService } from '../admin.service';
import { User } from 'src/app/shared/users.model';
import { AdminAuthService } from 'src/app/auth/admin.auth.service';
import { Subject, Subscription } from 'rxjs';
import { Agent } from 'src/app/shared/agent.model';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmationDialogServiceService } from '../../confirmation-dialog/confirmation-dialog-service.service';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
displayedColumns = [
  'Name', 'Email', 'Added On', 'Status', 'Action'
  ];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  users: User[] = [];
  agents: Agent[] = [];
  counts: { userCount: number, agentCount: number } = { userCount: 0, agentCount: 0 };
  arrayCount: number = 0;
  private usersSubscription: Subscription;
  private agentsSubscription: Subscription;
  constructor(private confirmationDialogService: ConfirmationDialogServiceService, private adminService: AdminService, private adminAuthService: AdminAuthService) { }

  public openConfirmationDialog(agentId : string) {
    this.confirmationDialogService.confirm('Delete','Perform Delete Operation?')
    .then((confirmed) => this.onDelete(agentId))
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }

  public openConfirmDialog(agentId : string) {
    this.confirmationDialogService.confirm('','Are you sure you want to perform operation?')
    .then((confirmed) => this.onAccountStatus(agentId))
    .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }

  ngOnInit(): void {
    this.adminService.geAgentUsers();
    this.usersSubscription = this.adminService.getUserStatusListener()
      .subscribe(responseData => {
        this.users = responseData;
        this.counts.userCount = this.users.length;
      });
    this.agentsSubscription = this.adminService.getAgentStatusListener()
      .subscribe(responseData => {
        this.agents = responseData.filter(
          ag => ag.branch == null);;
        this.dataSource = new MatTableDataSource(this.agents);
        this.counts.agentCount = this.agents.length;
      });
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

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}

