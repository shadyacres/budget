import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StoreService } from '../core/store.service';

@Injectable({
  providedIn: 'root'
})
export class SettingsGuard implements CanActivate, CanLoad {
constructor(public store: StoreService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canAccess();
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
      if (!this.store.canViewSettings) { alert(`Can't view settings`); }
      return this.canAccess();
  }

  canAccess = () => this.store.canViewSettings;
}
