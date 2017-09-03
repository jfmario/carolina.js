
import { Injectable } from '@angular/core';

@Injectable()
export class CarolinaService {
  
  public isConfirmed: Boolean = false;
  public isAdmin: Boolean = false;
  public currentUser: String = null;
  public currentToken: String = null;

  constructor() {}

  public check() {
    this.currentUser = window.localStorage.getItem('carolinaAuthenticationApp-carolinaUsername');
    this.currentToken = window.localStorage.getItem('carolinaAuthenticationApp-carolinaToken');
    console.log(this.currentUser, this.currentToken);
  }
}