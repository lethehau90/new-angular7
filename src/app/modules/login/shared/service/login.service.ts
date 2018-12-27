import { Injectable } from '@angular/core';
import { IloginModel } from '../model/login.model';
import { Observable } from 'rxjs';
import { ITokenModel } from '../model/token.model';
import { HttpClientService } from 'src/app/shared/helpers/http-client.service';

@Injectable()
export class LoginService {
    constructor(private _dataService: HttpClientService) {
    }
    login(loginModel: IloginModel): Observable<ITokenModel> {
        return this._dataService.post('/api/oauth/token', loginModel);
    }
}