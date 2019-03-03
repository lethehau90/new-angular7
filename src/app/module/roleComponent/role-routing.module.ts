import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ListRoleComponent } from './components/list-roles/list-role.component';
import { CreateRoleComponent } from './components/create-roles/create-role.component';
import { UpdateRoleComponent } from './components/update-roles/update-role.component';

const router : Routes = [
    {
        path : '',
        children: [
            {path : '', redirectTo  : 'role', pathMatch : 'full'},
            {
                path : '',
                component: ListRoleComponent,
                data: {
                    breadscrumbs: [
                        {
                            name : 'list roles',
                            route: '/role',
                            component: ListRoleComponent
                        }
                    ]
                }
            },
            {
                path : 'create',
                component : CreateRoleComponent,
                data : {
                    breadscrumbs : [
                        {
                            name : 'create role',
                            route : '/role/create',
                            component : CreateRoleComponent
                        }
                    ]
                }
            },
            {
                path: 'update/:id',
                component : UpdateRoleComponent,
                data : {
                    breadscrumbs : [
                        {
                            name : 'update role',
                            route : '/role/update',
                            component : UpdateRoleComponent
                        }
                    ]
                }
            }
        ]
    }
]

@NgModule({
    imports : [RouterModule.forChild(router)],
    exports : [RouterModule]
})

export class RoleRouting {};