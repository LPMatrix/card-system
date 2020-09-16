import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';
import { Auth } from './auth.model';
import { User } from '../shared/users.model';
import { tap } from 'rxjs/operators';
const BACKEND_URL = environment.apiUrl;


@Injectable({
  providedIn: 'root'
})

export class UserAuthService {
  private token: string;
  private tokenTimer: any;
  private isAuthenticated: boolean = false;
  private username: string;
  private userimage: string
  private userData = new BehaviorSubject<User>(null);
  private authStatusListener = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient, private router: Router, private userAuthService: UserAuthService) { }

  getUserDataStatus() {
    return this.userData.asObservable();
  }
  getUserData() {
    const userToken = this.userAuthService.getToken();
    this.http.get<{ user: User }>(BACKEND_URL + 'user/profile', 
    {
      headers: new HttpHeaders({UserAuthorization : "Bearer " + userToken})
    })
      .subscribe(responseData => {
        this.userData.next(responseData.user);
      });
  }
  
  login(user: Auth) {
    return this.http.post<{ token: any, expiresIn: number, user: User }>(BACKEND_URL + 'user/login', user)
      .pipe(tap(responseData => this.onHandleAuthentication(responseData)));
  }

  private onHandleAuthentication(responseData: { token: any, expiresIn: number, user: User }) {
    const token = responseData.token;
    if (token) {
      this.token = token;
      const expiresIn = responseData.expiresIn;
      this.setTimer(expiresIn);
      this.isAuthenticated = true;
      this.authStatusListener.next(true);
      const dateNow = new Date();
      const expirationDate = new Date(dateNow.getTime() + expiresIn * 1000);
      this.saveAuthData(token, expirationDate);
      this.userData.next(responseData.user);
    }
  }
  getToken() {
    return this.token;
  }
  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }
  getUserAuthStatus() {
    return this.isAuthenticated;
  }
  private setTimer(expiresIn) {
    console.log('Setting Timer: ' + expiresIn);
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, expiresIn * 1000);
  }
  logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    this.router.navigate(['/login']);
  }

  // Auto Login

  autoAuthUser() {
    const authInformation = this.getAuthData();
    if (!authInformation) {
      return;
    }
    const currentDateStamp = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - currentDateStamp.getTime();
    if (expiresIn > 0) {
      this.token = authInformation.token;
      this.isAuthenticated = true;
      this.authStatusListener.next(true);
      this.setTimer(expiresIn / 1000)
    }
  }

  private saveAuthData(token: string, expiresIn: Date) {
    localStorage.setItem('userToken', token);
    localStorage.setItem('userExpiresIn', expiresIn.toISOString());
  }

  private clearAuthData() {
    localStorage.removeItem('userToken');
    localStorage.removeItem('userExpiresIn');
  }

  private getAuthData() {
    const token = localStorage.getItem('userToken');
    const expiresIn = localStorage.getItem('userExpiresIn');

    if (!token || !expiresIn) {
      return;
    }
    return {
      token: token,
      expirationDate: new Date(expiresIn)
    }
  }

  forgotPassword(email: string) {
    const postData = {
      email: email
    }
    return this.http.post<{ message: string }>(BACKEND_URL + 'user/reset', postData);
  }

  getResetPassword(token: string) {
    return this.http.get<{ resetToken: string, userId: string }>(BACKEND_URL + 'user/reset/' + token);
  }

  postResetPassword(password: string, confirmpassword: string, token: string, userId: string) {
    const postData = {
      password: password,
      token: token,
      userId: userId
    }
    return this.http.post<{ message: string }>(BACKEND_URL + 'user/reset/' + token, postData);
  }

  getProfile() {
    const userToken = this.userAuthService.getToken();
    return this.http.get<{ user: User }>(BACKEND_URL + 'user/profile',
    {
      headers: new HttpHeaders({UserAuthorization : "Bearer " + userToken})
    });
  }

  changeProfile(password: string, newpassword: string, confirmpassword: string) {
    const userToken = this.userAuthService.getToken();
    const postData = {
      password: password,
      newpassword: newpassword,
      confirmpassword: confirmpassword
    }
    return this.http.post<{ message: string }>(BACKEND_URL + 'user/profile', postData,
    {
      headers: new HttpHeaders({UserAuthorization : "Bearer " + userToken})
    });
  }
}



