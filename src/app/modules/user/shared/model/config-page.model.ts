export interface IConfigPaging {
    id: string,
    page: number,
    pageSize: number,
    total: number,
    maxPage: number
}

export class ConfigPaging {
    id: string;
    page: number;
    pageSize: number;
    total: number;
    maxPage: number;
    constructor() {
        this.id = "server",
        this.page = 1;
        this.pageSize = 10,
        this.maxPage = 10
    }
}

export interface ILablePaging {
    previousLabel: string,
    nextLabel: string,
    screenReaderPaginationLabel: string,
    screenReaderPageLabel: string,
    screenReaderCurrentLabel: string
}

export class LablePaging {
    previousLabel: string;
    nextLabel: string;
    screenReaderPaginationLabel: string;
    screenReaderPageLabel: string;
    screenReaderCurrentLabel: string;
    constructor() {
        this.previousLabel = 'Previous';
        this.nextLabel = 'Next';
        this.screenReaderPaginationLabel = 'Pagination';
        this.screenReaderPageLabel = 'page';
        this.screenReaderCurrentLabel = `You're on page`;
    }
}