export interface IPagedResultParam {
    page: number,
    pageSize: number
}

export class PagedResultParam {
    page: number;
    pageSize: number;
    constructor(){
        this.page = 1;
        this.pageSize = 20;
    }
}