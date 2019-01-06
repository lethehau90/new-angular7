import { Injectable } from "@angular/core";
import { HttpClientService } from 'src/app/shared/helpers/http-client.service';
import { RoleModel } from '../model/role.model';
import { apiGetListAllRole } from '../model/api-role.model';
import { Observable } from 'rxjs';

@Injectable()
export class RoleService {
    constructor(private _dataService : HttpClientService){}
    getAllRole():Observable<RoleModel> {
            return this._dataService.handleRequest(this._dataService.get(`${apiGetListAllRole}`));
    }
}