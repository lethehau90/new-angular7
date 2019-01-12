import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/share.module';
import { LoginComponent } from './login.component';
import { LoginRouting } from './login-routing.module';
import { LoginService } from './shared/service/login.service';

@NgModule({
    imports : [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        LoginRouting
    ],
    declarations : [
        LoginComponent
    ],
    providers : [
        LoginService
    ]
})

export class LoginModule {}