import { Component, OnInit, OnDestroy } from "@angular/core";
import { UserService } from '../../shared/service/user.service';
import { PaginationModel } from 'src/app/shared/models/pagination.model';
import { UserModel, IUserModel } from '../../shared/model/user.model';
import { IParamUser, ParamUser } from '../../shared/model/params-user.model';
import { IPagedResultParam } from 'src/app/shared/models/pagedResultParam.model';

@Component({
    selector : 'list-user',
    templateUrl : 'list-user.component.html',
    styleUrls : ['list-user.component.scss']
})

export class ListUserCompoent implements OnInit, OnDestroy {

    constructor(private _userService : UserService){}

    private entityUser = new PaginationModel<UserModel[]>();
    private params = new ParamUser();

    ngOnDestroy():void { }

    ngOnInit():void {
        this._userService.getPagingUser(this.params).subscribe((res : any)=> {
            this.entityUser = res;
        })
    }

}