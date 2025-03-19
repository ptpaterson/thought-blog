'use client'

import { usePathname } from 'next/navigation'
import React from 'react'
import { SiLinkedin, SiX } from 'react-icons/si'

type ShareProps = {
  host: string
  title: string
}

const Share = ({ title, host }: ShareProps): React.ReactNode => {
  const pathname = usePathname()

  const encodedTitle = encodeURIComponent(title)
  const encodedUrl = encodeURIComponent(`${host}${pathname}`)

  const shareLinks = [
    {
      name: 'X',
      url: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      icon: <SiX className='h-5 w-5' />,
      ariaLabel: 'Share on X',
    },
    {
      name: 'LinkedIn',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: <SiLinkedin className='h-5 w-5' />,
      ariaLabel: 'Share on LinkedIn',
    },
  ]

  return (
    <div className='flex items-center gap-2'>
      <span className='text-muted-foreground font-medium'>Share this post</span>
      <div className='flex gap-2'>
        {shareLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={link.ariaLabel}
            className='bg-surface-2 border-border hover:bg-secondary inline-flex h-8 w-8 items-center justify-center rounded border hover:shadow-sm'
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  )
}

export default Share
