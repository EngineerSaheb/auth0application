import { NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { ReactiveFormsModule,FormsModule } from "@angular/forms";
import { MatDatepickerModule, MatSnackBarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarModule, WavesModule, ButtonsModule, NavbarComponent, LogoComponent, LinksComponent } from 'angular-bootstrap-md'
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MaterialModule } from '../material-module';
import { HomeRoutingModule } from './home-routing.module';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    // BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    NavbarModule,
    WavesModule,
    ButtonsModule,
    HomeRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatSelectModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [],
})
export class HomeModule { }
