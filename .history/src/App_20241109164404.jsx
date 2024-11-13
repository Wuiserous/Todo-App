import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className='w-screen h-screen grid-cols-4 grid-rows-2'>
      <div className='bg-orange-500 row-span-2'></div>
      <div className='col-span-3 '></div>
    </div>
  )
}

export default App
