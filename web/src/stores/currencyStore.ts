import { signal } from '@preact/signals'

export interface CurrencyState {
  currencies: Record<string, number>
  selectedCurrency: string
}
export const currencyState = signal<CurrencyState>({
  currencies: {},
  selectedCurrency: '',
})
