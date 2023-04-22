import Link from 'next/link'
import React from 'react'
import { AiOutlineLink, AiFillGithub } from 'react-icons/ai'

interface CardListProps {
  details: Record<string, any>
}

const Card: React.FC<CardListProps> = ({
  details: { id, name, thumbnail, link, gitHub },
}) => {
  return (
    <div className='group bg-zinc-900 col-span relative h-[12vw]'>
      <img
        className='cursor-pointer object-cover transition duration shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-full h-[12vw]'
        src={thumbnail}
        alt={name}
      />
      <div className='opacity-0 absolute top-0 transition duration-200 z-10 invisible sm:visible delay-300 w-full scale-0 group-hover:scale-110 group-hover:-translate-y-[6vw] group-hover:translate-x-[2vw] group-hover:opacity-100'>
        <img
          className='cursor-pointer object-cover transition duration shadow-xl rounded-t-md w-full h-[12vw]'
          src={thumbnail}
          alt={name}
        />
        <div className='z-10 bg-zinc-800 p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md'>
          <div className='flex flex-row items-center gap-3'>
            <Link href={link} target='_blank'>
              <div
                className='cursor-pointer w-6 h-6 lg:w-10 bg-white lg:h-10 rounded-full flex justify-center items-center transition hover:bg-neutral-300'
                onClick={() => {}}
              >
                <AiOutlineLink size={30} />
              </div>
            </Link>
            {gitHub ? (
              <Link href={link} target='_blank'>
                <div
                  className='cursor-pointer w-6 h-6 lg:w-10 bg-white lg:h-10 rounded-full flex justify-center items-center transition hover:bg-neutral-300'
                  onClick={() => {}}
                >
                  <AiFillGithub size={30} />
                </div>
              </Link>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card