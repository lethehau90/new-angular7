export interface IUserModel {
    FullName: string,
    BirthDay: string,
    RegisteredDate: string,
    Avatar: string,
    Balance: 0,
    Address: string,
    Gender: true,
    Status: true,
    Id: string,
    UserName: string,
    NormalizedUserName: string,
    Email: string,
    NormalizedEmail: string,
    EmailConfirmed: true,
    PasswordHash: string,
    SecurityStamp: string,
    ConcurrencyStamp: string,
    PhoneNumber: string,
    PhoneNumberConfirmed: true,
    TwoFactorEnabled: true,
    LockoutEnd: string,
    LockoutEnabled: true,
    AccessFailedCount: 0
}

export class UserModel {
    FullName: string;
    BirthDay: string;
    RegisteredDate: string;
    Avatar: string;
    Balance: number;
    Address: string;
    Gender: true;
    Status: true;
    Id: string;
    UserName: string;
    NormalizedUserName: string;
    Email: string;
    NormalizedEmail: string;
    EmailConfirmed: true;
    PasswordHash: string;
    SecurityStamp: string;
    ConcurrencyStamp: string;
    PhoneNumber: string;
    PhoneNumberConfirmed: true;
    TwoFactorEnabled: true;
    LockoutEnd: string;
    LockoutEnabled: true;
    AccessFailedCount: number;
    constructor() {
        this.FullName = null;
        this.BirthDay = null;
        this.RegisteredDate = null;
        this.Avatar = null;
        this.Balance = 0;
        this.Address = null;
        this.Gender = true;
        this.Status = true;
        this.Id = null;
        this.UserName = null;
        this.NormalizedUserName = null;
        this.Email = null;
        this.NormalizedEmail = null;
        this.EmailConfirmed = true;
        this.PasswordHash = null;
        this.SecurityStamp = null;
        this.ConcurrencyStamp = null;
        this.PhoneNumber = null;
        this.PhoneNumberConfirmed = true;
        this.TwoFactorEnabled = true;
        this.LockoutEnd = null;
        this.LockoutEnabled = true;
        this.AccessFailedCount = 0;
    }
}