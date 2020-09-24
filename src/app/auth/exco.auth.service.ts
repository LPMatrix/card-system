import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';
import { Auth } from './auth.model';
import { Agent } from '../shared/agent.model';
import { tap } from 'rxjs/operators';
const BACKEND_URL = environment.apiUrl;


@Injectable({
  providedIn: 'root'
})

export class ExcoAuthService {
  private token: string;
  private tokenTimer: any;
  private isAuthenticated: boolean = false;
  private username: string;
  private userimage: string
  agentData = new BehaviorSubject<Agent>(null);
  private authStatusListener = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient, private router: Router) { }

  getAgentDataStatus() {
    return this.agentData.asObservable();
  }

  getAgentData() {
    const token = this.getToken();
    this.http.get<{ agent: Agent }>(BACKEND_URL + 'exco/agent/profile',
    {
      headers: new HttpHeaders({ExcoAuthorization: "Bearer " + token})
  })
      .subscribe(responseData => {
        this.agentData.next(responseData.agent);
      });
  }

  login(user: Auth) {
    return this.http.post<{ token: any, expiresIn: number, agent: Agent }>(BACKEND_URL + 'exco/agent/login', user)
      .pipe(tap(responseData => this.onHandleAuthentication(responseData)));
  }

  private onHandleAuthentication(responseData: { token: any, expiresIn: number, agent: Agent }) {
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
      this.agentData.next(responseData.agent);
    }
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
    this.router.navigate(['/exco', 'login']);
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
    localStorage.setItem('excoToken', token);
    localStorage.setItem('excoExpiresIn', expiresIn.toISOString());
  }

  private clearAuthData() {
    localStorage.removeItem('excoToken');
    localStorage.removeItem('excoExpiresIn');
  }

  private getAuthData() {
    const token = localStorage.getItem('excoToken');
    const expiresIn = localStorage.getItem('excoExpiresIn');

    if (!token || !expiresIn) {
      return;
    }
    return {
      token: token,
      expirationDate: new Date(expiresIn),
    }
  }


  forgotPassword(email: string) {
    const postData = {
      email: email
    }
    return this.http.post<{ message: string }>(BACKEND_URL + 'exco/agent/reset', postData);
  }

  getResetPassword(token: string) {
    return this.http.get<{ resetToken: string, agentId: string }>(BACKEND_URL + 'exco/agent/reset/' + token);
  }

  postResetPassword(password: string, confirmpassword: string, token: string, agentId: string) {
    const postData = {
      password: password,
      token: token,
      agentId: agentId
    }
    return this.http.post<{ message: string }>(BACKEND_URL + 'exco/agent/reset/' + token, postData);
  }

  getProfile() {
    const token = this.getToken();
    return this.http.get<{ agent: Agent }>(BACKEND_URL + 'agent/exco/profile',
      {
        headers: new HttpHeaders({ ExcoAuthorization: "Bearer " + token })
      });
  }

  changeProfile(agent: Agent) {
    const token = this.getToken();
    return this.http.post<{ agent: Agent }>(BACKEND_URL + 'agent/exco/profile', agent,
    {
      headers: new HttpHeaders({ ExcoAuthorization: "Bearer " + token })
    });
  }
}
