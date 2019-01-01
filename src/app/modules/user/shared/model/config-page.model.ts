

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