import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/shared/users.model';
import { AuthService } from 'src/app/auth/auth.service';
import { AdminService } from '../admin.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-view-agent',
  templateUrl: './view-agent.component.html',
  styleUrls: ['./view-agent.component.css']
})
export class ViewAgentComponent implements OnInit {
  displayedColumns = [
    'firstname', 'uniqueId', 'email', 'gender', 'dob', 'Phone No', 'branch', 'zone',
    'state',
    'unit', 'Action'
  ];
  dataSource;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  users: User[] = [];
  agentId: string;
  constructor(private authService: AuthService, private adminService: AdminService, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        if (params['id']) {
          this.agentId = params['id'];
          this.fetchUsers();
        }
      }); 
  }

  fetchUsers() {
    this.adminService.getAgentRegisteredUsers(this.agentId).subscribe(responseData => {
      this.users = responseData.users;
      this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.paginator = this.paginator;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  logout() {
    this.authService.logout();
  }


}
