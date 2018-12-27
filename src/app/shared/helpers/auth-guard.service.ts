import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { access_token, page_login } from '../shared.constant';
import { CachingService } from '../services/caching.service';

@Injectable()
export class AuthGuard implements CanActivate {
    path: ActivatedRouteSnapshot[];
    route: ActivatedRouteSnapshot;
    constructor(private router: Router, private _caching : CachingService) {
    }
    canActivate(activateRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot) {
        if (this._caching.sessionStorage.get(access_token)) {
            return true;
        }
        else {
            this.router.navigate([page_login]);
            return false;
        }
    }
}