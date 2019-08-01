import { CashflowSummary } from './../models/cashflowSummary';
import { BudgetSummary } from './../models/budgetSummary';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Budget } from '../models/budget';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  constructor(private httpClient: HttpClient) {}

  getBudgetSummary(id: number): Observable<BudgetSummary> {
    return this.httpClient.get<BudgetSummary>(`api/budgetsummaries/${id}`);
  }

  getCashflowSummary(id: number): Observable<CashflowSummary> {
    return this.httpClient.get<CashflowSummary>(`api/cashflowsummaries/${id}`);
  }

  getBudgets(): Observable<Budget[]> {
    return this.httpClient.get<Budget[]>('api/budgets').pipe(
      tap(f => console.log(f)),
      map(f => {
        const y: Budget[] = [];
        f.forEach((x) => y.push(Budget.build(x)));
        return y;
      }));
  }
}
