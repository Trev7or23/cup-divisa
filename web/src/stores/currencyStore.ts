import { persistedSignal } from '@kamod-ch/signals'

// export interface CurrencyState {
//   currencies: Record<string, number>
//   selectedCurrency: string
// }
// export const currencyState = signal<CurrencyState>({
//   currencies: {},
//   selectedCurrency: '',
// })

export const currencies = persistedSignal<Record<string, number>>(
  'currencies',
  {},
  {
    storage: 'memory',
  },
)
export const selectedCurrency = persistedSignal('selectedCurrency', 'USD', {
  storage: 'local',
})
