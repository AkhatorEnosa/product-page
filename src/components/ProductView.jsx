import React from 'react'
import One from '../assets/1.jpeg'

export const ProductView = () => {
  return (
    <div className=' flex h-full justify-center items-center px-48'>
        <div className='grid grid-cols-2 gap-5 px-20'>
            <div className='flex flex-col'>
               <img src={One} alt="image" />
               <div>
                Several Images
               </div>
            </div>
            <div>
                details
            </div>
        </div>
    </div>
  )
}
