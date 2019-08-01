import { CashflowSummary } from './../../dashboard/models/cashflowSummary';
import { BudgetSummary } from './../../dashboard/models/budgetSummary';
import { Budget } from './../../dashboard/models/budget';

import { Period } from '../models/period';

export const mockBudgets: Budget[] = [Budget.build({
  id: 1,
  current: 50,
  max: 150,
  period: new Period(5, 2012),
  category: { id: 5, name: 'general' },
}),
Budget.build({
  id: 2,
  current: 70,
  max: 150,
  period: new Period(6, 2012),
  category: { id: 2, name: 'shopping' }
})];

export const mockBudgetSummary = [new BudgetSummary()];
export const mockCashFlowSummary = [new CashflowSummary()];
