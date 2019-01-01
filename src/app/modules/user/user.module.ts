import { NgModule } from "@angular/core";
import { ListUserCompoent } from './component/list-user/list-user.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { UserService } from './shared/service/user.service';
import { GenderPipe } from 'src/app/shared/pipes/gender.pipe';
import { PhonePipe } from 'src/app/shared/pipes/phone.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { PaggingComponent } from 'src/app/shared/components/pagging-component.ts/pagging-component';
@NgModule({
    imports : [
        CommonModule,
        FormsModule,
        NgxPaginationModule,
        UserRoutingModule
    ],
    exports : [],
    declarations : [
        ListUserCompoent,
        GenderPipe,
        PhonePipe,
        PaggingComponent
    ],
    providers :[
        UserService
    ]
})

export class UserModule {}