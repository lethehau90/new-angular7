import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { UserService } from '../../shared/service/user.service';
import { PaginationModel } from 'src/app/shared/models/pagination.model';
import { UserModel, IUserModel } from '../../shared/model/user.model';
import {  ParamUser } from '../../shared/model/params-user.model';

@Component({
    selector: 'list-user',
    templateUrl: 'list-user.component.html',
    styleUrls: ['list-user.component.scss']
})

export class ListUserCompoent implements OnInit, OnDestroy {

    constructor(private _userService: UserService) { }
    private entityUser = new PaginationModel<UserModel[]>();
    private pagin = new ParamUser();

    ngOnDestroy(): void { }

    ngOnInit(): void {
        this.getPageEvent(1);
    }

    getPageEvent(page: number) {
        this.pagin.page = page;
        this._userService.getPagingUser(this.pagin).subscribe((res: any) => {
            this.entityUser = res;
        })
    }
}