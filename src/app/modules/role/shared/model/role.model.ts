export interface IRoleModel{
    Id: string,
    Name: string,
    Description: string
}

export class RoleModel {
    Id: string;
    Name: string;
    Description: string;
    constructor(){
        this.Id = null;
        this.Name = null;
        this.Description = null;
    }
}