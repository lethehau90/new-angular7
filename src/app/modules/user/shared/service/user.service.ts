import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientService } from 'src/app/shared/helpers/http-client.service';
import { PaginationModel } from 'src/app/shared/models/pagination.model';
import { UserModel } from '../model/user.model';
import { List_User_Paging } from '../model/list-user.model';

@Injectable()
export class UserService {
    constructor(private _dataService: HttpClientService) {
    }

    getPagingUser(params): Observable<PaginationModel<UserModel>> {
        return this._dataService.handleRequest(this._dataService.get(`${List_User_Paging}`, params));
    }

}