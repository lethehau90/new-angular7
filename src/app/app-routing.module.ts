import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo : "dashboard",
    pathMatch : 'full'
  },
  {
    path : 'index',
    redirectTo : 'dashboard',
    pathMatch : 'full'
  },
  {
    path : 'dashboad',
    loadChildren : './modules/dashboard/dashboard.module#DashboardModule'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
