import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { SideBarComponent } from './side-bar/side-bar.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
    ],
    exports: [
        NavBarComponent,
        FooterComponent,
        SideBarComponent
    ],
    declarations: [
        NavBarComponent,
        FooterComponent,
        SideBarComponent
    ],
    providers: [

    ]

})

export class LayoutModule { }