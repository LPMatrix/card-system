import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { User } from 'src/app/shared/users.model';
import { AdminService } from '../admin.service';
import { AdminAuthService } from 'src/app/auth/admin.auth.service';
import { Subject, Subscription } from 'rxjs';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmationDialogServiceService } from '../../confirmation-dialog/confirmation-dialog-service.service';
import { finalize } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.css']
})
export class ExportComponent implements OnInit, OnDestroy {
  totalUsers: number = 0;
  totalAgents: number = 0;
  postPerPage: number = 20;
  currentPage: number = 1
  pageSizeOptions = [20, 50, 200, 500];
  displayedColumns: string[] = [
    'firstname', 'uniqueId', 'verifiedIdType', 'verifiedId', 'gender', 'Image', 'branch', 'zone', 'state',
    'unit', 'Issued On',
  ];
  dataSource: any;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  users: User[] = [];
  counts: { userCount: number } = { userCount: 0 };
  arrayCount: number = 0;
  private usersSubscription: Subscription;
  private agentsSubscription: Subscription;
  constructor(
    private SpinnerService: NgxSpinnerService,
    private confirmationDialogService: ConfirmationDialogServiceService,
    private adminService: AdminService,
    private adminAuthService: AdminAuthService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.SpinnerService.show();
    this.adminService.geAgentUsers(this.postPerPage, this.currentPage)
      .pipe(finalize(() => {
        this.SpinnerService.hide();
      }))
      .subscribe(response => {
        // do nothing
      });
    this.usersSubscription = this.adminService.usersChanged
      .subscribe((responseData: { users: User[], totalUsers: number, totalAgents: number }) => {
        this.users = responseData.users;
        this.totalAgents = responseData.totalAgents;
        this.totalUsers = responseData.totalUsers;
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
    this.adminService.geAgentUsers(this.postPerPage, this.currentPage)
      .pipe(finalize(() => {
        this.SpinnerService.hide();
      }))
      .subscribe(response => {
        // do nothing
      });
  }

  logout() {
    this.adminAuthService.logout();
  }

  ngOnDestroy(): void {
    this.usersSubscription.unsubscribe();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
