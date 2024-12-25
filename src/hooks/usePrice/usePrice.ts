export const useCurrencyFormatter = () => {
  const formatter = new Intl.NumberFormat("en-GB", {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const formatCurrency = (amount: number) => {
    const formattedAmount = formatter.format(amount);
    return `${formattedAmount} €`;
  };

  return formatCurrency;
};
