export interface ITokenModel {
    id: string,
    access_token: string,
    expires_in: number,
    fullName: string,
    email: string,
    avatar: string,
    role: string,
    permissions: string
}

export class TokenModel {
    id: string;
    access_token: string;
    expires_in: number;
    fullName: string;
    email: string;
    avatar: string;
    role: string;
    permissions: string;
    constructor(){
        this.id = null,
        this.access_token = null,
        this.expires_in = null,
        this.fullName = null,
        this.email = null,
        this.avatar = null,
        this.role = null,
        this.permissions = null
    }
}