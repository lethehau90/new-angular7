import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ListUserCompoent } from './component/list-user/list-user.component';

const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', redirectTo: 'list-user', pathMatch: 'full' },
            {
                path : '',
                component : ListUserCompoent,
                data : {
                    breadscrums : {
                        name : 'List User',
                        route: '/list-user',
                        component : ListUserCompoent
                    }
                }
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UserRoutingModule { }