import { Component, OnInit, OnDestroy } from "@angular/core";

@Component({
    selector : 'dashboard-component',
    templateUrl : 'dashboard.component.html',
    styleUrls : ['dashboard.component.scss']
})

export class DashBoardComponent implements OnInit, OnDestroy {

   
    constructor(){}
   
    ngOnInit(): void {
      //debugger;
    }   
    
    ngOnDestroy(): void {
        
    }  
}