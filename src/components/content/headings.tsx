import { ReactNode } from 'react'

type Props = {
  children: string
}

const getAnchor = (text: string | ReactNode[]) => {
  // If we're doing something fancy in the heading, then children will be an array of nodes
  if (Array.isArray(text)) {
    if (text[0] === null || text[0] === undefined) {
      throw new Error('Heading cannot be empty')
    }

    // CAUTION: This assumes that the header starts with plain text and not any other html
    text = text[0].toString() as string
  }

  return text
    .replace(/[^a-z0-9A-Z ]/g, '')
    .replace(/[ ]/g, '-')
    .toLowerCase()
}

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
