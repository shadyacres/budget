import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { SummaryComponent } from './components/summary/summary.component';
import { BudgetProgressComponent } from './components/budget-progress/budget-progress.component';

@NgModule({
  declarations: [DashboardComponent, SummaryComponent, BudgetProgressComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
