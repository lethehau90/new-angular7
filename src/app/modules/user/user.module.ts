import { NgModule } from "@angular/core";
import { ListUserCompoent } from './component/list-user/list-user.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { UserService } from './shared/service/user.service';
@NgModule({
    imports : [
        CommonModule,
        FormsModule,
        UserRoutingModule
    ],
    exports : [],
    declarations : [
        ListUserCompoent
    ],
    providers :[
        UserService
    ]
})

export class UserModule {}