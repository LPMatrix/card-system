import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { User } from 'src/app/shared/users.model';
import { AdminService } from '../admin.service';
import { AdminAuthService } from 'src/app/auth/admin.auth.service';
import { Subject, Subscription } from 'rxjs';
import { Agent } from 'src/app/shared/agent.model';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmationDialogServiceService } from '../../confirmation-dialog/confirmation-dialog-service.service';
import { finalize } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit, OnDestroy {
  displayedColumns: string[] = [
    'firstname', 'uniqueId', 'email', 'Phone No', 'gender', 'dob', 'branch', 'zone', 'state',
    'unit', 'updatedAt', 'Action'
  ];
  branches: string[] = [
    "PTD",
    "IMB",
    "ELD",
    "JEWOG",
    "LPGAR",
    "OGS",
    "SUTAKEP",
    "PSW"
  ];
  /** check */
  dataSource: any;
  filters: string[] = ['None', 'Branch', 'Agent', 'Date'];
  showButton: boolean = false;
  selectedFilter: string = "None";
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  users: User[] = [];
  agents: Agent[] = [];
  totalUsers: number = 0;
  totalAgents: number = 0;
  postPerPage: number = 20;
  currentPage: number = 1
  credentialsForm: FormGroup;
  pageSizeOptions = [20, 50, 200, 500];
  counts: { userCount: number, agentCount: number } = { userCount: 0, agentCount: 0 };
  arrayCount: number = 0;
  startDate: Date = null;
  endDate: Date = null;
  branch: string = null;
  private usersSubscription: Subscription;
  private agentsSubscription: Subscription;
  constructor(
    private SpinnerService: NgxSpinnerService,
    private confirmationDialogService: ConfirmationDialogServiceService,
    private adminService: AdminService,
    private adminAuthService: AdminAuthService,
    private router: Router,
    public formBuilder: FormBuilder,
  ) {
    this.credentialsForm = this.formBuilder.group({
      startDate: ['', Validators.nullValidator],
      branch: ['', Validators.nullValidator],
      endDate: ['', Validators.nullValidator]
    });
  }
  activateButton() {
    this.showButton = true;
  }
  // ngAfterViewInit() {
  //   this.dataSource.sort = this.sort;
  // }
  getAllUsersWithFilter() {
    this.filter();
    this.SpinnerService.show();
    this.adminService.geAgentUsers(this.postPerPage, this.currentPage, this.startDate, this.endDate, this.branch)
      .pipe(finalize(() => {
        this.SpinnerService.hide();
      }))
      .subscribe(response => {
        // do nothing
      });
  }
  filter() {
    if (this.selectedFilter == "Branch") {
      this.startDate = null;
      this.branch = this.credentialsForm.value.branch;
      this.endDate = null;
    } else if(this.selectedFilter == "Date") {
      this.startDate = this.credentialsForm.value.startDate;
      this.branch = null;
      this.endDate = this.credentialsForm.value.endDate;
    } else {
      this.startDate = null;
      this.branch = null;
      this.endDate = null;
    }

  }
  ngOnInit(): void {
    this.getAllUsersWithFilter();
    this.usersSubscription = this.adminService.usersChanged
      .subscribe((responseData: { users: User[], totalUsers: number, totalAgents: number }) => {
        this.users = responseData.users;
        this.totalAgents = responseData.totalAgents;
        this.totalUsers = responseData.totalUsers;
        this.dataSource = new MatTableDataSource(this.users);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    this.agentsSubscription = this.adminService.getAgentStatusListener()
      .subscribe(responseData => {
        this.agents = responseData.filter(
          ag => ag.branch == null);
        this.counts.agentCount = this.agents.length;
      });
  }
  onChangedPage(pageData: PageEvent) {
    // console.log(pageData);
    this.SpinnerService.show();
    this.currentPage = pageData.pageIndex + 1;
    this.postPerPage = pageData.pageSize;
    this.adminService.geAgentUsers(this.postPerPage, this.currentPage, this.startDate, this.endDate, this.branch)
      .pipe(finalize(() => {
        this.SpinnerService.hide();
      }))
      .subscribe(response => {
        // do nothing
      });
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
        this.getAllUsersWithFilter();
      });
    // this.getCount();
  }

  logout() {
    this.adminAuthService.logout();
  }

  ngOnDestroy(): void {
    this.usersSubscription.unsubscribe();
    this.agentsSubscription.unsubscribe();
  }

  onAccountStatus(agentId: string) {
    this.adminService.agentAccountStatus(agentId).subscribe();
  }

  onDelete(agentId: string) {
    this.adminService.deleteAgent(agentId).subscribe();
  }

  onDeleteUser(userId: string) {
    // Parse _id value as userId
    this.SpinnerService.show();
    this.adminService.deleteUser(userId)
    .subscribe(response => {
      this.getAllUsersWithFilter();
    });
  }

  onEdit(id: string) {
    console.log(id)
    this.router.navigateByUrl('/admin/edit-user/' + id);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
