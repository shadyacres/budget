import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  canViewSettings = true;
  setCanViewSettings(toggle: boolean) {
    this.canViewSettings = toggle;
  }
}
