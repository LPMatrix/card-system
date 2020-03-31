import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { User } from '../shared/users.model';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';
const BACKEND_URL = environment.apiUrl;
@Injectable({
    providedIn : "root"
})

export class AgentService {
    private users : User[] =[];
    private userStatusListener = new BehaviorSubject<User[]>(null);
    constructor(private http : HttpClient, private router : Router) {}

    getUserStatusListener() {
        return this.userStatusListener.asObservable();
    } 

    createUser(user: User) {
        this.http.post<{user : User}>(BACKEND_URL + 'agent/user', user)
        .subscribe(responseData => {
            this.users.push(responseData.user);
            this.userStatusListener.next(this.users);
            this.router.navigateByUrl('/agent/dashboard');
        });
    }

    getUsers() {
        this.http.get<{users : User[]}>(BACKEND_URL + 'agent/user')
        .subscribe(responseData => {
            this.users = responseData.users;
            this.userStatusListener.next(this.users);
        });
    }
    
    getCounts() {
        return this.http.get<{userCount: number}>(BACKEND_URL + 'agent/counts');
    }

    
}