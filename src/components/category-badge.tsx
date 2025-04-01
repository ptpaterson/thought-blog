type Props = {
  category: string
}

export default function CategoryBadge({ category }: Props) {
  return (
    <span className='bg-secondary rounded-full px-2 py-1 text-xs'>
      {category}
    </span>
  )
}
