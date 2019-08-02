import { MockApi } from './api/mock-api';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatIconModule,
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule
} from '@angular/material';
import { PeriodSelectorComponent } from './components/period-selector/period-selector.component';

@NgModule({
  declarations: [PeriodSelectorComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ],
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    PeriodSelectorComponent
  ]
})
export class SharedModule {}
