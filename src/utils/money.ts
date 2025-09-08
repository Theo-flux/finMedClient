export function ccyFormatter(p: string | number) {
  return new Intl.NumberFormat('en-NG', {
    currencyDisplay: 'narrowSymbol',
    style: 'currency',
    currency: 'NGN',
    notation: 'standard'
  }).format(Number(p));
}

export function calculatedAmount(gross: number, taxPercent: number, discountPercent: number) {
  const taxAmount = gross * (taxPercent / 100);
  const discountAmount = (gross + taxAmount) * (discountPercent / 100);
  return gross + taxAmount - discountAmount;
}

export function figFormatter(p: number) {
  return new Intl.NumberFormat('en-NG').format(p);
}
export function taxAmount(gross: number, taxPercent: number) {
  return gross * (taxPercent / 100);
}

export function discountAmount(gross: number, taxPercent: number, discountPercent: number) {
  const taxAmount = gross * (taxPercent / 100);
  return (gross + taxAmount) * (discountPercent / 100);
}
