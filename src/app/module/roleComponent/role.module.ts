import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/share.module';
import { ListRoleComponent } from './components/list-roles/list-role.component';
import { CreateRoleComponent } from './components/create-roles/create-role.component';
import { UpdateRoleComponent } from './components/update-roles/update-role.component';
import { RoleRouting } from './role-routing.module';
import { RoleService } from './shared/services/role.service';

@NgModule({
    imports : [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        RoleRouting
    ],
    declarations : [
        ListRoleComponent,
        CreateRoleComponent,
        UpdateRoleComponent
    ],
    providers : [
        RoleService
    ]

})
export class RoleModule{}