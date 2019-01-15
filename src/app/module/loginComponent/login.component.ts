import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from './shared/service/login.service';
import { CachingService } from 'src/app/shared/services/caching.service';
import { Router } from '@angular/router';
import { IloginModel, LoginModel } from './shared/model/login.model';
import { ITokenModel, TokenModel } from './shared/model/token.model';
import { access_token, isDashboard, token } from 'src/app/shared/share.constants';
import { CheckHaveDashBoardService } from 'src/app/shared/services/checkHaveDashboard.service';

@Component({
    selector: 'login-component',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit, OnDestroy {

    loginForm: FormGroup;
    login: IloginModel = new LoginModel();
    token: ITokenModel = new TokenModel();

    constructor(
        private _loginService: LoginService,
        private _cacheService: CachingService,
        private _checkHaveDashboardService : CheckHaveDashBoardService,
        private _router: Router
    ) {
    }

    _initRequestForm(): void {
        this.loginForm = new FormGroup({
            UserName: new FormControl(null, Validators.required),
            Password: new FormControl(null, Validators.required)
        });
    }

    onSubmit(): void {
        this.login.UserName = this.loginForm.controls['UserName'].value;
        this.login.Password = this.loginForm.controls['Password'].value;
        this._loginService.login(this.login).subscribe(response => {
            this.token = response;
            this._cacheService.sessionStorage.store(access_token, this.token.access_token);
            this._cacheService.sessionStorage.store(token, this.token);
            this.injectDashboard();
            this._router.navigate(['/dashboard']);
        })
    }

    ngOnInit(): void {
        this._initRequestForm();
        if(this._cacheService.sessionStorage.get(access_token)){
            this._router.navigate(['/dashboard']);
        }
        else {
            this._checkHaveDashboardService.hideDashboard();
        }
    }

    ngOnDestroy(): void {
        
    }

    injectDashboard():void {
        this._checkHaveDashboardService.showDashboard();
        this._cacheService.sessionStorage.store(isDashboard,true);
    }
}