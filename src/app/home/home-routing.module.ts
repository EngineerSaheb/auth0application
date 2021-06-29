import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component'
import { DashboardComponent } from '../dashboard/dashboard.component';
import { UserManagementComponent } from '../user-management/user-management.component';

const routes: Routes = [
  {
      path: '',
      component: HomeComponent,
      children: [
        {
          path: 'dashboard',
          component: DashboardComponent,
        },
        {
          path: 'user-management',
          component: UserManagementComponent,
        },
      ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
