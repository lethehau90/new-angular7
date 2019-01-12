export interface IloginModel {
    UserName : string,
    Password : string
}

export class LoginModel {
    UserName : string ;
    Password : string  ;
    constructor() {
        this.UserName = null,
        this.Password = null
    }
}