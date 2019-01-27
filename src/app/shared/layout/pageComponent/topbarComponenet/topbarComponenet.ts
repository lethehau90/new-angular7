import { Component, OnInit, OnDestroy, ElementRef } from "@angular/core";
import { CachingService } from 'src/app/shared/services/caching.service';
import { Router } from '@angular/router';
import { access_token, isDashboard, token } from 'src/app/shared/share.constants';

@Component({
    selector : 'topbar-component',
    templateUrl : 'topbarComponenet.html',
    styleUrls : ['topbarComponenet.scss']
})

export class TopBarComponent implements OnInit, OnDestroy {

    constructor(
        private _cachingService : CachingService,
        private _router: Router,
        private _element : ElementRef,
    ){

    }

    ngOnInit(): void {

    }   
     ngOnDestroy(): void {

    }

    logout():void {
        this._cachingService.sessionStorage.remove(access_token);
        this._cachingService.sessionStorage.remove(isDashboard);
        this._cachingService.sessionStorage.remove(token);
        this._router.navigate(['/login']);
    }
}