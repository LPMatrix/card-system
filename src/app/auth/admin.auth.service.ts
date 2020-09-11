import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { Auth } from './auth.model';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';
const BACKEND_URL = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})

export class AdminAuthService {
  token: string;
  private tokenTimer: any;
  private isAuthenticated = false;
  getAuthStatusListener = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient, private router: Router) { }

  login(user: Auth) {
    return this.http.post<{ token: string, expiresIn: string }>(BACKEND_URL + 'admin/login', user)
    .pipe(tap(responseData => this.onHandleAuthentication(responseData)));
  }
  private onHandleAuthentication(responseData: { token: string, expiresIn: string }) {
    const token = responseData.token;
    if (token) {
      this.token = token;
      const expiresIn = responseData.expiresIn;
      this.isAuthenticated = true;
      this.getAuthStatusListener.next(true);
      this.setTokenTimer(expiresIn);
      const dateNow = new Date();
      const expirationDate = new Date(dateNow.getTime() + +expiresIn * 1000);
      this.saveAuthData(token, expirationDate);
    }
  }
  getAdminAuthStatus() {
    return this.isAuthenticated;
  }
  getAuthStatusEventListener() {
    return this.getAuthStatusListener.asObservable();
  }
  getToken() {
    return this.token;
  }
  private setTokenTimer(expiresIn) {
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, expiresIn * 1000);
  }

  autoAuthAdmin() {
    const authInformation = this.getAuthData();

    if (!authInformation) {
      return;
    }
    const currentDate = new Date();
    const expiresIn = authInformation.expiresIn.getTime() - currentDate.getTime();

    if (expiresIn > 0) {
      this.token = authInformation.token;
      this.isAuthenticated = true;
      this.getAuthStatusListener.next(true);
      this.setTokenTimer(expiresIn / 1000);
    }
  }

  logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.getAuthStatusListener.next(false);
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    this.router.navigateByUrl('/admin/login');
  }

  private saveAuthData(token: string, expiresIn: Date) {
    localStorage.setItem('adminToken', token);
    localStorage.setItem('adminExpiresIn', expiresIn.toISOString());
  }

  private getAuthData() {
    const token = localStorage.getItem('adminToken');
    const expiresInDuration = localStorage.getItem('adminExpiresIn');
    if (!token || !expiresInDuration) {
      return;
    }
    return {
      token: token,
      expiresIn: new Date(expiresInDuration)
    };
  }

  private clearAuthData() {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminExpiresIn');
  }
  changeProfile(password: string, newpassword: string, confirmpassword: string) {
    const postData = {
      password: password,
      newpassword: newpassword,
      confirmpassword: confirmpassword
    }
    return this.http.post<{ message: string }>(BACKEND_URL + 'admin/profile', postData);
  }
}
