
export interface IPaginationModel<T> {
    PageIndex?: number,
    PageSize?: number,
    Count: number,
    TotalPage?: number,
    TotalRows?: number,
    MaxPage?: number,
    Items : T
  }

  export class PaginationModel<T> {
    PageIndex: number;
    PageSize: number;
    Count: number
    TotalPage: number;
    TotalRows: number;
    MaxPage: number;
    Items : T
    constructor(){
        this.PageIndex = 0;
        this.PageSize = 0;
        this.Count = 0;
        this.TotalPage = 0;
        this.TotalRows = 0;
        this.MaxPage = 0;
    }
  }