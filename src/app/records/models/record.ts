import { CashflowCategory } from '../../shared/models/cashflowCategory';

export class Record {
  id: number;
  value: number;
  datetime: Date;
  category: CashflowCategory;
  counterparty: string;
}
