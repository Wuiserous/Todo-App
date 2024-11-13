import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className='w-screen p-2 gap-2 h-screen grid grid-cols-21 grid-rows-10'>
      <div className='bg-orange-500 row-span-10'></div>
      <div className='col-span-25 row-span-1 bg-blue-500'></div>
      <div className='col-span-6 row-span-9 bg-yellow-500'></div>
      <div className='col-span-1 row-span-9 bg-green-500'></div>
      <div className='col-span-2 row-span-9 bg-red-500'></div>
    </div>
  )
}

export default App
