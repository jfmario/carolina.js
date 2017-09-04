
import { Injectable } from '@angular/core';

import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AdminAPIService {

  private headers = new Headers({
    'Content-Type': 'application/json'
  });

  public isConfirmed: Boolean = false;
  public isAdmin: Boolean = false;
  public currentUser: String = null;
  public currentToken: String = null;

  constructor( private http: Http) {}

  public async check(): Promise<Boolean> {

    this.currentUser = window.localStorage.getItem('carolinaAuthenticationApp-carolinaUsername');
    this.currentToken = window.localStorage.getItem('carolinaAuthenticationApp-carolinaToken');

    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    try {
      let res = await this.http.post(
        '/auth/api/admin-check',
        JSON.stringify({
          carolinaUser: this.currentUser,
          carolinaToken: this.currentToken
        }),
        { headers: headers }
      ).toPromise();
      this.isAdmin = true;
      return true;
    } catch (error) {
      return false;
    }
  }
  public async post(endpoint, data): Promise<any> {

    data.carolinaUser = this.currentUser;
    data.carolinaToken = this.currentToken;

    var baseUrl = window.location.pathname.split('/')[1] + '/api';

    try {
      let res = await this.http.post(
        baseUrl + endpoint,
        JSON.stringify(data),
        { headers: this.headers }
      ).toPromise();
      return res.json();
    } catch (error) {
      return error;
    }
  }
}
