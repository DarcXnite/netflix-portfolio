import React from 'react'
import Card from './Card'

interface CardListsProps {
  title: string
  details: Record<string, any>[]
}

const CardLists: React.FC<CardListsProps> = ({ title, details }) => {
  return (
    <div className='px-4 md:px-12 mt-4 space-y-8'>
      <div>
        <p className='text-white text-md md:text-xl lg:text-2xl font-semibold mb-4'>
          {title}
        </p>
        <div className='grid grid-cols-4 gap-2'>
          {details.map(item => (
            <Card key={item.id} details={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CardLists
