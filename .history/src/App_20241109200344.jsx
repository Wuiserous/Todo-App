import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className='w-screen p-2 gap-2 h-screen grid grid_cols_12 grid-rows-12'>
      <div className='bg-orange-500 rounded-xl col-start-1 col-span-1 row-start-1 row-span-10'></div>
      <div className='rounded-xl col-start-2 col-end-8 bg-blue-500 2'></div>
      <div className='rounded-xl col-start-2 col-end-5 row-start-1 row-end-11 row-start-2 row-end-10 bg-yellow-500 3'></div>
      <div className='rounded-xl col-span-1 row-start-2 row-span-9 bg-green-500'></div> 
      <div className='rounded-xl col-span-2 bg-red-500 row-span-9'></div>
    </div>
  )
}

export default App
