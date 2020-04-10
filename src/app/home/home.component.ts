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
  userInformation : {name: string, image: string};
  constructor(private userAuthService: UserAuthService) { }

  ngOnInit(): void {
    this.userInformation = this.userAuthService.getUserDetail();
    this.userAuthService.getProfile()
      .subscribe(responseData => {
        this.user = responseData.user;
      });
  }

  logout() {
    this.userAuthService.logout()
  }


}
