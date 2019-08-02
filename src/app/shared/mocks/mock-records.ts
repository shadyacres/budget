import { Record } from './../../records/models/record';

import { CashflowCategory } from '../models/cashflowCategory';

export const cashflowCategories: CashflowCategory[] = [
  {
    id: 1,
    name: 'Food',
    counterpartyPatterns: [
      { value: 'mcdonalds' },
      { value: 'kfc' },
      { value: 'subway' }
    ]
  },
  {
    id: 2,
    name: 'Shopping',
    counterpartyPatterns: [
      { value: 'wallmart' },
      { value: 'kaufland' },
      { value: 'auchan' }]
  },
  {
    id: 3,
    name: 'Entertainment',
    counterpartyPatterns: [
      { value: 'rocky bowling' },
      { value: 'johnys pub' },
      { value: 'ricky bar' }
    ]
  },
  {
    id: 4,
    name: 'Transport',
    counterpartyPatterns: [
      { value: 'gas station' },
      { value: 'tube machine' }]
  },
  {
    id: 5,
    name: 'Cloths',
    counterpartyPatterns: [
      { value: 'tkmax' },
      { value: 'primark' }]
  }
];


function getRandomDate(): Date {
  const date = new Date();
  date.setMonth(9);
  date.setDate(Math.random() * 30 + 1);
  return date;
}

function getRandomCategory(): { category: CashflowCategory, counterparty: string } {
  const category = cashflowCategories[Math.floor(Math.random() * cashflowCategories.length)];
  const coutnerparty = category.counterpartyPatterns ? category.counterpartyPatterns[0].value : '';
  return {
    category,
    counterparty: (coutnerparty.charAt(0).toUpperCase() + coutnerparty.slice(1)).toString()
  };
}

function getRandomValue() {
  return Math.random() * 300;
}

function generateRecords() {
  const randomRecords: Record[] = [];
  for (let i = 0; i < 50; i++) {
    randomRecords.push(
      {
        id: i,
        value: getRandomValue(),
        datetime: getRandomDate(),
        ...getRandomCategory()
      }
    );
  }
  return randomRecords.sort((a, b) => (a.datetime as any) - (b.datetime as any));
}

export const records = generateRecords();
