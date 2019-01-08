import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { UserService } from '../../shared/service/user.service';
import { PaginationModel } from 'src/app/shared/models/pagination.model';
import { UserModel, IUserModel } from '../../shared/model/user.model';
import { ParamUser } from '../../shared/model/params-user.model';
import { forkJoin } from 'rxjs';
import { RoleService } from 'src/app/modules/role/shared/service/role.service';
import { IDropDownElement, DropDownElement } from 'src/app/shared/models/drop-down.model';
import { IRoleModel } from 'src/app/modules/role/shared/model/role.model';

@Component({
    selector: 'list-user',
    templateUrl: 'list-user.component.html',
    styleUrls: ['list-user.component.scss']
})

export class ListUserCompoent implements OnInit, OnDestroy {

    constructor(
        private _userService: UserService,
        private _roleService: RoleService
    ) { }
    private entityUser = new PaginationModel<UserModel[]>();
    private pagin = new ParamUser();
    private dropDownAllRole: IDropDownElement = new DropDownElement();

    ngOnDestroy(): void { }

    ngOnInit(): void {
        this.getPageEvent(1);
        this.initCommonRequestUser();
    }

    getPageEvent(page: number) {
        this.pagin.page = page;
        this._userService.getPagingUser(this.pagin).subscribe((res: any) => {
            this.entityUser = res;
        })
    }

    initCommonRequestUser(): void {
        forkJoin(this._roleService.getAllRole()).subscribe((requestMutiData: any) => {
            let allRole: any = requestMutiData[0] ? requestMutiData[0] : [];
            this.dropDownAllRole = allRole.map((role: IRoleModel) => {
                return {
                    id: role.Id,
                    value: role.Name
                }
            })
        });
    }

    onSelectedRoles(event):void {
        debugger;
    }
}