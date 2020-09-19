import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ExcoAuthService } from './exco.auth.service';

@Injectable({providedIn: 'root'})
export class ExcoAuthGuard implements CanActivate {
  constructor(private ExcoAuthService: ExcoAuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    const isAuth = this.ExcoAuthService.getAuthStatus();
    if (!isAuth) {
      this.router.navigate(['/exco', 'login']);
    }
    return isAuth;
  }
}
