import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { UserService } from '../../shared/service/user.service';
import { PaginationModel } from 'src/app/shared/models/pagination.model';
import { UserModel, IUserModel } from '../../shared/model/user.model';
import { IParamUser, ParamUser } from '../../shared/model/params-user.model';
import { IPagedResultParam } from 'src/app/shared/models/pagedResultParam.model';
import { IConfigPaging, ConfigPaging, ILablePaging, LablePaging } from '../../shared/model/config-page.model';

@Component({
    selector: 'list-user',
    templateUrl: 'list-user.component.html',
    styleUrls: ['list-user.component.scss']
})

export class ListUserCompoent implements OnInit, OnDestroy {

    constructor(private _userService: UserService) { }

    public configPaging: IConfigPaging = new ConfigPaging();

    private entityUser = new PaginationModel<UserModel[]>();
    private pagin = new ParamUser();

    public labels: ILablePaging = new LablePaging();

    public directionLinks: boolean = true;
    public autoHide: boolean = false;
    public responsive: boolean = true;

    ngOnDestroy(): void { }

    ngOnInit(): void {
        this.getPage(1);
    }

    getPage(page: number) {
        this.pagin.page = page;
        this._userService.getPagingUser(this.pagin).subscribe((res: any) => {
            this.entityUser = res;

            this.configPaging.id = "serverUser"
            this.configPaging.total = this.entityUser.TotalRows;
            this.configPaging.page = page;
            this.configPaging.pageSize = this.entityUser.PageSize;
            this.configPaging.maxPage = this.entityUser.MaxPage;
        })
    }
}