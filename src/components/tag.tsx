type Props = {
  tag: string
}

export default function Tag({ tag }: Props) {
  return (
    <span className='bg-secondary rounded-full px-2 py-1 text-xs'>{tag}</span>
  )
}
