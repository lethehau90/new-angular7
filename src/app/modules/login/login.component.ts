import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginModel, IloginModel } from './shared/model/login.model';
import { LoginModule } from './login.module';
import { LoginService } from './shared/service/login.service';
import { ITokenModel, TokenModel } from './shared/model/token.model';
import { CachingService } from 'src/app/shared/services/caching.service';
import { Router } from '@angular/router';
import { access_token } from 'src/app/shared/shared.constant';

@Component({
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
})

export class LoginComponent implements OnInit, OnDestroy {

    loginForm: FormGroup;
    login: IloginModel = new LoginModel();
    token: ITokenModel = new TokenModel();

    constructor(
        private _loginService: LoginService,
        private _cacheService : CachingService,
        private _router : Router
        ) { }

    ngOnInit(): void {
        this._initRequestFormLogin();
    }

    _initRequestFormLogin(): void {
        this.loginForm = new FormGroup({
            username: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required)
        })
    }

    OnSubmit(): void {
        this.login.UserName = this.loginForm.controls['username'].value;
        this.login.Password = this.loginForm.controls['password'].value;
        this._loginService.login(this.login).subscribe(response => {
            this.token = response;
            this._cacheService.sessionStorage.store(access_token,this.token.access_token);
            this._cacheService.sessionStorage.store("token",this.token);
            this._router.navigate(['/page/dashboard']);
        })
    }

    ngOnDestroy(): void {

    }

}