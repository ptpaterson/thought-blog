import { formatDate } from '@/lib/util'

type Props = {
  date: Date
  className?: React.ComponentProps<'time'>['className']
}

export default function Time({ date, className }: Props) {
  return (
    <time dateTime={date.toISOString()} className={className}>
      {formatDate(date)}
    </time>
  )
}
