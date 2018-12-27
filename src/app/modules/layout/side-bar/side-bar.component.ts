import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { CachingService } from 'src/app/shared/services/caching.service';
import { SIDE_BARS } from '../layout.constant';

@Component({
    selector : "side-bar",
    templateUrl : "side-bar.component.html",
    styleUrls : ["side-bar.component.scss"]
})

export class SideBarComponent implements OnInit, OnDestroy {
    constructor(private _caching : CachingService){}
    Side_Bar = SIDE_BARS;

    ngOnDestroy(): void {
        
    }
    ngOnInit(): void {
       
    }

}