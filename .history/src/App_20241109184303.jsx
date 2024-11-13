import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className='w-screen h-screen grid grid-cols-10 grid-rows-10'>
      <div className='min-h-screen bg-orange-500 row-span-2'></div>
      <div className='col-span-9 row-span-1 bg-blue-500'></div>
      <div className='col-span-7 row-span-9 bg-yellow-500'></div>
      <div className='col-span-1 row bg-green-500'></div>
      <div className='col-span-1 bg-red-500'></div>
    </div>
  )
}

export default App
