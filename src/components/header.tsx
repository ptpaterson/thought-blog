import Link from 'next/link'

import DarkModeButton from './dark-mode-button'

export default function Header() {
  return (
    <header className='border-border bg-surface-2 sticky top-0 z-10 border-b'>
      <div className='mx-auto px-4 py-4'>
        <div className='flex items-center justify-between'>
          <Link href='/' className='text-2xl font-bold'>
            Paul&apos;s Thought Blog
          </Link>

          <DarkModeButton />
        </div>
      </div>
    </header>
  )
}
