import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { ReactiveFormsModule,FormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './auth/user/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import { AuthenticationService } from './auth/auth.service';
// For MDB Angular Free
import { NavbarModule, WavesModule, ButtonsModule, LogoComponent, LinksComponent } from 'angular-bootstrap-md'
import { MDBBootstrapModule, DropdownModule } from 'angular-bootstrap-md';
// import { MbscModule } from '@mobiscroll/angular';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './home/home.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SidebarModule } from 'ng-sidebar';
import { HomeModule } from './home/home.module';
import { AddTaskComponent } from './dashboard/add-task/add-task.component';
import { UserManagementComponent } from './user-management/user-management.component';

import {
  SocialLoginModule, 
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
  LinkedinLoginProvider
} from 'ng-social-login-module';

import { environment } from '../environments/environment';

const CONFIG = new AuthServiceConfig([
  // {
  //   id: GoogleLoginProvider.PROVIDER_ID,
  //   provider: new GoogleLoginProvider(environment.google_auth0_clientId)
  // },
  // {
  //   id: FacebookLoginProvider.PROVIDER_ID,
  //   provider: new FacebookLoginProvider(environment.facekbook_auth0_clientId)
  // },
  // {
  //   id: LinkedinLoginProvider.PROVIDER_ID,
  //   provider: new LinkedinLoginProvider(environment.linkedin_auth0_clientId)
  // }
], true);

export function provideConfig() {
  return CONFIG;
}
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    NotificationsComponent,
    AddTaskComponent,
    UserManagementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    NavbarModule,
    WavesModule,
    ButtonsModule,
    MDBBootstrapModule.forRoot(),
    DropdownModule.forRoot(),
    MatSnackBarModule,
    HomeModule,
    SidebarModule.forRoot(),
    SocialLoginModule
  ],
  providers: [
    UserService,
    AuthenticationService,
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
