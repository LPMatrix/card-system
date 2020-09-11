import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../auth/user.auth.service';
import { User } from '../shared/users.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: User;
  userInformation: User;
  constructor(private userAuthService: UserAuthService) { }

  ngOnInit(): void {
    this.userAuthService.getProfile()
      .subscribe(responseData => {
        this.user = responseData.user;
      });
    this.userAuthService.getUserDataStatus()
      .subscribe(responseData => {
        this.userInformation = responseData;
      });
  }

  logout() {
    this.userAuthService.logout()
  }


}
