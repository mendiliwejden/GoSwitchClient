import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import jwt_decode from 'jwt-decode';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const AUTHORITIES_KEY = 'AuthAuthorities';

@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {
  private roles: Array<string> = [];

  constructor(private route: Router) {

  }

  signOut(): void {
    window.localStorage.clear();
    this.route.navigate(['login']);
  }

  public saveToken(token: string): void {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return localStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user): void {
    window.localStorage.removeItem(USER_KEY);
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser(): any {
    return JSON.parse(localStorage.getItem(USER_KEY));
  }

  public saveAuthorities(authorities: string[]) {
    window.localStorage.removeItem(AUTHORITIES_KEY);
    window.localStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  }

  public getAuthorities(): string[] {
    this.roles = [];

    if (localStorage.getItem(TOKEN_KEY)) {
      this.roles = this.getUser().roles;
    }

    return this.roles;
  }

  public loggedIn() {
    return !!this.getToken();
  }

  isTokenExpired(): boolean {
    const token = this.getToken();
    const decoded: any = jwt_decode(token);

    if (decoded.exp === undefined) {
      console.log('decoded.exp undefined');
      return false;
    }

    const date = new Date(0);
    const tokenExpDate = date.setUTCSeconds(decoded.exp);
    if (tokenExpDate.valueOf() > new Date().valueOf()) {
      return true;
    } else {
      window.localStorage.clear();
      console.log('localStorage clear');
      return false;
    }

  }
}
