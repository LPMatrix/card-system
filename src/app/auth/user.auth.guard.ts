import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthService } from './user.auth.service';

@Injectable({providedIn: 'root'})
export class UserAuthGuard implements CanActivate {
  constructor(private userAuthService: UserAuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    const isAuth = this.userAuthService.getUserAuthStatus();
    if (!isAuth) {
      this.router.navigate(['/login']);
    }
    return isAuth;
  }
}
