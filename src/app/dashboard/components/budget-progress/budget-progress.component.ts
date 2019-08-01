import { Component, OnInit, Input } from '@angular/core';
import { Budget } from '../../models/budget';

@Component({
  selector: 'app-budget-progress',
  templateUrl: './budget-progress.component.html',
  styleUrls: ['./budget-progress.component.scss']
})
export class BudgetProgressComponent implements OnInit {


  constructor() { }
  @Input() budget: Budget;
  today = '60%';

  ngOnInit() {
  }
}
