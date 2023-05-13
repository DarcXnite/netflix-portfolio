import useInfoModal from '@/hooks/useInfoModal'
import React, { useCallback, useRef } from 'react'

import { BsInfoCircle } from 'react-icons/bs'

interface JumbotronProps {
  bio: object[]
}

const Jumbotron: React.FC<JumbotronProps> = ({ bio }) => {
  const video = useRef<HTMLVideoElement>(null!)
  const { openModal } = useInfoModal()

  const handleOpenModal = useCallback(() => {
    openModal(0, bio)
  }, [openModal, bio])

  return (
    <div className='relative h-[56.25vw]'>
      <video
        ref={video}
        className='w-full h-[56.25vw] object-cover brightness-[60%]'
        src='/assets/videos/matrix-video.mp4'
        poster='/assets/images/matrix.png'
        autoPlay
        muted
        loop
      ></video>
      <div className='absolute top-[30%] md: top-[40%] ml-4 md:ml-16'>
        <p className='text-white text-1xl md:text-5xl h-full w-full lg:text-6xl font-bold drop-shadow-xl'>
          Hello! I'm <span className='text-[#DB202C]'>Davis Nguyen</span>
        </p>
        <p className='text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl'>
          I am a developer from Chicago with a bachelor's degree in fine arts. I
          specialize mostly in front end development, but am well-rounded in the
          MERN stack.
        </p>
        <div className='flex flex-row items-center mt-3 md:mt-4 gap-3'>
          <button
            onClick={handleOpenModal}
            className='bg-white text-white bg-opacity-30 rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-20 transition'
          >
            <BsInfoCircle className='mr-1' />
            More Info
          </button>
        </div>
      </div>
    </div>
  )
}

export default Jumbotron
