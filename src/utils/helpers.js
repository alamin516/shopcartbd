export const formattedCurrency = (amount) => {
    const number = parseFloat(amount);
    if (isNaN(number)) {
      return 'Invalid amount';
    }
    const formatted = number.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    });
    return formatted.replace(/^(\D+)/, '$1').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  };
  