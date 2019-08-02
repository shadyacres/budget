import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'period-selector',
  templateUrl: './period-selector.component.html',
  styleUrls: ['./period-selector.component.scss']
})
export class PeriodSelectorComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('left', sanitizer.bypassSecurityTrustResourceUrl('assets/left.svg'));
    iconRegistry.addSvgIcon('right', sanitizer.bypassSecurityTrustResourceUrl('assets/right.svg'));
  }

  month = 10;
  year = 2017;

  ngOnInit() {
  }

}
