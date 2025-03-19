type Props = {
  children: string
}

const getAnchor = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, '')
    .replace(/[ ]/g, '-')

export const H1 = ({ children }: Props) => {
  const anchor = getAnchor(children)
  const link = `#${anchor}`

  return (
    <h1 id={anchor} className='w-full scroll-mt-18'>
      <a href={link} className='anchor'></a>
      {children}
    </h1>
  )
}

export const H2 = ({ children }: Props) => {
  const anchor = getAnchor(children)
  const link = `#${anchor}`

  return (
    <h2 id={anchor} className='w-full scroll-mt-18'>
      <a href={link} className='anchor'></a>
      {children}
    </h2>
  )
}

export const H3 = ({ children }: Props) => {
  const anchor = getAnchor(children)
  const link = `#${anchor}`

  return (
    <h3 id={anchor} className='w-full scroll-mt-18'>
      <a href={link} className='anchor'></a>
      {children}
    </h3>
  )
}

export const H4 = ({ children }: Props) => {
  const anchor = getAnchor(children)
  const link = `#${anchor}`

  return (
    <h4 id={anchor} className='w-full scroll-mt-18'>
      <a href={link} className='anchor'></a>
      <em>{children}</em>
    </h4>
  )
}

export const H5 = ({ children }: Props) => {
  const anchor = getAnchor(children)
  const link = `#${anchor}`

  return (
    <h5 id={anchor} className='w-full scroll-mt-18'>
      <a href={link} className='anchor'></a>
      {children}
    </h5>
  )
}
