
import { Injectable } from '@angular/core';

import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AdminAPIService {

  public isConfirmed: Boolean = false;
  public isAdmin: Boolean = false;
  public currentUser: String = null;
  public currentToken: String = null;

  constructor( private http: Http) {}

  public check() {

    this.currentUser = window.localStorage.getItem('carolinaAuthenticationApp-carolinaUsername');
    this.currentToken = window.localStorage.getItem('carolinaAuthenticationApp-carolinaToken');

    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    this.http.post(
      '/auth/api/check',
      JSON.stringify({
        carolinaUser: this.currentUser,
        carolinaToken: this.currentToken
      }),
      { headers: headers }
    ).toPromise()
      .then(function(response) {
        console.log(response.json());
      }).catch(function(error) {
        console.log(error);
      });
  }
}
