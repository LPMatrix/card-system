import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { AdminAuthService } from './admin.auth.service';
import { UserAuthService } from './user.auth.service';

@Injectable({providedIn: 'root'})
export class AuthInterceptor implements HttpInterceptor {
  constructor(private userAuthService : UserAuthService,private authService: AuthService, private adminAuthService: AdminAuthService) {
    // ...
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.getToken();
    const userToken = this.userAuthService.getToken();
    const adminToken = this.adminAuthService.getToken();
    const authRequest = req.clone({
      headers : new HttpHeaders({
        Authorization: "Bearer " + token,
        AdminAuthorization: "Bearer " + adminToken,
        UserAuthorization : "Bearer " + userToken
      })
    });
    return next.handle(authRequest);
  }
}
