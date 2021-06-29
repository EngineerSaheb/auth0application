import { Component, OnInit, ViewChild} from '@angular/core';
import { FormControl, NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../auth.service';
import {MatSnackBar} from '@angular/material/snack-bar'
import { User } from '../user/user.model';
import { MatTabGroup } from '@angular/material';

import { 
  AuthService, 
  GoogleLoginProvider,
  FacebookLoginProvider,
  SocialUser
} from 'ng-social-login-module';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  hide = true;

  private user: SocialUser;
  private _loggedIn: boolean;

  public registerEmail = new FormControl('');
  public registerMobile = new FormControl('');
  public registerPassword = new FormControl('');
  public loginEmail = new FormControl('');
  public loginPassword = new FormControl('');

  constructor(
    private authService: AuthenticationService,
    private _router: Router,
    private _snackBar: MatSnackBar,
    private OAuth : AuthService
  ) { }

  ngOnInit() {
    this.OAuth.authState.subscribe((user) => {
      this.user = user;
      this._loggedIn = (user != null);
    });
  }
   
  
  register(key) {
    const submitdata = {};
        if(key === "ur") {
          submitdata['email'] = this.registerEmail['value'];
          submitdata['mobile_number'] = this.registerMobile['value'];
          submitdata['password'] = this.registerPassword['value'];
          submitdata['login_type'] = 'normal';
        }
        this.authService.registerUser(submitdata)
          .subscribe((res: any) => {
            if (res.success == true) {
              this._snackBar.open(`${res.message}`, 'Ok', {
                duration: 2000,
              });
            }
            else
              this._snackBar.open(`${res.message}`, 'Ok', {
                duration: 2000,
              });
        });
  }

  login(key){
    const submitdata = {};
    if (key === "ul") {
      submitdata['email'] = this.loginEmail['value'];
      submitdata['password'] = this.loginPassword['value'];
      submitdata['login_type'] = 'normal';
    } this.authService.registerUserLogin(submitdata).subscribe((LoginData: any) => {
        // console.log('LoginData :>> ', LoginData);
        // return
      if (LoginData.success == true) {
        this.authService.setSession(LoginData.data)
        // return
          this._router.navigate(['home/dashboard']);
            this._snackBar.open(`${LoginData.message}`, 'Ok', {
              duration: 2000,
            });
      }
    }, (error)=> {
      console.log('error :>> ', error);
    });
  }

  loggedIn() {
    return this.authService.isLoggedIn();
  }

// render register login tab  
  @ViewChild("registerOrLoginTab", {
    static: false
  })registerOrLoginTab: MatTabGroup;
  public registerOrLoginClick() {
    this.goToNextTabIndex(this.registerOrLoginTab);
  }
  private goToNextTabIndex(tabGroup: MatTabGroup) {
    if (!tabGroup || !(tabGroup instanceof MatTabGroup)) return;
    const tabCount = tabGroup._tabs.length;
    tabGroup.selectedIndex = (tabGroup.selectedIndex + 1) % tabCount;
  }
  
  
  // register and login with social loginOrSingup functionality
  signInGoogle(platform: string): void {
    const submitdata = {};
    platform = GoogleLoginProvider.PROVIDER_ID,
      this.OAuth.signIn(platform).then((userdata=>{
        this.user = userdata;
        // console.log('this.user :>> ', this.user);
        // console.log("user data - ", this.user.id);
        if (this.user) {
          submitdata['login_type'] = 'google';
          submitdata['email'] = this.user.email;
            this.authService.signIn(submitdata).subscribe((socialRegisterOrLogin: any) => {
              // console.log('socialRegisterOrLogin :>> ', socialRegisterOrLogin);
              // return
              if (socialRegisterOrLogin.success == true) {
                this.authService.setSession(socialRegisterOrLogin.data)
                  this._router.navigate(['home/dashboard']);
                    this._snackBar.open(`Social LoggedIn successfull.`, 'Ok', {
                      duration: 2000,
                    });
              } else {
                this._snackBar.open(socialRegisterOrLogin.message, 'Ok', {
                  duration: 2000,
                });
              }
            }, (error)=> {
                console.log('error :>> ', error);
            });
        } else {
          
        }
      }));
  }

  signInFB(platform: string): void {
    const submitdata = {};
    platform = FacebookLoginProvider.PROVIDER_ID,
      this.OAuth.signIn(platform).then((userdata=>{
        this.user = userdata;
        // console.log('this.user :>> ', this.user);
        // console.log("user data - ", this.user.id);
        if (this.user) {
          submitdata['login_type'] = 'facebook';
          submitdata['email'] = this.user.email;
            this.authService.signIn(submitdata).subscribe((socialRegisterOrLogin: any) => {
              // console.log('socialRegisterOrLogin :>> ', socialRegisterOrLogin);
              // return
              if (socialRegisterOrLogin.success == true) {
                this.authService.setSession(socialRegisterOrLogin.data)
                  this._router.navigate(['home/dashboard']);
                    this._snackBar.open(socialRegisterOrLogin.message, 'Ok', {
                      duration: 2000,
                    });
              } else {
                this._snackBar.open(socialRegisterOrLogin.message, 'Ok', {
                  duration: 2000,
                });
              }
            }, (error)=> {
                console.log('error :>> ', error);
            });
        } else {
          
        }
      }));
  }


}


