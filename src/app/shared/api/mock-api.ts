import { records } from '../mocks/mock-records';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { mockBudgets, mockCashFlowSummary, mockBudgetSummary } from '../mocks/mock-entities';

export class MockApi implements InMemoryDbService {
  createDb() {
    return {budgets: mockBudgets, records, cashflowsummaries: mockCashFlowSummary, budgetsummaries: mockBudgetSummary};
  }
}
