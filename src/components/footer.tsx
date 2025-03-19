import Link from 'next/link'
import { SiGithub, SiLinkedin } from 'react-icons/si'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='border-border bg-surface-2 flex flex-col items-center border-t p-2'>
      <div className='flex items-center justify-center space-x-4 p-1'>
        <span>Follow me!</span>
        <Link
          href='https://github.com/ptpaterson'
          target='_blank'
          rel='noopener noreferrer'
        >
          <SiGithub size={20} />
        </Link>
        <Link
          href='https://www.linkedin.com/in/ptpaterson/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <SiLinkedin size={20} />
        </Link>
      </div>
      <div className='text-muted-foreground p-1 text-center'>
        <p>Paul Paterson • © {currentYear}</p>
      </div>
    </footer>
  )
}
