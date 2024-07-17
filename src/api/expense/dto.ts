import { Expense } from '@/types';

export type BodyExpense = Omit<Expense, 'id' | 'userId' | 'amount'> & {
  amount: string;
};

export type CreateExpenseDTO = BodyExpense;

export type UpdateExpenseDTO = BodyExpense;
