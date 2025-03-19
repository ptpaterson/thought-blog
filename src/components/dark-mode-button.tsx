'use client'

import { useEffect, useState } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa6'

export default function DarkModeButton() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode')
    if (savedMode === 'false') {
      setIsDarkMode(false)
      document.documentElement.classList.remove('dark')
    } else {
      setIsDarkMode(true)
    }
  }, [])

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('darkMode', 'false')
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('darkMode', 'true')
    }
    setIsDarkMode(!isDarkMode)
  }

  return (
    <button
      onClick={toggleDarkMode}
      className='hover:bg-secondary cursor-pointer rounded-full p-2 transition'
      aria-label='Toggle dark mode'
    >
      {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
    </button>
  )
}
