import type { MDXComponents } from 'mdx/types'

import { CalloutNote, CalloutTip } from '@/components/content/callouts'
import { H1, H2, H3, H4, H5 } from '@/components/content/headings'
import PreRamble from '@/components/content/preramble'

type Props = {
  slug: string
}

const componentOverrides = {
  CalloutNote,
  CalloutTip,
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  PreRamble,
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return { ...components, ...componentOverrides }
}
