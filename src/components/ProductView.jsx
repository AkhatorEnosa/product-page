import { useState } from 'react'
import One from '../assets/1.jpeg'
import Two from '../assets/2.png'
import Three from '../assets/3.jpeg'
import Four from '../assets/4.png'
import Five from '../assets/5.png'
import Six from '../assets/6.png'
import Seven from '../assets/7.jpeg'
import Eight from '../assets/8.jpeg'

export const ProductView = () => {

  const [ click, setClick ] = useState(false);
  const [ imgsrc, setImgsrc ] = useState('http://localhost:5173/src/assets/1.jpeg')
console.log('before click =>', imgsrc)
  const handlePic = (e) => {
    setClick(!click)
    // setImgsrc()
    setImgsrc(e.target.src);
    console.log('after click =>', imgsrc);
  }

  return (
      <div className=' flex md:h-full justify-center items-center lg:px-48 '>
          <div className='flex flex-col md:grid grid-cols-2 gap-5 sm:px-0 md:px-10 md:py-10'>
              <div className='flex flex-col w-full gap-2'>
                <img src={imgsrc} alt="image" className='md:rounded-lg'/>
                <div className='hidden md:grid grid-cols-8 gap-2'>
                  <img src={One} alt="image" className={imgsrc === One ? 'rounded-lg active' : 'rounded-lg transition-all duration-200'} onClick={handlePic}/>
                  <img src={Two} alt="image" className='rounded-lg transition- all duration-200' onClick={handlePic}/>
                  <img src={Three} alt="image" className='rounded-lg transition- all duration-200' onClick={handlePic}/>
                  <img src={Four} alt="image" className='rounded-lg transition- all duration-200' onClick={handlePic}/>
                  <img src={Five} alt="image" className='rounded-lg transition- all duration-200' onClick={handlePic}/>
                  <img src={Six} alt="image" className='rounded-lg transition- all duration-200' onClick={handlePic}/>
                  <img src={Seven} alt="image" className='rounded-lg transition- all duration-200' onClick={handlePic}/>
                  <img src={Eight} alt="image" className='rounded-lg transition- all duration-200' onClick={handlePic}/> 
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className='flex flex-col gap-4 lg:px-0 lg:py-0 px-8 py-6'>
                    <h3 className='tracking-wide font-medium'>NIKE</h3>
                    <h1 className='text-4xl font-bold'>Air Jordan 3 Retro "Green Glow"</h1>
                    <p className='mt-3'>Clean and supreme, the AJ3 returns with all of its classic style and grace. Quality leather in the upper—with that luxurious elephant print texture—combines with visible Nike Air in the sole to make a comfortable, everyday icon.</p>
                    <div className='flex md:flex-col justify-between md:justify-normal md:gap-3'>
                      <h2 className='text-2xl p-0 m-0 font-bold flex gap-4 items-center'>$190.50 <span className='text-xs bg-black text-white px-3 py-1 rounded-md font-bold'>50%</span></h2>
                      <p className='line-through opacity-50 font-bold text-lg md:text-base'>$381.00</p>
                    </div>
                    <div className='flex flex-col md:grid grid-cols-2 gap-5'>
                      <div className='grid grid-cols-3 font-bold shadow-md rounded-md bg-slate-100 md:bg-white'>
                        <button className='text-2xl text-[#fe590c] hover:bg-slate-200 transition-all duration-100'>-</button>
                        <input type="number" name="number" id="number" placeholder='0' className='py-4 md:py-0 text-center border bg-slate-100 md:bg-white md:border-white'/>
                        <button className='text-[18px] text-[#fe590c] hover:bg-slate-200 transition-all duration-100'>+</button>
                      </div>
                      <button className='flex gap-4 px-7 py-5 md:py-2 bg-[#FE590C] rounded-lg justify-center items-center font-bold'><span className="material-icons">shopping_cart</span>Add</button>
                    </div>
                </div>
              </div>
          </div>
      </div>
  )
  
}