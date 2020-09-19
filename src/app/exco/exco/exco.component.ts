import { Component, OnInit, OnDestroy, ViewChild, AfterViewInit } from '@angular/core';
import { User } from 'src/app/shared/users.model';
import { AuthService } from 'src/app/auth/auth.service';
import { Subject, Subscription } from 'rxjs';
import { Agent } from 'src/app/shared/agent.model';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort} from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-exco',
  templateUrl: './exco.component.html',
  styleUrls: ['./exco.component.css']
})
export class ExcoComponent implements OnInit {
  displayedColumns = [
    'Name', 'Unique Id', 'Email', 'Gender', 'D.O.B', 'Phone No', 'Branch', 'Zone', 
    'State',
    'Unit',  'Action'
    ];

    dataSource: MatTableDataSource<any>;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    users : User[] = [];
    userInformation : Agent;
    private userSubscription : Subscription;
    counts: { userCount: number } = {userCount: 0};
    constructor( private authService: AuthService) { }
  
    ngOnInit(): void {
 
    }
  
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  
  
    logout() {
      // this.authService.logout();
    }
  
  
  
    ngAfterViewInit():void {
      this.dataSource.paginator = this.paginator;
    }
  
    ngOnDestroy(): void {
      // Do not forget to unsubscribe the event
      // this.userSubscription.unsubscribe();
    }

}
