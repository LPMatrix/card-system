import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { User } from '../shared/users.model';
import { BehaviorSubject, } from 'rxjs';
import { environment } from '../../environments/environment';
const BACKEND_URL = environment.apiUrl;
@Injectable({
    providedIn : "root"
})

export class AgentService {
    private users : User[] =[];
    private userStatusListener = new BehaviorSubject<User[]>([]);
    constructor(private http : HttpClient, private router : Router) {}

    getUserStatusListener() {
        return this.userStatusListener.asObservable();
    } 

    createUser(user: User) {
        const postCredentials = new FormData();
        postCredentials.append('firstname', user.firstname);
        postCredentials.append('middlename', user.middlename);
        postCredentials.append('lastname', user.lastname);
        postCredentials.append('email', user.email);
        postCredentials.append('gender', user.gender);
        postCredentials.append('dob', user.dob);
        postCredentials.append('zone', user.zone);
        postCredentials.append('unit', user.unit);
        postCredentials.append('phone_no', user.phone_no);
        postCredentials.append('state', user.state);
        postCredentials.append('vehicle_no', user.vehicle_no);
        postCredentials.append('password', user.password);
        postCredentials.append('image', user.image);
        postCredentials.append('fingerprint_thumb', user.fingerprint_thumb);
        postCredentials.append('fingerprint_index', user.firstname);

        this.http.post<{user : User}>(BACKEND_URL + 'agent/user', postCredentials)
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

    getStates() {
        return this.http.get("/assets/json/states.json");
    }

    
}