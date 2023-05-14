import useInfoModal from '@/hooks/useInfoModal'
import React, { useCallback } from 'react'
import { AiOutlineLink, AiFillGithub } from 'react-icons/ai'
import { BsChevronDown } from 'react-icons/bs'
import Button from './Button'

interface CardListProps {
  details: Record<string, any>
  data: Record<string, any>[]
}

const Card: React.FC<CardListProps> = ({
  details: { id, name, thumbnail, link, gitHub },
  data,
}) => {
  const { openModal } = useInfoModal()

  const handleOpenModal = useCallback(() => {
    openModal(id, data)
  }, [openModal, data])

  return (
    <div className='group bg-white rounded-md col-span relative h-[12vw]'>
      <img
        className='cursor-pointer object-cover transition duration shadow-xl rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-full h-[12vw]'
        src={thumbnail}
        alt={name}
      />
      <div className='opacity-0 bg-white rounded-md absolute top-0 transition duration-200 z-10 invisible sm:visible delay-300 w-full scale-0 group-hover:scale-110 group-hover:-translate-y-[6vw] group-hover:translate-x-[2vw] group-hover:opacity-100'>
        <img
          className='cursor-pointer object-cover transition duration shadow-xl rounded-t-md w-full h-[12vw]'
          src={thumbnail}
          alt={name}
        />
        <div className='z-10 bg-zinc-800 p-2 lg:p-4 absolute w-full transition shadow-md rounded-b-md'>
          <div className='flex flex-row items-center gap-3'>
            {link ? <Button link={link} Type={AiOutlineLink} /> : ''}

            {gitHub ? <Button link={link} Type={AiFillGithub} /> : ''}
            <div
              onClick={handleOpenModal}
              className='cursor-pointer ml-auto group/item w-6 h-6 lg:w-10 lg:h-10 border-white border-2 border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300'
            >
              <BsChevronDown
                className='text-white group-hover/item:text-neutral-300'
                size={25}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
