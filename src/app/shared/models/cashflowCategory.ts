import { CounterpartyPattern } from './counterpartyPattern';

export class CashflowCategory {
  id: number;
  name = '';
  counterpartyPatterns?: CounterpartyPattern[] = [];
}
