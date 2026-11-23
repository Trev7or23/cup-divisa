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
    <div class="flex flex-col items-center px-4 py-4 md:px-6 lg:px-10">
      <div class="relative flex w-full max-w-[540px] flex-col items-center">
        {/* Glow ambiental de la tarjeta */}

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
