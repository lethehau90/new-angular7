export interface IDropDownElement {
    id: string,
    value: string
}

export class DropDownElement {
    id: string;
    value: string;
    constructor() {
        this.id = null;
        this.value = null;
    }
}