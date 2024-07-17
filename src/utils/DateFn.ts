import {
  format,
  getMonth,
  getYear,
  isSameDay,
  isSameMonth,
  isSameYear,
} from 'date-fns';

export const getFormattedDate = (date?: Date | string) =>
  date && format(date, 'MM/dd/yyyy');

export const getCurrentMonth = () => getMonth(new Date());

export const getCurrentYear = () => getYear(new Date());

export const getMonthLabel = (month: number) => {
  const abbreviatedMonthName = format(new Date(2022, month, 1), 'MMM');

  return abbreviatedMonthName.substring(0, 2);
};

export const getIsSameDate = (
  date: Date | string,
  compareDate: Date | string,
) => {
  return (
    isSameDay(date, compareDate) &&
    isSameMonth(date, compareDate) &&
    isSameYear(date, compareDate)
  );
};
