import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginService } from './shared/service/login.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        LoginRoutingModule,
        SharedModule    
    ],
    exports: [

    ],
    declarations: [
        LoginComponent
    ],
    providers: [
        LoginService
    ]
})

export class LoginModule { }