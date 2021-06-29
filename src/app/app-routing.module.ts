import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './auth/user/user.component';

const routes: Routes = [
  { path: 'registerOrLogin', component: UserComponent },
  { path: '', redirectTo: '/registerOrLogin', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
            import('../app/home/home.module').then(
              m => m.HomeModule
            )
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
