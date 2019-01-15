import { Component, OnInit, OnDestroy } from "@angular/core";
import { CachingService } from 'src/app/shared/services/caching.service';
import { access_token, isDashboard, token } from 'src/app/shared/share.constants';
import { Router } from '@angular/router';


@Component({
    selector : "headerComponent",
    templateUrl : "headerComponent.html",
    styleUrls : ["headerComponent.scss"]
})

export class HeaderComponent implements OnInit, OnDestroy {
    constructor(
        private _cachingService : CachingService,
        private _router: Router
    ){}

    ngOnDestroy():void {

    }

    ngOnInit(): void {
        
    }

    logout():void {
        this._cachingService.sessionStorage.remove(access_token);
        this._cachingService.sessionStorage.remove(isDashboard);
        this._cachingService.sessionStorage.remove(token);
        this._router.navigate(['/login']);
    }
}