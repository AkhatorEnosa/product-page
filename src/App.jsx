import React from 'react'
import NavBar from './components/NavBar'
import { ProductView } from './components/ProductView'

const App = () => {
  return (
    <div className='w-screen h-screen flex flex-col text-xs text-[#312F36]'>
      <NavBar />
      <ProductView />
    </div>
  )
}

export default App