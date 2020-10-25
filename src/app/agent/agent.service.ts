import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { User } from '../shared/users.model';
import { BehaviorSubject, } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthService } from '../auth/auth.service';
import { ExcoAuthService } from '../auth/exco.auth.service';
import { tap } from 'rxjs/operators';
const BACKEND_URL = environment.apiUrl;
@Injectable({
    providedIn: "root"
})

export class AgentService {
    private users: User[] = [];
    private userStatusListener = new BehaviorSubject<User[]>([]);
    constructor(
        private http: HttpClient,
        private router: Router,
        private authService: AuthService,
        private excoAuthService: ExcoAuthService
    ) { }

    getUserStatusListener() {
        return this.userStatusListener.asObservable();
    }

    createUser(fingerId: string, user: User) {
        const postCredentials = {
            firstname: user.firstname,
            middlename: user.middlename,
            lastname: user.surname,
            email: user.email,
            gender: user.gender,
            dob: user.dob,
            zone: user.zone,
            unit: user.unit,
            phone_no: user.phone_no,
            state: user.state,
            signature: user.signature,
            vehicleNumber: user.vehicleNumber,
            verifiedId: user.verifiedId,
            verifiedIdType: user.verifiedIdType,
            transportation_type: user.transportation_type,
            next_of_kin_address: user.next_of_kin_address,
            next_of_kin_name: user.next_of_kin_name,
            next_of_kin_phone_no: user.next_of_kin_phone_no,
            branch: user.branch,
            address: user.address,
            image: user.image,
            uniqueId: user.uniqueId
        }
        const token = this.authService.getToken();
        return this.http.post<{ user: User }>(BACKEND_URL + 'agent/user/' + fingerId, user,
            {
                headers: new HttpHeaders({ Authorization: "Bearer " + token })
            }).pipe(tap(responseData => {
                this.users.push(responseData.user);
                this.userStatusListener.next(this.users);
            }));
    }

    getUsers() {
        const token = this.authService.getToken();
        return this.http.get<{ users: User[] }>(BACKEND_URL + 'agent/user',

            {
                headers: new HttpHeaders({ Authorization: "Bearer " + token })
            }).pipe(tap(responseData => {
                this.users = responseData.users;
                this.userStatusListener.next(this.users);
            }));
    }

    getExcoUsers() {
        const token = this.excoAuthService.getToken();
        return this.http.get<{ users: User[] }>(BACKEND_URL + 'agent/exco/users',

            {
                headers: new HttpHeaders({ ExcoAuthorization: "Bearer " + token })
            });
    }

    getUserDetailById(uniqueId: string) {
        const token = this.excoAuthService.getToken();
        const postData = {
            uniqueId: uniqueId
        }
        return this.http.post<{ user: User }>(BACKEND_URL + 'agent/exco/user/uniqueId', postData,
            {
                headers: new HttpHeaders({ ExcoAuthorization: "Bearer " + token })
            });
    }

    getUserByFingerId(fingerId: string) {
        const token = this.authService.getToken();
        return this.http.get<{ user: User }>(BACKEND_URL + 'agent/user/finger/' + fingerId,

            {
                headers: new HttpHeaders({ Authorization: "Bearer " + token })
            })
    }


}