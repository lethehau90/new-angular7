import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { DashBoardComponent } from './dashboard.component';

const router : Routes = [
    {
        path : '', component : DashBoardComponent
    }
]

@NgModule({
    imports : [RouterModule.forChild(router)],
    exports : [RouterModule]
})

export class DashBoardRouting {}