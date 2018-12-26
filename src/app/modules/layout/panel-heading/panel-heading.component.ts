import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
    selector: 'panel-heading',
    templateUrl: 'panel-heading.component.html',
    styleUrls: ['panel-heading.component.scss']
})

export class PanelHeadingComponent implements OnDestroy, OnInit {

    constructor() { }

    isOpen: boolean;

    ngOnInit(): void {
        localStorage.setItem("isOpen", "true");
    }

    OpenNav(event: any) {
        this.isOpen = JSON.parse(localStorage.getItem("isOpen"));
        if (this.isOpen) {
            $('.row-offcanvas-left').addClass('active');
            localStorage.setItem("isOpen", "false");
        }
        else {
            $('.row-offcanvas-left').removeClass('active');
            localStorage.setItem("isOpen", "true");
        }
    }


    ngOnDestroy(): void {

    }

}