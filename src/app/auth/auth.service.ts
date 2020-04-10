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
  private agentData = new BehaviorSubject<Agent>(null);
  private authStatusListener = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient, private router: Router) { }

  getAgentDataStatus() {
    return this.agentData.asObservable();
  }
  
  getAgentData() {
    this.http.get<{agent : Agent}>(BACKEND_URL + 'agent/profile')
    .subscribe(responseData => {
      console.log(responseData);
      this.agentData.next(responseData.agent);
    });
  }

  login(user: Auth) {
    this.http.post<{ token: any, expiresIn: number, agent : Agent }>( BACKEND_URL + 'agent/login', user)
      .subscribe(
        responseData => {
          const token = responseData.token;
          if (token) {
            this.token = token;
            const expiresIn = responseData.expiresIn;
            this.setTimer(expiresIn);
            this.isAuthenticated = true;
            this.authStatusListener.next(true);
            const dateNow = new Date();
            const expirationDate = new Date(dateNow.getTime() + expiresIn * 1000);
            console.log(expirationDate);
            this.saveAuthData(token, expirationDate);
            this.agentData.next(responseData.agent);
            this.router.navigateByUrl('/agent/dashboard');
          }

        }
      );
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
      this.setTimer(expiresIn / 1000)
    }
  }

  private saveAuthData(token: string, expiresIn: Date) {
    localStorage.setItem('token', token);
    localStorage.setItem('expiresIn', expiresIn.toISOString());
  }

  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiresIn');
  }

  private getAuthData(){
    const token = localStorage.getItem('token');
    const expiresIn = localStorage.getItem('expiresIn');

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
      email : email
    }
    return this.http.post<{message : string}>(BACKEND_URL + 'agent/reset', postData);
  }

  getResetPassword(token: string) {
    return this.http.get<{resetToken : string, agentId : string}>(BACKEND_URL + 'agent/reset/' + token);
  }

  postResetPassword(password: string, confirmpassword:string, token: string, agentId: string) {
    const postData = {
      password : password,
      token : token,
      agentId : agentId
    }
    return this.http.post<{message : string}>(BACKEND_URL + 'agent/reset/' + token, postData);
  }

  getProfile () {
    return this.http.get<{agent: Agent}>(BACKEND_URL + 'agent/profile');
  }

  changeProfile (agent : Agent) {
    return this.http.post<{agent : Agent}>(BACKEND_URL + 'agent/profile', agent);
  }
}
