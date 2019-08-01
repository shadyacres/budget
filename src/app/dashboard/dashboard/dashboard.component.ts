import { CashflowCategory } from './../../shared/models/cashflowCategory';
import { Period } from './../../shared/models/period';
import { CashflowSummary } from './../models/cashflowSummary';
import { BudgetSummary } from './../models/budgetSummary';
import { Budget } from './../models/budget';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  budgetSummary = new BudgetSummary();
  cashflowSummary = new CashflowSummary();
  budgets: Budget[] = [];

  constructor() { }

  ngOnInit() {
    let s: string | null = 's';
    s = null;

    this.budgets.push(Budget.build({
      id: 1,
      current: 50,
      max: 150,
      period: new Period(5, 2012),
      category: { id: 5, name: 'general', }
    }));
    this.budgets.push(Budget.build({
      id: 2,
      current: 70,
      max: 150,
      period: new Period(6, 2012),
      category: { id: 2, name: 'shopping', }
    }));
  }

}
