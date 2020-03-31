import { Component, OnInit, OnDestroy, } from '@angular/core';
import { User } from 'src/app/shared/users.model';
import { AdminService } from '../admin.service';
import { AdminAuthService } from 'src/app/auth/admin.auth.service';
import { Subject } from 'rxjs';
declare var $: any;


@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit, OnDestroy {
  users: User[] = [];
  counts: { userCount: number, agentCount: number };
  dtTrigger: Subject<any> = new Subject();
  dtOptions: DataTables.Settings = {};
  constructor(private adminService: AdminService, private adminAuthService: AdminAuthService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    };
    this.adminService.getUsers();
    this.getCount();
    // console.log(this.counts);
    this.adminService.getUserStatusListener()
      .subscribe(responseData => {
        this.users = responseData;
        this.getCount();
        this.dtTrigger.next();
      });
  }

  onApprove(userId: string) {
    this.adminService.approve(userId);
    // this.getCount();
  }
  getCount() {
    this.adminService.getCounts().subscribe(responseData => {
      // console.log(responseData);
      this.counts = responseData;
    });
  }

  logout() {
    this.adminAuthService.logout();
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}
