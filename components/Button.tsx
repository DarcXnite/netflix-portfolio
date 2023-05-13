import Link from 'next/link'
import React from 'react'

interface ButtonProps {
  Type?: any
  link?: string
}

const Button: React.FC<ButtonProps> = ({ Type, link }) => {
  return (
    <Link href={link ? link : ''} target='_blank'>
      <div
        className='cursor-pointer w-6 h-6 lg:w-10 bg-white lg:h-10 rounded-full flex justify-center items-center transition hover:bg-neutral-300'
        onClick={() => {}}
      >
        <Type size={30} />
      </div>
    </Link>
  )
}

export default Button
