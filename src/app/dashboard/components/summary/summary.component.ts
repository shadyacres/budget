import { Component, OnInit, Input } from '@angular/core';
import { BudgetSummary } from '../../models/budgetSummary';
import { CashflowSummary } from '../../models/cashflowSummary';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

@Input() budgetSummary: BudgetSummary;
@Input() cashflowSummary: CashflowSummary;

  constructor() { }

  ngOnInit() {
  }

}
