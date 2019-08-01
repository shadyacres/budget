import { Budget } from '../../dashboard/models/budget';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { mockBudgets, mockCashFlowSummary, mockBudgetSummary } from '../mocks/mock-entities';

export class MockApi implements InMemoryDbService {
  createDb() {
    return {budgets: mockBudgets, cashflowsummaries: mockCashFlowSummary, budgetsummaries: mockBudgetSummary};
  }
}
