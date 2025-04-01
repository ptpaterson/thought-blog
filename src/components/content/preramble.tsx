import { Link } from '@radix-ui/themes'

export default function PreRamble({ children }: { children: React.ReactNode }) {
  return (
    <div className='bg-secondary/20 border-secondary not-prose preramble w-full rounded-lg border p-4 italic'>
      <h2 className='mt-0 mb-0 border-b'>PreRamble</h2>
      <Link href={'#skip-preramble'} size='1'>
        Jump to the article
      </Link>
      {children}
      <div id={'skip-preramble'} className='w-full scroll-mt-12' />
    </div>
  )
}
