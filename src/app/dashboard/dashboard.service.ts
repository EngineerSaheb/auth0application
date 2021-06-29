import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import * as moment from 'moment';
import { Http, Headers, URLSearchParams } from '@angular/http';

const HEADER = {
  headers: new Headers({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  serverUrl = environment.baseUrl;
  errorData: {};

  constructor(
    private _http: Http
    ) { }

  redirectUrl: string;

  public completeAddWorkingTask(submitdata){
    return this._http.post(`${this.serverUrl}/add/task`, JSON.stringify(submitdata), HEADER)
      .pipe(map(res => res.json()));
  }

}
