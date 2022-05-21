export const formatCurrency = (cents: number, symbol: string) => {
    const price = cents / 100
    return `${symbol}${price.toFixed(2)}`;
};