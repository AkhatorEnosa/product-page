import React from 'react'
import One from '../assets/1.jpeg'

export const ProductView = () => {
  return (
    <div className=' flex h-full justify-center items-center px-48'>
        <div className='grid grid-cols-2 gap-5 px-40'>
            <div className='flex flex-col gap-2'>
               <img src={One} alt="image" className='rounded-lg'/>
               <div className='grid grid-cols-8 gap-2'>
                <img src={One} alt="image" className='rounded-lg'/>
                <img src={One} alt="image" className='rounded-lg'/>
                <img src={One} alt="image" className='rounded-lg'/>
                <img src={One} alt="image" className='rounded-lg'/>
                <img src={One} alt="image" className='rounded-lg'/>
                <img src={One} alt="image" className='rounded-lg'/>
                <img src={One} alt="image" className='rounded-lg'/>
                <img src={One} alt="image" className='rounded-lg'/>
               </div>
            </div>
            <div>
                details
            </div>
        </div>
    </div>
  )
}
