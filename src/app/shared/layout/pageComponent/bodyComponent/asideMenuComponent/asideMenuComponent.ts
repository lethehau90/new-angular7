import { Component, OnDestroy, OnInit } from "@angular/core";
import { SIDE_BARS } from 'src/app/shared/share.constants';
import { Router, NavigationEnd } from '@angular/router';

@Component({
    selector: "asideMenuComponent",
    templateUrl: "asideMenuComponent.html",
    styleUrls: ["asideMenuComponent.scss"]
})

export class AsideMenuComponent implements OnInit, OnDestroy {

    SIDE_BARS = SIDE_BARS;
    selectedParent: number = null;
    selectedChild: number = null;

    constructor(  private _router: Router,){
        const navigationSubscription = this._router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                console.log('Url :', event.url);
                this.checkSelectedRouter(event.url);
                //navigationSubscription.unsubscribe();
            }
        });
    }

    

    ngOnInit(): void {
    }

    checkSelectedRouter(path) {
        this.SIDE_BARS.forEach((parent, parentIndex) => {
            parent.isOpenMenu = false;
            if (parent.router && path.indexOf(parent.router) !== -1) {
                this.onSelectParent(parent, parentIndex);
                if (parent.child) {
                    parent.child.forEach((child, childIndex) => {
                        if (child.routerChild === path) {
                            this.onSelectChild(parentIndex, childIndex);
                        }
                    });
                }
            }
        });
    }

    onSelectChild(indexParent, indexChild) {
        this.selectedParent = indexParent;
        this.selectedChild = indexChild;
    }

    onSelectParent(item, indexParent) {
        item.isOpenMenu = !item.isOpenMenu;
        this.selectedParent = indexParent;
        this.selectedChild = null;
    }

    ngOnDestroy(): void {
    }
}