import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { User } from '../shared/users.model';
import { BehaviorSubject, } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthService } from '../auth/auth.service';
const BACKEND_URL = environment.apiUrl;
@Injectable({
    providedIn: "root"
})

export class AgentService {
    private users: User[] = [];
    private userStatusListener = new BehaviorSubject<User[]>([]);
    constructor(private http: HttpClient, private router: Router, private authService: AuthService) { }

    getUserStatusListener() {
        return this.userStatusListener.asObservable();
    }

    createUser(fingerId: string, user: User) {
        const postCredentials = new FormData();
        postCredentials.append('firstname', user.firstname);
        postCredentials.append('middlename', user.middlename);
        postCredentials.append('lastname', user.surname);
        postCredentials.append('email', user.email);
        postCredentials.append('gender', user.gender);
        postCredentials.append('dob', user.dob);
        postCredentials.append('zone', user.zone);
        postCredentials.append('unit', user.unit);
        postCredentials.append('phone_no', user.phone_no);
        postCredentials.append('state', user.state);
        postCredentials.append('signature', user.signature);
        postCredentials.append('vehicleNumber', user.vehicleNumber);
        postCredentials.append('verifiedId', user.verifiedId);
        postCredentials.append('verifiedIdType', user.verifiedIdType);
        postCredentials.append('transportation_type', user.transportation_type);
        postCredentials.append('next_of_kin_address', user.next_of_kin_address);
        postCredentials.append('next_of_kin_name', user.next_of_kin_name);
        postCredentials.append('next_of_kin_phone_no', user.next_of_kin_phone_no);
        postCredentials.append('branch', user.branch);
        postCredentials.append('address', user.address);
        postCredentials.append('image', user.image);
        postCredentials.append('uniqueId', user.uniqueId);
        const token = this.authService.getToken();
        this.http.post<{ user: User }>(BACKEND_URL + 'agent/user/' + fingerId, user,
        {
            headers: new HttpHeaders({Authorization: "Bearer " + token})
        })
            .subscribe(responseData => {
                this.users.push(responseData.user);
                this.userStatusListener.next(this.users);
                this.router.navigateByUrl('/agent/dashboard');
            });
    }

    getUsers() {
        const token = this.authService.getToken();
        this.http.get<{ users: User[] }>(BACKEND_URL + 'agent/user',
        
        {
            headers: new HttpHeaders({Authorization: "Bearer " + token})
        })
            .subscribe(responseData => {
                this.users = responseData.users;
                this.userStatusListener.next(this.users);
            });
    }

    getUserByFingerId(fingerId: string) {
        const token = this.authService.getToken();
        return this.http.get<{ user: User }>(BACKEND_URL + 'agent/user/finger/' + fingerId,
        
        {
            headers: new HttpHeaders({Authorization: "Bearer " + token})
        })
    }


}