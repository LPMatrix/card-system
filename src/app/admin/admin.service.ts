import { Injectable } from '@angular/core';
import { Agent } from '../shared/agent.model';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { User } from '../shared/users.model';
const BACKEND_URL = environment.apiUrl;
@Injectable({
    providedIn : "root"
})
export class AdminService {
    private agents : Agent[] = [];
    private agentStatusListener = new BehaviorSubject<Agent[]>(null);
    private users : User[] =[];
    private userStatusListener = new BehaviorSubject<User[]>(null);
    constructor(private http :  HttpClient, private router : Router) {}

    getAgentStatusListener() {
        return this.agentStatusListener.asObservable();
    }
    getUserStatusListener() {
        return this.userStatusListener.asObservable();
    } 
    createAgent(agent : Agent) {
        // console.log(agent)
        this.http.post<{agent: Agent}>(BACKEND_URL + 'admin/agent', agent)
        .subscribe(responseData => {
            this.agents.push(responseData.agent);
            this.agentStatusListener.next(this.agents);
            this.router.navigateByUrl('/admin/dashboard');
        });
    }
    getUsers() {
        this.http.get<{users : User[]}>(BACKEND_URL + 'admin/agent/users')
        .subscribe(responseData => {
            
            this.users = responseData.users;
            this.userStatusListener.next(this.users);
        });
    }
    approve(userId: string) {
        const postData = {
            approval : true
        }
        this.http.post<{user : User}>(BACKEND_URL + 'admin/agent/user/approve/' + userId, postData)
        .subscribe(responseData => {
            // console.log(responseData.user);
            const getUsers = [...this.users];
            const userFiltered = getUsers.findIndex(p => p._id === userId);
            getUsers[userFiltered] = responseData.user;
            this.users = [...getUsers];
            this.userStatusListener.next(this.users);
            // console.log(this.users);

        });
    }
}