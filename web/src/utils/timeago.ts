import { format, register } from 'timeago.js'
import es from 'timeago.js/lib/lang/es'

export function getTimeAgo(buildTime: string) {
  register('es', es)
  return format(buildTime, 'es')
}
