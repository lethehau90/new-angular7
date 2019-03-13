import { Component, OnInit, OnDestroy } from "@angular/core";
import { RoleService } from '../../shared/services/role.service';
import { IRoleModel, RoleModel } from '../../shared/models/role.model';
import { PagedResultParam } from 'src/app/shared/models/pagedResultParam.model';
import { forkJoin } from 'rxjs';
import { PaginationModel } from 'src/app/shared/models/pagination.model';

@Component({
    selector: 'list-role-component',
    templateUrl: './list-role.component.html',
    styleUrls: ['./list-role.component.scss']
})

export class ListRoleComponent implements OnInit, OnDestroy {

    constructor(private _roleService: RoleService) {

    }

    private paramUser = new PagedResultParam();
    public dataRole: PaginationModel<RoleModel[]> = new PaginationModel<RoleModel[]>();

    ngOnInit(): void {
        this.initCommonRequestRole();
    }

    ngOnDestroy(): void {

    }

    private loadFillDataSuccess(requestMutiData): void {
        this.dataRole = requestMutiData[0] ? requestMutiData[0] : [];
        console.log(this.dataRole)
    }

    initCommonRequestRole(): void {
        forkJoin(this._roleService.getListRolePaging(this.paramUser)).subscribe(requestMutiData => {
            this.loadFillDataSuccess(requestMutiData);
        })
    }

}