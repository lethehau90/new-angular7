import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/share.module';
import { DashBoardComponent } from './dashboard.component';
import { DashBoardRouting } from './dashboard-routing.module';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        SharedModule,
        DashBoardRouting
    ],
    declarations: [
        DashBoardComponent
    ],
    providers : [

    ]
})

export class DashBoardModule {}