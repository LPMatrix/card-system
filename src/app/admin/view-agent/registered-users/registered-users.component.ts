import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Agent } from 'http';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs/operators';
import { AdminAuthService } from 'src/app/auth/admin.auth.service';
import { ConfirmationDialogServiceService } from 'src/app/confirmation-dialog/confirmation-dialog-service.service';
import { User } from 'src/app/shared/users.model';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-registered-users',
  templateUrl: './registered-users.component.html',
  styleUrls: ['./registered-users.component.css']
})
export class RegisteredUsersComponent implements OnInit {
  displayedColumns: string[] = [
    'firstname', 'uniqueId', 'email', 'Phone No', 'gender', 'dob', 'branch', 'zone', 'state',
    'unit', 'updatedAt', 'Action'
  ];
  dataSource: any;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  users: User[] = [];
  agents: Agent[] = [];
  totalUsers: number = 0;
  totalAgents: number = 0;
  postPerPage: number = 20;
  currentPage: number = 1;
  pageSizeOptions = [20, 50, 200, 500];
  agentId: string;
  constructor(
    private SpinnerService: NgxSpinnerService,
    private confirmationDialogService: ConfirmationDialogServiceService,
    private adminService: AdminService,
    private adminAuthService: AdminAuthService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

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
  }

  getAllUsers(agentId: string) {
    this.adminService.getAgentRegisteredUsers(agentId, this.postPerPage, this.currentPage)
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
    // console.log(pageData);
    this.SpinnerService.show();
    this.currentPage = pageData.pageIndex + 1;
    this.postPerPage = pageData.pageSize;
    this.getAllUsers(this.agentId);
  }
  public openConfirmDialog(userId: string) {
    this.confirmationDialogService.confirm('', 'Are you sure you want to perform operation?')
      .then((confirmed) => this.onApprove(userId))
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }

  public openDeleteDialog(userId: string) {
    this.confirmationDialogService.confirm('Delete', 'Are you sure you want to perform operation?')
      .then((confirmed) => this.onDeleteUser(userId))
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }

  onApprove(userId: string) {
    this.SpinnerService.show()
    this.adminService.approve(userId)
      .subscribe(response => {
        this.getAllUsers(this.agentId)
      });
    // this.getCount();
  }

  onAccountStatus(agentId: string) {
    this.adminService.agentAccountStatus(agentId)
    .subscribe(response => {
      // do nothing
      this.getAllUsers(this.agentId);
    });;
  }

  onDelete(agentId: string) {
    this.adminService.deleteAgent(agentId);
  }

  onDeleteUser(userId: string) {
    // Parse _id value as userId
    this.SpinnerService.show();
    this.adminService.deleteUser(userId)
      .subscribe(response => {
        // do nothing
        this.getAllUsers(this.agentId);
      });;
  }

  onEdit(id: string) {
    console.log(id)
    this.router.navigateByUrl('/admin/edit-user/' + id);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  logout() {
    this.adminAuthService.logout();
  }

}
