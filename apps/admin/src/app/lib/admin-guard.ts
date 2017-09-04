
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot }
    from '@angular/router';
import { AdminAPIService } from './admin-api.service';

@Injectable()
export class AdminGuard implements CanActivate {

    constructor ( private adminAPIService: AdminAPIService,
        private router: Router ) {}

    canActivate ( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {

        let url: string = state.url;

        if ( this.adminAPIService.isAdmin )
            return true;
        else
        {
            this.router.navigate ( ['/redirect'] );
        }
    }
};
