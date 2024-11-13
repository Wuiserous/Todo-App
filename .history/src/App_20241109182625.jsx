import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className='w-screen h-screen grid grid-cols-4 grid-rows-2'>
      <div className='min-h-screen w-[10px] col bg-orange-500 row-span-2'>d</div>
      <div className='col-span-3 row-span-1 bg-blue-500'>d</div>
    </div>
  )
}

export default App
