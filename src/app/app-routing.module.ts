import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/helpers/auth-guard.service';

const routes: Routes = [
    {
      path : '', redirectTo : 'login', pathMatch : 'full'
    },
    {
      path : 'index', redirectTo : 'login', pathMatch : 'full',
    },
    {
      path: 'login', 
      loadChildren : './module/loginComponent/login.module#LoginModule'
    },
    {
      path : 'dashboard',
      loadChildren: './module/dashboardComponent/dashboard.module#DashBoardModule',
      canActivate: [AuthGuard]
    },
    {
      path : 'role',
      loadChildren : './module/roleComponent/role.module#RoleModule',
      canActivate: [AuthGuard]
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
