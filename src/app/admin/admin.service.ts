import { Injectable } from '@angular/core';
import { Agent } from '../shared/agent.model';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { User } from '../shared/users.model';
import { AdminAuthService } from '../auth/admin.auth.service';
const BACKEND_URL = environment.apiUrl;
@Injectable({
    providedIn : "root"
})
export class AdminService {
    private agents : Agent[] = [];
    private agentStatusListener = new BehaviorSubject<Agent[]>([]);
    private users : User[] = [];
    private userStatusListener = new BehaviorSubject<User[]>([]);
    constructor(private http :  HttpClient, private router: Router, private adminAuthService: AdminAuthService) {}

    getCounts() {
        const adminToken = this.adminAuthService.getToken();
        return this.http.get<{userCount: number, agentCount: number}>(BACKEND_URL + 'admin/counts',
        {
            headers: new HttpHeaders({AdminAuthorization: "Bearer " + adminToken})
        }
        );
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
        postCredentials.append('branch', agent.branch);
        postCredentials.append('password', agent.password);
        postCredentials.append('image', agent.image, agent.name);
        const adminToken = this.adminAuthService.getToken();
        this.http.post<{agent: Agent}>(BACKEND_URL + 'admin/agent', postCredentials,
        {
            headers: new HttpHeaders({AdminAuthorization: "Bearer " + adminToken})
        }
        )
        .subscribe(responseData => {
            this.agents.push(responseData.agent);
            this.agentStatusListener.next(this.agents);
            this.router.navigateByUrl('/admin/dashboard');
        });
    }

    createExcoAgent(agent : Agent) {
        const postCredentials = new FormData();
        postCredentials.append('name', agent.name);
        postCredentials.append('email', agent.email);
        postCredentials.append('branch', agent.branch);
        postCredentials.append('password', agent.password);
        postCredentials.append('image', agent.image, agent.name);
        console.log(postCredentials.get('branch'))
        const adminToken = this.adminAuthService.getToken();
        this.http.post<{agent: Agent}>(BACKEND_URL + 'admin/agent', postCredentials,
        {
            headers: new HttpHeaders({AdminAuthorization: "Bearer " + adminToken})
        }
        )
        .subscribe(responseData => {
            this.agents.push(responseData.agent);
            this.agentStatusListener.next(this.agents);
            this.router.navigateByUrl('/admin/dashboard');
        });
    }
    geAgentUsers() {
        const adminToken = this.adminAuthService.getToken();
        this.http.get<{users : User[], agents: Agent[]}>(BACKEND_URL + 'admin/agents-users',
        {
            headers: new HttpHeaders({AdminAuthorization: "Bearer " + adminToken})
        })
        .subscribe(responseData => {
            this.users = responseData.users;
            this.agents = responseData.agents;
            this.userStatusListener.next(this.users);
            this.agentStatusListener.next(this.agents);
        });
    }
    editUser(user: any, userId: String) {
        const adminToken = this.adminAuthService.getToken();
        const postCredentials = new FormData();
        postCredentials.append('firstname', user.firstname);
        postCredentials.append('middlename', user.middlename);
        postCredentials.append('lastname', user.surname);
        postCredentials.append('email', user.email);
        postCredentials.append('gender', user.gender);
        postCredentials.append('dob', user.dob);
        postCredentials.append('zone', user.zone);
        postCredentials.append('phone_no', user.phone_no);
        postCredentials.append('signature', user.signature);
        postCredentials.append('vehicleNumber', user.vehicleNumber);
        postCredentials.append('verifiedId', user.verifiedId);
        postCredentials.append('verifiedIdType', user.verifiedIdType);
        postCredentials.append('transportation_type', user.transportation_type);
        postCredentials.append('next_of_kin_address', user.next_of_kin_address);
        postCredentials.append('next_of_kin_name', user.next_of_kin_name);
        postCredentials.append('next_of_kin_phone_no', user.next_of_kin_phone_no);
        postCredentials.append('address', user.address);
        postCredentials.append('image', user.image);
        // postCredentials.append('fingerprint_image', user.fingerprint_image);
        // postCredentials.append('fingerprint_encode', user.fingerprint_encode);
        console.log(user);
        // this.http.post<{ user: User }>(BACKEND_URL + 'agent/user', user,
        // {
        //     headers: new HttpHeaders({AdminAuthorization: "Bearer " + adminToken})
        // })
        //     .subscribe(responseData => {
        //         const getUser = [...this.users];
        //         const userFIlteredIndex = getUser.findIndex(p => p._id === userId)
        //         getUser[userFIlteredIndex] = responseData.user;
        //         this.users = [...getUser];
        //         this.userStatusListener.next(this.users);
        //         this.router.navigateByUrl('/admin/dashboard');
        //     });
    }
    approve(userId: string) {
        const adminToken = this.adminAuthService.getToken();
        const postData = {
            approval : true
        }
        this.http.post<{user : User}>(BACKEND_URL + 'admin/agent/user/approve/' + userId, postData,
        {
            headers: new HttpHeaders({AdminAuthorization: "Bearer " + adminToken})
        })
        .subscribe(responseData => {
            const getUsers = [...this.users];
            const userFiltered = getUsers.findIndex(p => p._id === userId);
            getUsers[userFiltered] = responseData.user;
            this.users = [...getUsers];
            this.userStatusListener.next(this.users);
        });
    }

    agentAccountStatus(agentId : string) {
        const adminToken = this.adminAuthService.getToken();
        const postData = {
            agentId : agentId
        }
        this.http.post<{agent : Agent}>(BACKEND_URL + 'admin/agent/account', postData,
        {
            headers: new HttpHeaders({AdminAuthorization: "Bearer " + adminToken})
        })
        .subscribe(responseData => {
            const agentFilter = this.agents.findIndex(p => p._id === agentId);
            this.agents[agentFilter] = responseData.agent;
            this.agentStatusListener.next(this.agents);
        });
    }
    deleteAgent(agentId : string) {
        const adminToken = this.adminAuthService.getToken();
        this.http.delete<{message : string}>(BACKEND_URL + 'admin/agent/remove/' + agentId,
        {
            headers: new HttpHeaders({AdminAuthorization: "Bearer " + adminToken})
        })
        .subscribe(responseData => {
            const getAgents = [...this.agents];
            const getFilteredAgent = getAgents.filter(p => p._id !== agentId);
            this.agents = [...getFilteredAgent];
            this.agentStatusListener.next(this.agents);
        });
    }

    getAgentRegisteredUsers(agentId: String) {
        const adminToken = this.adminAuthService.getToken();
        return this.http.get<{users: User[]}>(BACKEND_URL + 'admin/agent/' + agentId + '/registered',
        {
            headers: new HttpHeaders({AdminAuthorization: "Bearer " + adminToken})
        });
    }
    getUserDetailById(uniqueId: string) {
        const adminToken = this.adminAuthService.getToken();
        const postData = {
            uniqueId: uniqueId
        }
        return this.http.post<{user: User}>(BACKEND_URL + 'admin/user/uniqueId', postData,
        {
            headers: new HttpHeaders({AdminAuthorization: "Bearer " + adminToken})
        });
    }
    getUsersByUnit(unit: string) {
        const adminToken = this.adminAuthService.getToken();
        const postData = {
            unit: unit
        }
        return this.http.post<{users: User[]}>(BACKEND_URL + 'admin/users/unit', postData,
        {
            headers: new HttpHeaders({AdminAuthorization: "Bearer " + adminToken})
        });
    }
}