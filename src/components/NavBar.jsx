import React from 'react'

const NavBar = () => {
  return (
    <div className='w-full flex px-40 py-7 justify-between items-center bg-white shadow-md'>
        <div className='flex gap-20 justify-between items-center'>
            <div className='flex justify-center items-center gap-1'>
                <h2 className='logo font-extrabold text-4xl tracking-tighter'>Kickrs</h2>
                <p className='font-extrabold text-5xl text-[#FE590C]'>.</p>
            </div>
            <ul className='flex gap-4 '>
                <li className='hover:font-bold transition-all duration-200 cursor-pointer'>Collections</li>
                <li className='hover:font-bold transition-all duration-200 cursor-pointer'>Men</li>
                <li className='hover:font-bold transition-all duration-200 cursor-pointer'>Women</li>
                <li className='hover:font-bold transition-all duration-200 cursor-pointer'>About</li>
                <li className='hover:font-bold transition-all duration-200 cursor-pointer'>Contact</li>
            </ul>
        </div>
        <div className='flex justify-between gap-8'>
            <span className="material-icons hover:text-[#FE590C] transition-all duration-200 cursor-pointer">shopping_cart</span>
            <span className="material-icons hover:text-[#FE590C] transition-all duration-200 cursor-pointer">account_circle</span>
        </div>
    </div>
  )
}

export default NavBar