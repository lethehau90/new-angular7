import { IPagedResultParam, PagedResultParam } from 'src/app/shared/models/pagedResultParam.model';

export interface IParamUser extends IPagedResultParam  {
   filter : string
}

export class ParamUser implements PagedResultParam {
    page: number;
    pageSize: number;
    filter : string;
    constructor(){
        this.filter = null;
        this.page = 1;
        this.pageSize = 1;
    }
}