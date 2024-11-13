import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className='w-screen h-screen grid grid-cols-4 grid-rows-2'>
      <div className='min-h-screen  col bg-orange-500 row-span-2'></div>
      <div className='col-span-3 row-span-1 bg-blue-500'></div>
      <div className='col-span-3 row-span-1 bg-blue-500'></div>
      <div className='col-span-3 row-span-1 bg-green-500'></div>
    </div>
  )
}

export default App
