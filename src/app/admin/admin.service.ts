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
    private agentStatusListener = new BehaviorSubject<Agent[]>([]);
    private users : User[] = [];
    private userStatusListener = new BehaviorSubject<User[]>([]);
    constructor(private http :  HttpClient, private router: Router) {}

    getCounts() {
        return this.http.get<{userCount: number, agentCount: number}>(BACKEND_URL + 'admin/counts');
    }
    getAgentStatusListener() {
        return this.agentStatusListener.asObservable();
    }
    getUserStatusListener() {
        return this.userStatusListener.asObservable();
    } 
    createAgent(agent : Agent) {
        const postCredentials = new FormData();
        postCredentials.append('name', agent.name);
        postCredentials.append('email', agent.email);
        postCredentials.append('password', agent.password);
        postCredentials.append('image', agent.image, agent.name);
        this.http.post<{agent: Agent}>(BACKEND_URL + 'admin/agent', postCredentials)
        .subscribe(responseData => {
            this.agents.push(responseData.agent);
            this.agentStatusListener.next(this.agents);
            this.router.navigateByUrl('/admin/dashboard');
        });
    }
    geAgentUsers() {
        this.http.get<{users : User[], agents: Agent[]}>(BACKEND_URL + 'admin/agents-users')
        .subscribe(responseData => {
            this.users = responseData.users;
            this.agents = responseData.agents;
            this.userStatusListener.next(this.users);
            this.agentStatusListener.next(this.agents);
        });
    }
    approve(userId: string) {
        const postData = {
            approval : true
        }
        this.http.post<{user : User}>(BACKEND_URL + 'admin/agent/user/approve/' + userId, postData)
        .subscribe(responseData => {
            const getUsers = [...this.users];
            const userFiltered = getUsers.findIndex(p => p.id === userId);
            getUsers[userFiltered] = responseData.user;
            this.users = [...getUsers];
            this.userStatusListener.next(this.users);
        });
    }

    agentAccountStatus(agentId : string) {
        const postData = {
            agentId : agentId
        }
        this.http.post<{agent : Agent}>(BACKEND_URL + 'admin/agent/account', postData)
        .subscribe(responseData => {
            const agentFilter = this.agents.findIndex(p => p._id === agentId);
            this.agents[agentFilter] = responseData.agent;
            this.agentStatusListener.next(this.agents);
        });
    }
    deleteAgent(agentId : string) {
        this.http.delete<{message : string}>(BACKEND_URL + 'admin/agent/remove/' + agentId)
        .subscribe(responseData => {
            const getAgents = [...this.agents];
            const getFilteredAgent = getAgents.filter(p => p._id !== agentId);
            this.agents = [...getFilteredAgent];
            this.agentStatusListener.next(this.agents);
        });
    }
}