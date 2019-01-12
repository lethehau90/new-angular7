import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
      loadChildren: './module/dashboardComponent/dashboard.module#DashBoardModule'
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
