import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import * as moment from 'moment';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { User } from './user/user.model';

const HEADER = {
  headers: new Headers({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  serverUrl = environment.baseUrl;
  errorData: {};

  constructor(
    private _http: Http
    ) { }

  redirectUrl: string;

  public registerUser(submitdata){
    return this._http.post(`${this.serverUrl}/auth/register`, JSON.stringify(submitdata), HEADER)
      .pipe(map(res => res.json()));
  }

  public registerUserLogin(submitdata){
    return this._http.post(`${this.serverUrl}/auth/login`, JSON.stringify(submitdata), HEADER)
      .pipe(map(res => res.json()));
  }

  public signIn(submitdata) {
    return this._http.post(`${this.serverUrl}/auth/register`, JSON.stringify(submitdata), HEADER)
      .pipe(map(res => res.json()));
  }

  public setSession(authResult) {
    const expiresAt = moment().add(10000,'second');
    localStorage.setItem('identify_token', authResult.access_token);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
  }          

  logout() {
    localStorage.removeItem("identify_token");
    localStorage.removeItem("expires_at");
  }

  public isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }   

}
