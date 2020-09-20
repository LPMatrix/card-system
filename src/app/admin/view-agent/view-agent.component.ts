import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/shared/users.model';
import { AuthService } from 'src/app/auth/auth.service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-view-agent',
  templateUrl: './view-agent.component.html',
  styleUrls: ['./view-agent.component.css']
})
export class ViewAgentComponent implements OnInit, AfterViewInit {
  displayedColumns = [
    'Name', 'Unique Id', 'Email', 'Gender', 'D.O.B', 'Phone No', 'Branch', 'Zone', 
    'State',
    'Unit', 'Action'
    ];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  users : User[] = [];
  agentId: string;
  constructor(private authService: AuthService, private adminService: AdminService) { }

  ngOnInit(): void {
    this.agentId = history.state;
    this.fetchUsers();
  }

  fetchUsers(){
    this.adminService.getAgentRegisteredUsers(history.state).subscribe(responseData => {
      this.users = responseData.users;
      this.dataSource = new MatTableDataSource(this.users);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  logout() {
    this.authService.logout();
  }

  ngAfterViewInit():void {
    this.dataSource.paginator = this.paginator;
  }


}
