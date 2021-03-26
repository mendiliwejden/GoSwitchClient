import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {TokenStorageService} from './token-storage.service';
import {NotificationService} from './notification.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private tokenStorageService: TokenStorageService,
              private router: Router) {
  }

  canActivate(): boolean {
    if (this.tokenStorageService.loggedIn()) {
      console.log('true');
      return true;
    } else {
      console.log('false');
      this.router.navigate(['/login']);
      return false;
    }
  }
}
