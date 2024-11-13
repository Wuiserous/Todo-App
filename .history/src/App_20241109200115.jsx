import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className='w-screen p-2 gap-2 h-screen grid grid_cols_10 grid-rows-10'>
      <div className='bg-orange-500 rounded-xl col-start-1 col-span-1 row-span-15'></div>
      <div className='rounded-xl col-start-2 col-end-8 bg-blue-500 2'></div>
      <div className='rounded-xl col-start-2 col-end-6 row-start-1 row-end-11 row-start-2 row-end-10 bg-yellow-500 3'></div>
      <div className='rounded-xl col-span-1 row-span-11 bg-green-500'></div> 
      <div className='rounded-xl bg-red-500 5'></div>
    </div>
  )
}

export default App
