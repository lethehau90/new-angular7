import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            {
                path: '',
                component: DashboardComponent,
                data: {
                    breadscrums: [
                        {
                            name: 'Dashboard',
                            route: '/',
                            component: DashboardComponent
                        }
                    ]
                }
            }
        ]
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class DashboardRoutingModule { }