import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
    imports : [
        CommonModule,
        MainRoutingModule,
        LayoutModule
    ],
    exports  : [],
    declarations : [MainComponent],
    providers : [],
})

export class MainModule {}