import { useCallback, useEffect, useState } from 'react'
import { BsChevronDown, BsGithub, BsLinkedin } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'

import MobileMenu from './MobileMenu'
import NavbarItem from './NavbarItem'
import Link from 'next/link'

const TOP_OFFSET = 66

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [showBackground, setShowBackground] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true)
      } else {
        setShowBackground(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu(current => !current)
  }, [])

  return (
    <nav className='w-full fixed z-40'>
      <div
        className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 ${
          showBackground ? 'bg-zinc-900 bg-opacity-90' : ''
        }`}
      >
        <Link href='/'>
          <img
            className='h-4 lg:h-7'
            src='/assets/images/logo.png'
            alt='Logo'
          />
        </Link>
        <div className='flex-row ml-8 gap-7 hidden lg:flex'>
          <NavbarItem label='Home' />
          <NavbarItem label='Projects' />
          <NavbarItem label='Skills' />
          <NavbarItem label='Contact' />
        </div>

        {/* Make a hamburger menu later */}
        <div
          onClick={toggleMobileMenu}
          className='lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative'
        >
          <p className='text-white text-sm'>Browse</p>
          <BsChevronDown
            className={`text-white transition ${
              showMobileMenu ? 'rotate-180' : 'rotate-0'
            }`}
          />
          <MobileMenu visible={showMobileMenu} />
        </div>
        <div className='flex flex-row ml-auto gap-7 items-center'>
          <div className='text-gray-200 hover:text-gray-300 cursor-pointer transition'>
            <a href='https://github.com/DarcXnite' target='_blank'>
              <BsGithub size={30} />
            </a>
          </div>
          <div className='text-gray-200 hover:text-gray-300 cursor-pointer transition'>
            <a
              href='https://www.linkedin.com/in/davis-nguyen-98345720b/'
              target='_blank'
            >
              <BsLinkedin size={30} />
            </a>
          </div>
          <div className='text-gray-200 hover:text-gray-300 cursor-pointer transition'>
            <a href='mailto:davisnguyen98@gmail.com'>
              <AiOutlineMail size={30} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
