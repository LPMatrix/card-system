import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { AdminAuthService } from 'src/app/auth/admin.auth.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {

  uniqueID: string;
  user: any;

  constructor(private adminService: AdminService, private adminAuthService: AdminAuthService) { }

  ngOnInit(): void {
  }

  fetchUser(){
    if(this.uniqueID != '')
    this.adminService.getUserDetailById(this.uniqueID).subscribe(responseData => {
      this.user = responseData;
      console.log(this.user);
    });
  }

  logout() {
    this.adminAuthService.logout();
  }

}
