import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className='w-screen p-2 gap-2 h-screen grid grid-cols-[50px_1100px_50px_1fr] grid-rows-[50px_1fr_1fr_1fr]'>
      <ToolBar />
      <NavBar />
      <TaskSpace />
      <ProgressSpace /> 
    </div>
  )
}

export default App
