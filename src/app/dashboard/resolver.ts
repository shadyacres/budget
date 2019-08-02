import { DashboardService } from './dashboard/dashboard.service';
import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class Resolver implements Resolve<Observable<string>> {
  constructor(private service: DashboardService) { }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string> {
    return of('hello');
  }
}
