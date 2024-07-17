export const handleDecimalPart = (
  newMaskedAmount?: string,
  newUnmaskedAmount?: string,
): { newMaskedAmount: string; newUnmaskedAmount: string } => {
  // Delete dot when decimal part is undefined
  if (newMaskedAmount?.endsWith('.') || newUnmaskedAmount?.endsWith('.')) {
    return {
      newMaskedAmount: newMaskedAmount?.slice(0, -1) || '',
      newUnmaskedAmount: newUnmaskedAmount?.slice(0, -1) || '',
    };
  }

  // Complete decimal part with zero when decimal part has one character
  if (
    newMaskedAmount?.slice(-2, -1) === '.' ||
    newUnmaskedAmount?.slice(-2, -1) === '.'
  ) {
    return {
      newMaskedAmount: `${newMaskedAmount || ''}0`,
      newUnmaskedAmount: `${newUnmaskedAmount || ''}0`,
    };
  }

  return {
    newMaskedAmount: newMaskedAmount || '',
    newUnmaskedAmount: newUnmaskedAmount || '',
  };
};

export const addSuffix = (maskedNewAmount: string, suffix?: string): string =>
  `${maskedNewAmount}${suffix ? ` ${suffix}` : ''}`;

export const addCommas = (amount: string): string => {
  const formattedAmount = amount.replace('-', '');

  const [integerPart, decimalPart] = formattedAmount.split('.');

  let parsedIntegerPart = '';
  for (let i = 1; i <= integerPart.length; i++) {
    parsedIntegerPart = `${i % 3 === 0 && i !== integerPart.length ? ',' : ''}${
      integerPart[integerPart.length - i]
    }${parsedIntegerPart}`;
  }

  return parsedIntegerPart.concat(
    decimalPart !== undefined ? `.${decimalPart}` : '',
  );
};

export const formatMoney = (
  value: number | undefined,
  currency: string,
): string | undefined => {
  const { newUnmaskedAmount } = handleDecimalPart(undefined, value?.toString());
  if (newUnmaskedAmount) {
    if (newUnmaskedAmount.startsWith('-')) {
      return `${currency} -${addCommas(newUnmaskedAmount)}`;
    }

    return `${currency} ${addCommas(newUnmaskedAmount)}`;
  }

  return value?.toString();
};
export const formatDecimal = (value: string | number): string => {
  const { newUnmaskedAmount } = handleDecimalPart(undefined, value.toString());
  if (newUnmaskedAmount) return `${addCommas(newUnmaskedAmount)}`;
  return value.toString();
};
