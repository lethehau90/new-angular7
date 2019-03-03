import { Component, OnInit, OnDestroy } from "@angular/core";
import { RoleService } from '../../shared/services/role.service';
import { IRoleModel } from '../../shared/models/role.model';
import { PagedResultParam } from 'src/app/shared/models/pagedResultParam.model';
import { forkJoin } from 'rxjs';

@Component({
    selector: 'list-role-component',
    templateUrl: './list-role.component.html',
    styleUrls: ['./list-role.component.scss']
})

export class ListRoleComponent implements OnInit, OnDestroy {

    constructor(private _roleService: RoleService) {

    }

    private paramUser = new PagedResultParam();
    public dataRole: IRoleModel;

    ngOnInit(): void {
        this.initCommonRequestRole();
    }

    ngOnDestroy(): void {

    }

    private loadFillDataSuccess(responseData): void {
        this.dataRole = responseData[0];
    }

    initCommonRequestRole(): void {
        forkJoin(this._roleService.getListRolePaging(this.paramUser)).subscribe(responseData => {
            this.loadFillDataSuccess(responseData);
        })
    }

}