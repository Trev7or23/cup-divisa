import { currencies, selectedCurrency } from '@/stores/currencyStore'

const CURRENCY_NAMES: Record<string, string> = {
  USD: 'Dólar Estadounidense',
  EUR: 'Euro Europeo',
  MLC: 'Moneda Libremente Convertible',
  USDT: 'Tether Crypto USD',
}

function formatRate(value: number | undefined) {
  if (value === undefined || Number.isNaN(value)) return '—'
  return value.toLocaleString('es-ES', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

export default function Currencies() {
  const currencyCodes = Object.keys(currencies.value)
  const rate = currencies.value[selectedCurrency.value]
  const currencyName = CURRENCY_NAMES[selectedCurrency.value]
  const rateLabel = currencyName
    ? `1 ${currencyName} (${selectedCurrency.value})`
    : `1 ${selectedCurrency.value}`

  return (
    <article class="relative w-full overflow-hidden rounded-xl bg-surface-container p-4 shadow-2xl backdrop-blur-md sm:p-6">
      <div class="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-primary-container/70 to-transparent"></div>

      <header class="mb-4 w-full">
        <div class="mb-1 flex items-center justify-between gap-2">
          <span class="font-mono text-label-sm uppercase tracking-widest text-outline">
            Divisa de referencia
          </span>
          <span class="rounded-full bg-surface-container-high px-2 py-0.5 font-mono text-label-sm text-primary-container">
            Mercado Informal
          </span>
        </div>
        <div
          role="group"
          aria-label="Seleccionar divisa para monitor y conversión"
          class="grid grid-cols-4 gap-1 rounded-base bg-surface-container-lowest p-1"
        >
          {currencyCodes.map((currentCurrency) => {
            const isActive = currentCurrency === selectedCurrency.value
            return (
              <button
                type="button"
                aria-pressed={isActive}
                onClick={() => (selectedCurrency.value = currentCurrency)}
                class={`flex items-center max-w-[5ch] md:max-w-none  rounded-base px-1 py-2 font-headline text-headline-sm truncate text-right transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-container ${isActive
                    ? 'bg-surface-container-high text-primary-container shadow-sm'
                    : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
                  }`}
              >
                {currentCurrency}
              </button>
            )
          })}
        </div>
      </header>

      {/* Tasa activa */}
      <section
        aria-live="polite"
        class="flex w-full flex-col items-center rounded-lg bg-surface-container-low p-4 text-center sm:p-6"
      >
        <span class="mb-1 font-mono text-label-md uppercase tracking-wide text-on-surface-variant">
          {rateLabel}
        </span>
        <div class="my-1 flex items-baseline justify-center gap-2">
          <span class="font-mono text-4xl font-bold tracking-tight text-on-surface tabular-nums sm:text-5xl">
            {formatRate(rate)}
          </span>
          <span class="font-headline text-headline-sm font-semibold text-primary-container">
            CUP
          </span>
        </div>

        <a
          href="https://eltoque.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Ver cálculo de la tasa representativa en elTOQUE"
          class="group mt-3 inline-flex items-center gap-1.5 rounded-full bg-surface-container-high px-3 py-1 text-primary-fixed-dim shadow-[0_0_12px_rgba(0,245,212,0.15)] transition-all duration-200 hover:bg-surface-bright hover:text-on-surface hover:shadow-[0_0_16px_rgba(0,245,212,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-container"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            class="h-4 w-4 text-primary-container transition-transform group-hover:scale-110"
            aria-hidden="true"
          >
            <path
              d="M4 14l4-4 3 3 5-6 4 4"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M16 7h4v4"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
          <span class="font-mono text-label-sm font-semibold">
            Tasa representativa elTOQUE
          </span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            class="h-3.5 w-3.5 text-primary-container transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          >
            <path
              d="M7 17L17 7M17 7H9M17 7v8"
              stroke="currentColor"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </a>
      </section>
    </article>
  )
}
