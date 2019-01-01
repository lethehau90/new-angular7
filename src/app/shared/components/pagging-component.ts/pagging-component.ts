import { Component, Input, Output, OnInit, OnDestroy, EventEmitter } from "@angular/core";
import {  ILablePaging, LablePaging } from 'src/app/modules/user/shared/model/config-page.model';

@Component({
    selector: 'pagging-component',
    templateUrl: 'pagging-component.html',
    styleUrls: ['pagging-component.scss']
})

export class PaggingComponent implements OnInit, OnDestroy {

    constructor() { }
    _data: any;
    @Input('data')
    set data(value: any) {
        this._data = value;
    }
    get data() {
        return this._data;
    }

    labels: ILablePaging = new LablePaging();

    @Output() ChangeEvent = new EventEmitter();

    public directionLinks: boolean = true;
    public autoHide: boolean = false;
    public responsive: boolean = true;

    ngOnDestroy(): void {
    }

    ngOnInit(): void {
    }

    changeSelectPerPage(event): void {
        this.ChangeEvent.emit(event);
    }
}