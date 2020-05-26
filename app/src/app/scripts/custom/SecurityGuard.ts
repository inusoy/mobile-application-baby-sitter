import {
    Injectable
} from '@angular/core';
import {
    CanActivate,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    UrlTree
} from '@angular/router';
import {
    Observable
} from "rxjs/Observable";
import {
    ApperyioHelperService
} from '../apperyio/apperyio_helper';

/*
  See https://angular.io/guide/router for more info on guards.
*/


@Injectable({
    providedIn: 'root',
})
export class SecurityGuard implements CanActivate {

    constructor(private Apperyio: ApperyioHelperService, private router: Router) {

    }
    canActivate(next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable < boolean | UrlTree > | Promise < boolean | UrlTree > | boolean | UrlTree {
        console.log('SecurityGuard Guard called');

        if (this.Apperyio.data.getVariable("sessionToken")) {
            return true;
        } else {
            this.Apperyio.navigateTo("Login");
            return false;
        }
        return true;
    }
}

/*
    Guard class should be exported as ExportedClass
*/
export let ExportedClass = SecurityGuard;