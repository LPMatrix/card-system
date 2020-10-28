import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { AdminService } from '../admin.service';
import { User } from 'src/app/shared/users.model';
import { AdminAuthService } from 'src/app/auth/admin.auth.service';
import { Subject, Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { Agent } from 'src/app/shared/agent.model';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ConfirmationDialogServiceService } from '../../confirmation-dialog/confirmation-dialog-service.service';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit, OnDestroy {
displayedColumns = [
  'name', 'email', 'updatedAt', 'is_active', 'Action'
  ];
  dataSource;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  users: User[] = [];
  agents: Agent[] = [];
  counts: { userCount: number, agentCount: number } = { userCount: 0, agentCount: 0 };
  arrayCount: number = 0;
  private usersSubscription: Subscription;
  private agentsSubscription: Subscription;
  constructor(
    private SpinnerService: NgxSpinnerService,
    private confirmationDialogService: ConfirmationDialogServiceService,
    private adminService: AdminService,
    private adminAuthService: AdminAuthService,
    private router: Router
    ) { }

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

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  openAgent(id: string) {
    // console.log(id)
    this.router.navigateByUrl('/admin/agent-user/' + id);
  }

  ngOnInit(): void {
    this.SpinnerService.show();
    this.adminService.getAgents()
    .pipe(finalize(() => {
      this.SpinnerService.hide();
    }))
    .subscribe(responseData => {
      
    });
    this.agentsSubscription = this.adminService.getAgentStatusListener()
      .subscribe(responseData => {
        this.agents = responseData.filter(
          ag => ag.branch == null);
        this.dataSource = new MatTableDataSource(this.agents);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.counts.agentCount = this.agents.length;
      });
  }

  logout() {
    this.adminAuthService.logout();
  }

  ngOnDestroy(): void {
    // this.usersSubscription.unsubscribe();
    this.agentsSubscription.unsubscribe();
  }

  onAccountStatus(agentId : string) {
    this.SpinnerService.show();
    this.adminService.agentAccountStatus(agentId)
    .pipe(finalize(() => {
      this.SpinnerService.hide();
    }))
    .subscribe(response => {
      // do nothing
    });
  }

  onDelete(agentId : string) {
    this.SpinnerService.show();
    this.adminService.deleteAgent(agentId)
    .pipe(finalize(() => {
      this.SpinnerService.hide();
    }))
    .subscribe(response => {
      // do nothing
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

