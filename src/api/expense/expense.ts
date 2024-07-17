import { CreateExpenseDTO, UpdateExpenseDTO } from './dto';
import ApiBase, { RestType } from '../ApiBase';

class ExpenseApi extends ApiBase {
  getExpense = (id: number) => {
    return this.call(`/expense/detail/${id}`);
  };

  getAllExpensesByUserId = (userId?: number) => {
    return this.call(`/expense/all/${userId}`);
  };

  createExpense = (createExpenseDTO: CreateExpenseDTO, userId?: number) => {
    return this.call(`/expense/${userId}`, {
      body: createExpenseDTO,
      method: RestType.POST,
    });
  };

  updateExpense = (updateExpenseDTO: UpdateExpenseDTO, userId?: number) => {
    return this.call(`/expense/${userId}`, {
      body: updateExpenseDTO,
      method: RestType.PATCH,
    });
  };

  getExpenseSummary = ({
    userId,
    month,
    year,
    categoryId,
  }: {
    userId?: number;
    month?: number;
    year?: number;
    categoryId?: number;
  }) => {
    let queryParams = [];

    if (userId !== undefined) {
      queryParams.push(`userId=${userId}`);
    }

    if (month !== undefined) {
      queryParams.push(`month=${month}`);
    }

    if (year !== undefined) {
      queryParams.push(`year=${year}`);
    }

    if (categoryId !== undefined) {
      queryParams.push(`categoryId=${categoryId}`);
    }

    const queryString =
      queryParams.length > 0 ? `?${queryParams.join('&')}` : '';

    return this.call(`/summary/userSummary${queryString}`);
  };

  getCategorySummary = ({
    userId,
    year,
    categoryId,
  }: {
    userId?: number;
    year?: number;
    categoryId?: number;
  }) => {
    let queryParams = [];

    if (userId !== undefined) {
      queryParams.push(`userId=${userId}`);
    }

    if (year !== undefined) {
      queryParams.push(`year=${year}`);
    }

    if (categoryId !== undefined) {
      queryParams.push(`categoryId=${categoryId}`);
    }

    const queryString =
      queryParams.length > 0 ? `?${queryParams.join('&')}` : '';

    return this.call(`/summary/categorySummary${queryString}`);
  };

  getCategoriesMonthlySummary = (userId?: number) => {
    return this.call(`/summary/categoriesMonthlySummary/${userId}`);
  };

  deleteExpense = (expenseId: number) => {
    return this.call(`/expense/${expenseId}`, {
      method: RestType.DELETE,
    });
  };

  getYears = (userId?: number) => {
    return this.call(`/expense/years/${userId}`);
  };

  getExpenses = ({
    userId,
    page,
    limit,
    searchString,
  }: {
    userId: number;
    page: number;
    limit: number;
    searchString?: string;
  }) => {
    let queryParams = [];

    if (userId !== undefined) {
      queryParams.push(`userId=${userId}`);
    }

    if (page !== undefined) {
      queryParams.push(`page=${page}`);
    }

    if (limit !== undefined) {
      queryParams.push(`limit=${limit}`);
    }

    if (searchString) {
      queryParams.push(`searchString=${searchString}`);
    }

    const queryString =
      queryParams.length > 0 ? `?${queryParams.join('&')}` : '';

    return this.call(`/expense/pagination${queryString}`);
  };
}

export default new ExpenseApi();
