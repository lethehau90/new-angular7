import { Component , OnInit, OnDestroy} from "@angular/core";

@Component({
    selector : "footerComponent",
    templateUrl : "footerComponent.html",
    styleUrls : ["footerComponent.scss"]
})

export class FooterComponent implements OnInit, OnDestroy {

    ngOnDestroy(): void {

    }

    ngOnInit():void {
        
    }
}