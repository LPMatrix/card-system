import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/users.model';
import { AdminService } from '../admin.service';
import { AdminAuthService } from 'src/app/auth/admin.auth.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {
  users : User[] = []
  constructor(private adminService : AdminService, private adminAuthService: AdminAuthService) { }

  ngOnInit(): void {
    this.adminService.getUsers();
    this.adminService.getUserStatusListener()
    .subscribe(responseData => {
      this.users = responseData;
    });
  }

  onApprove(userId: string) {
   this.adminService.approve(userId);
  }

  logout() {
    this.adminAuthService.logout();
  }
}
