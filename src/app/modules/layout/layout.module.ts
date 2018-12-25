import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { PanelHeadingComponent } from './panel-heading/panel-heading.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
    ],
    exports: [
        NavBarComponent,
        FooterComponent,
        SideBarComponent,
        PanelHeadingComponent
    ],
    declarations: [
        NavBarComponent,
        FooterComponent,
        SideBarComponent,
        PanelHeadingComponent
    ],
    providers: [

    ]

})

export class LayoutModule { }