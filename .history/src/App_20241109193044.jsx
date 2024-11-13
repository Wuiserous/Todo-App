import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className='w-screen p-2 gap-2 h-screen grid grid-cols-[50px_50px_50px_50px_50px_50px_50px_50px] grid-rows-[50px_50px_50px_50px]'>
      <div className='bg-orange-500 rounded-xl col-start-1 col-end-1 row-start-'></div>
      <div className='rounded-xl col-start-2 col-end-10 bg-blue-500 2'></div>
      <div className='rounded-xl col-start-2 col-end-10 bg-yellow-500 3'></div>
      <div className='  rounded-xl col-start-2 col-end-8 bg-green-500 4'></div>
      <div className='  rounded-xl col-start-2 col-end-4 bg-red-500 5'></div>
    </div>
  )
}

export default App
