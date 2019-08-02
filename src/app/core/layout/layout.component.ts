import { StoreService } from './../store.service';
import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  settingsText = 'Toggle on';
  isLoading: boolean;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, public store: StoreService, private router: Router) {
    iconRegistry.addSvgIcon('home', sanitizer.bypassSecurityTrustResourceUrl('assets/home.svg'));
    iconRegistry.addSvgIcon('list', sanitizer.bypassSecurityTrustResourceUrl('assets/list.svg'));
    iconRegistry.addSvgIcon('settings', sanitizer.bypassSecurityTrustResourceUrl('assets/settings.svg'));

    router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });
   }

  ngOnInit() {
  }

  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.isLoading = true;
    }
    if (event instanceof NavigationEnd) {
      this.isLoading = false;
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.isLoading = false;
    }
    if (event instanceof NavigationError) {
      this.isLoading = false;
    }
  }

  click() {
    this.store.setCanViewSettings(!this.store.canViewSettings);
    this.settingsText = this.store.canViewSettings ? 'Toggle off' : 'Toggle on';
  }
}
