import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [{
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'main', pathMatch: 'full' },
        {
            path: '',
            data: {
                breadscrums: [
                    {
                        name: 'Main',
                        router: '/main',
                        component: MainComponent
                    }
                ]
            }
        },
        { path: 'dashboard', loadChildren: '../dashboard/dashboard.module#DashboardModule' },
        { path: 'list-user', loadChildren: '../user/user.module#UserModule' }
    ]
}]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class MainRoutingModule { }