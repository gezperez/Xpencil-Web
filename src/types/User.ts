export type OnboardingUser = {
  email?: string;
  name?: string;
  income?: number;
  currency?: string;
  conversionCurrency?: string;
  theme?: string;
  password?: string;
};

export type User = {
  id: number;
  email: string;
  name: string;
  currency: string;
  conversionCurrency: string;
  theme?: string;
  income: number;
};

export type NewUser = {
  id: number;
  email: string;
  name: string;
  currency: string;
  conversionCurrency: string;
  theme?: string;
  income: string;
};
