import { Category } from './Category';

import { Recurrence } from '@/constants';

export type Expense = {
  id: number;
  name: string;
  description: string;
  amount: number;
  categoryId: number;
  categoryName: string;
  userId: number;
  currency: string;
  recurrence: Recurrence;
  creationDate: Date;
};

export type Summary = {
  categoryId: number;
  total: number;
  totalForCurrency: number;
  percentage: number;
  isRemaining?: boolean;
};

export type MonthSummary = {
  remainingAmount: number;
  remainingAmountForCurrency: number;
  remainingPercentage: number;
  totalExpended: number;
  totalExpendedForCurrency: number;
  summary: Summary[];
};

export type SummaryData = {
  [year: number]: {
    averageMonthlyExpense: number;
    averageMonthlyExpenseForCurrency: number;
    [month: number]: MonthSummary;
  };
};

export type SummaryResponse = {
  [year: number]: {
    averageMonthlyExpense: number;
    averageMonthlyExpenseForCurrency: number;
    [month: number]: MonthSummary;
  };
};

export type CategoryMonthSummary = {
  remainingAmount: number;
  remainingAmountForCurrency: number;
  remainingPercentage: number;
  totalExpended: number;
  totalExpendedForCurrency: number;
  summary: Expense[];
};

export type CategorySummaryData = {
  averageMonthly?: number;
  averageMonthlyForCurrency?: number;
  [year: number]: {
    [month: number]: CategoryMonthSummary;
  };
};

export type CategoriesMonthlySummaryData = {
  category: Category;
  totalExpended: number;
  totalExpendedForCurrency: number;
  percentage: number;
}[];

export type CategorySummaryResponse = {
  averageMonthly: number;
  averageMonthlyForCurrency: number;
  [month: number]: {
    remainingAmount: number;
    remainingAmountForCurrency: number;
    remainingPercentage: number;
    totalExpended: number;
    totalExpendedForCurrency: number;
    summary: Expense[];
  };
};

export type GetExpensesResponse = {
  data: Expense[];
  count: number;
  hasMore: boolean;
};
