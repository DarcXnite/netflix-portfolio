import React, { useCallback, useEffect, useState } from 'react'
import {
  AiOutlineClose,
  AiFillGithub,
  AiOutlineLink,
  AiOutlineMail,
} from 'react-icons/ai'
import { GrLinkedinOption } from 'react-icons/gr'

import useInfoModal from '@/hooks/useInfoModal'
import Button from './Button'

interface InfoModalProps {
  visible?: boolean
  onClose: any
}

const InfoModal: React.FC<InfoModalProps> = ({ visible, onClose }) => {
  const [isVisible, setIsVisible] = useState(!!visible)

  const { details, isOpen } = useInfoModal()

  useEffect(() => {
    setIsVisible(!!visible)
  }, [visible, details])

  const handleClose = useCallback(() => {
    setIsVisible(false)
    setTimeout(() => {
      onClose()
    }, 300)
  }, [onClose])

  if (!visible) {
    return null
  }

  return (
    <div className='z-50 transition duration-300 bg-black bg-opacity-80 flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0'>
      <div className='relative w-auto mx-auto max-w-3xl rounded-md overflow-hidden'>
        <div
          className={`${
            isVisible ? 'scale-100' : 'scale-0'
          } transform duration-300 relative flex-auto bg-zinc-900 drop-shadow-md`}
        >
          <div className='relative h-96'>
            <video
              className='w-full brightness-[60%] object-cover h-full'
              muted
              loop
              poster='/assets/images/matrix.png'
              src='/assets/videos/matrix-video.mp4'
            ></video>
            <div
              className='cursor-pointer absolute top-3 right-3 h-10 w-10 rounded-full bg-black bg-opacity-70 flex justify-center items-center'
              onClick={handleClose}
            >
              <AiOutlineClose className='text-white' size={20} />
            </div>
            <div className='absolute bottom-[10%] left-10'>
              <p className='text-white text-3xl md:text-4xl h-full lg:text-5xl font-bold mb-80'>
                Matrix
              </p>
              <div className='flex flex-row gap-4 items-center'>
                {details?.link ? (
                  <Button link={details?.link} Type={AiOutlineLink} />
                ) : (
                  ''
                )}

                {details?.github ? (
                  <Button link={details?.github} Type={AiFillGithub} />
                ) : (
                  ''
                )}

                {details?.linkedin ? (
                  <Button link={details?.linkedin} Type={GrLinkedinOption} />
                ) : (
                  ''
                )}

                {details?.email ? (
                  <Button link={details?.email} Type={AiOutlineMail} />
                ) : (
                  ''
                )}
              </div>
            </div>
          </div>
          <div className='px-12 py-8'>
            <p className='text-white text-lg'>{details?.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoModal
