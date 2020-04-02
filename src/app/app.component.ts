import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { AdminAuthService } from './auth/admin.auth.service';
import { UserAuthService } from './auth/user.auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecard-system';
  constructor(private userAuthService: UserAuthService,private authService: AuthService, private adminAuthService: AdminAuthService) {}
  ngOnInit() {
    this.userAuthService.autoAuthUser();
    this.authService.autoAuthUser();
    this.adminAuthService.autoAuthAdmin();
  }
}
