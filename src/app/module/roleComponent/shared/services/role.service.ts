import { Injectable } from "@angular/core";
import { HttpClientService } from 'src/app/shared/helpers/http-client.service';
import { Observable } from 'rxjs';
import { PaginationModel } from 'src/app/shared/models/pagination.model';
import { RoleModel } from '../models/role.model';
import { apiGetListRolePaging } from '../../role.constant';

@Injectable()
export class RoleService {
    constructor(private _dataService : HttpClientService){}

    getListRolePaging(params): Observable<PaginationModel<RoleModel>> {
        return this._dataService.handleRequest(this._dataService.get(`${apiGetListRolePaging}`, params));
    }
}
