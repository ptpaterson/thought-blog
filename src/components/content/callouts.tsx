import { ForwardRefExoticComponent, RefAttributes } from 'react'

import {
  InfoCircledIcon,
  LightningBoltIcon,
  MoonIcon,
} from '@radix-ui/react-icons'
import { Callout, IconProps, Text } from '@radix-ui/themes'

type CalloutColors =
  | 'gray'
  | 'gold'
  | 'bronze'
  | 'brown'
  | 'yellow'
  | 'amber'
  | 'orange'
  | 'tomato'
  | 'red'
  | 'ruby'
  | 'crimson'
  | 'pink'
  | 'plum'
  | 'purple'
  | 'violet'
  | 'iris'
  | 'indigo'
  | 'blue'
  | 'cyan'
  | 'teal'
  | 'jade'
  | 'green'
  | 'grass'
  | 'lime'
  | 'mint'
  | 'sky'

type Props = {
  children: React.ReactNode
}

const createCallout = (
  key: string,
  color: CalloutColors,
  Icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>,
) => {
  const component = ({ children }: Props) => (
    <Callout.Root
      my='1'
      color={color}
      size='1'
      variant='surface'
      className='not-prose'
    >
      <Callout.Icon>
        <Icon />
      </Callout.Icon>
      <Text as='div' className='rt-CalloutText' size='2'>
        {children}
      </Text>
    </Callout.Root>
  )
  component.displayName = `Callout${key}`
  return component
}

export const CalloutDigress = createCallout('Digress', 'violet', MoonIcon)
export const CalloutNote = createCallout('Note', 'blue', InfoCircledIcon)
export const CalloutTip = createCallout('Tip', 'jade', LightningBoltIcon)
