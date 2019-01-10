import { Injectable } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root'
})
export class NotifierService {
    constructor(private _toarst: ToastrService) { }
    toastrTime = 2000;

    showToastrSuccessMessage(message: any, title?: any) {
        this._toarst.success(message, title, {
            timeOut: this.toastrTime,
            closeButton: true,
            positionClass: 'toast-bottom-right'
        });
    }

    showToastrErrorMessage(message: any, title?: any) {
        this._toarst.error(message, title, {
            timeOut: this.toastrTime,
            closeButton: true,
            positionClass: 'toast-bottom-right'
        });
    }

    showToastrErrorMessageTOP(message: any, title?: any) {
        this._toarst.error(message, title, {
            closeButton: true,
            positionClass: 'toast-top-center'
        });
    }
}