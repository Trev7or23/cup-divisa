import { currencies } from '@/stores/currencyStore'
import { getTimeAgo } from '@/utils/timeago'
import Currencies from './Currencies'

interface Props {
  currenciesData: Record<string, number>
  buildTime: string
}

export default function Home({ currenciesData, buildTime }: Props) {
  currencies.value = currenciesData

  const timeAgo = getTimeAgo(buildTime)

  return (
    <div class="flex flex-col items-center px-4 py-10 md:px-6 md:py-14 lg:px-10">
      <div class="relative flex w-full max-w-[540px] flex-col items-center">
        {/* Glow ambiental de la tarjeta */}
        <div
          aria-hidden="true"
          class="pointer-events-none absolute -left-16 -top-20 h-64 w-64 rounded-full bg-primary-container/10 blur-3xl"
        ></div>
        <div
          aria-hidden="true"
          class="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-secondary-container/15 blur-3xl"
        ></div>

        <div class="relative z-10 flex w-full flex-col items-center">
          {/* Pill de sincronización */}
          <div class="mb-2 flex w-full items-center justify-center gap-1.5 font-mono text-label-sm text-on-surface-variant">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              class="h-3.5 w-3.5 text-primary-fixed"
              aria-hidden="true"
            >
              <circle
                cx="12"
                cy="12"
                r="9"
                stroke="currentColor"
                stroke-width="1.8"
              ></circle>
              <path
                d="M12 7.5V12l3 1.8"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <span>Última sincronización: {timeAgo}</span>
          </div>

          <Currencies />
        </div>
      </div>
    </div>
  )
}
