import type { CurrencyState } from '@/stores/currencyStore'
import type { TasasResponse } from '@/types'

export function getInitialValues(data: TasasResponse): CurrencyState {
  const selectedCurrency = 'USD'
  return {
    currencies: data.tasas,
    selectedCurrency,
  }
}
