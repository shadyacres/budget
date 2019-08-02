import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { SummaryComponent } from './components/summary/summary.component';
import { BudgetProgressComponent } from './components/budget-progress/budget-progress.component';
import { DashboardService } from './dashboard/dashboard.service';

@NgModule({
  declarations: [DashboardComponent, SummaryComponent, BudgetProgressComponent],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule
  ],
  exports: [DashboardRoutingModule],
  providers: [DashboardService]
})
export class DashboardModule { }
