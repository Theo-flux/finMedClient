export function ccyFormatter(p: string | number) {
  return new Intl.NumberFormat('en-NG', {
    currencyDisplay: 'narrowSymbol',
    style: 'currency',
    currency: 'NGN',
    notation: 'standard'
  }).format(Number(p));
}

export function figFormatter(p: number) {
  return new Intl.NumberFormat('en-NG').format(p);
}
