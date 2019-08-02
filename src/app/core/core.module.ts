import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { MatButtonModule, MatIconModule, MatProgressBarModule, MatProgressSpinnerModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MockApi } from '../shared/api/mock-api';
import { RouterModule } from '@angular/router';
import { SelectivePreloadingStrategy } from '../selective-preloading-strategy';



@NgModule({
  declarations: [LayoutComponent],
  imports: [
    RouterModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(MockApi, { delay: 500, passThruUnknownUrl: true })
  ],
  providers: [SelectivePreloadingStrategy],
  exports: [LayoutComponent]
})
export class CoreModule { }
