import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className='w-screen p-2 gap-2 h-screen grid grid-cols-[15] grid-rows-10'>
      <div className='bg-orange-500 rounded-xl row-span-10 col-span-[1/'></div>
      <div className='col-span-9 row-span-1 rounded-xl bg-blue-500 2'></div>
      <div className='col-span-6 row-span-9 rounded-xl bg-yellow-500 3'></div>
      <div className='col-span-1 row-span-9 rounded-xl bg-green-500 4'></div>
      <div className='col-span-2 row-span-9 rounded-xl bg-red-500'></div>
    </div>
  )
}

export default App
