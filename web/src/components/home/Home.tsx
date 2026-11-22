import { currencyState, type CurrencyState } from '@/stores/currencyStore'
import { getTimeAgo } from '@/utils/timeago'
import Currencies from './Currencies'

interface Props {
  initialData: CurrencyState
  buildTime: string
}
export default function Home({ initialData, buildTime }: Props) {
  currencyState.value = initialData
  const timeAgo = getTimeAgo(buildTime)

  return (
    <main class="flex flex-col ">
      <span>Actualizado {timeAgo}</span>
      <Currencies />
    </main>
  )
}
