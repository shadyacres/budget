import { CashflowSummary } from './../models/cashflowSummary';
import { BudgetSummary } from './../models/budgetSummary';
import { Budget } from './../models/budget';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { forkJoin, Subscription, zip, Observable, fromEvent } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  budgetSummary: BudgetSummary;
  cashflowSummary: CashflowSummary;
  budgets: Budget[];
  subscriptions: Subscription[] = [];
  isLoading = true;

  constructor(public dashboardService: DashboardService) { }

  ngOnInit() {
    this.subscriptions.push(
    zip(
    this.dashboardService.getBudgetSummary(1),
    this.dashboardService.getCashflowSummary(1),
    this.dashboardService.getBudgets()).subscribe(([budgetSummary, cashflowSummary, budgets]) => {
      if (budgets) {
        this.budgets = budgets;
      }
      if (budgetSummary) {
        this.budgetSummary = budgetSummary;
      }
      if (cashflowSummary) {
        this.cashflowSummary = cashflowSummary;
      }
      if (budgets && budgetSummary && cashflowSummary) {
        this.isLoading = false;
      }
    }));
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
    this.subscriptions = [];
  }
}
