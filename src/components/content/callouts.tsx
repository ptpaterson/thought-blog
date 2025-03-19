type Props = {
  children: React.ReactNode
}

export const CalloutNote = ({ children }: Props) => (
  <blockquote className='text-muted-foreground callout border-blue-600'>
    <span className='text-blue-600'>Note</span>
    {children}
  </blockquote>
)

export const CalloutTip = ({ children }: Props) => (
  <blockquote className='text-muted-foreground callout border-emerald-600'>
    <span className='text-emerald-600'>Tip</span>
    {children}
  </blockquote>
)
