export const formatNumberToCurrency = (value: number, hasPrefix?: boolean) => {
  const currency = value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  if (hasPrefix) return currency
  return currency.replace('R$', '').trim()
}
