import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

const router : Routes = [
    {
        path : '', component : LoginComponent
    }
]

@NgModule({
    imports : [RouterModule.forChild(router)],
    exports : [RouterModule]
})

export class LoginRouting {};