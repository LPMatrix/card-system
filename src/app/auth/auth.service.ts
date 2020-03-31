import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';
import { Auth } from './auth.model';
import { Agent } from '../shared/agent.model';
const BACKEND_URL = environment.apiUrl;


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private token: string;
  private tokenTimer: any;
  private isAuthenticated: boolean = false;
  private username: string;
  private userimage: string
  private authStatusListener = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient, private router: Router) { }

  login(user: Auth) {
    this.http.post<{ token: any, expiresIn: number, name: string, image:string }>( BACKEND_URL + 'agent/login', user)
      .subscribe(
        responseData => {
          const token = responseData.token;
          if (token) {
            this.token = token;
            const expiresIn = responseData.expiresIn;
            const name = responseData.name;
            const image = responseData.image;
            this.username = responseData.name;
            this.userimage = responseData.image;
            this.setTimer(expiresIn);
            this.isAuthenticated = true;
            this.authStatusListener.next(true);
            const dateNow = new Date();
            const expirationDate = new Date(dateNow.getTime() + expiresIn * 1000);
            console.log(expirationDate);
            this.saveAuthData(token, expirationDate, name, image);
            this.router.navigateByUrl('/agent/dashboard');
          }

        }
      );
  }
  getUserDetail() {
    const userInformation = {
      name : this.username,
      image : this.userimage
    };
    return userInformation;
  }
  getToken() {
    return this.token;
  }
  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }
  getAuthStatus() {
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
    this.router.navigate(['/agent', 'login']);
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
      this.username = authInformation.name;
      this.userimage = authInformation.image;
      this.setTimer(expiresIn / 1000)
    }
  }

  private saveAuthData(token: string, expiresIn: Date, name: string, image: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('expiresIn', expiresIn.toISOString());
    localStorage.setItem('name', name);
    localStorage.setItem('image', image)
  }

  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiresIn');
    localStorage.removeItem('image');
    localStorage.removeItem('name');
  }

  private getAuthData(){
    const token = localStorage.getItem('token');
    const expiresIn = localStorage.getItem('expiresIn');
    const name = localStorage.getItem('name');
    const image = localStorage.getItem('image');

    if (!token || !expiresIn) {
      return;
    }
    return {
      token: token,
      expirationDate: new Date(expiresIn),
      image : image,
      name : name
    }
  }

  getProfile () {
    return this.http.get<{agent: Agent}>(BACKEND_URL + 'agent/profile');
  }
}
