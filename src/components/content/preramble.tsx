export default function PreRamble({ children }: { children: React.ReactNode }) {
  return (
    <div className='bg-secondary/50 w-full rounded-lg p-4 italic'>
      <h2 className='border-primary mt-0 mb-0 border-b'>PreRamble</h2>
      <a href={'#skip-preramble'} className='text-sm'>
        Jump to the article
      </a>
      {children}
      <div id={'skip-preramble'} className='w-full scroll-mt-12' />
    </div>
  )
}
