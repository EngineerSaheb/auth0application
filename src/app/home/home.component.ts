import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { 
  AuthService, 
} from 'ng-social-login-module';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/home/dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
  { path: '/home/user-management', title: 'User Management',  icon:'person', class: '' },
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  menuItems: any[];
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,
    private _socialAuthService: AuthService,
    private _router: Router,
    private _snackBar: MatSnackBar,

  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    this.menuItems = ROUTES.filter(menuItem => menuItem); 
  }

  signOut(): void {
    this._socialAuthService.signOut();  
      this._router.navigate(['/registerOrLogin']);
        this._snackBar.open(`LogOut successfull.`, 'Ok', {
          duration: 2000,
        });
  }
}
