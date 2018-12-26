import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginModel, IloginModel } from './shared/model/login.model';
import { LoginModule } from './login.module';

@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
})

export class LoginComponent implements OnInit, OnDestroy {

    loginForm: FormGroup;
    login : IloginModel = new LoginModel();

    constructor() { }

    ngOnInit(): void {
        this._initRequestFormLogin();
    }

    _initRequestFormLogin(): void {
        this.loginForm = new FormGroup({
            username: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required)
        })
    }

    OnSubmit():void {
        debugger;
        this.login.UserName = this.loginForm.controls['username'].value;
        this.login.Password = this.loginForm.controls['password'].value;
        debugger;
    }

    ngOnDestroy(): void {

    }

}