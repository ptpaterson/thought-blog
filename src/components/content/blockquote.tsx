import { Blockquote as RadixBlockquote } from '@radix-ui/themes'

export default function Blockquote({
  children,
}: {
  children: React.ReactNode
}) {
  return <RadixBlockquote>{children}</RadixBlockquote>
}
