import { useState } from 'react'
import './App.css'
import ToolBar from './components/ToolBar'
import NavBar from './components/NavBar'
import TaskSpace from './components/TaskSpace'
import ProgressSpace from './components/ProgressSpace'
import MotivationSpace from './components/MotivationSpace'

function App() {

  return (
    <div className='w-[100vw] overflow-hidden p-2 gap-2 h-[100vh] grid grid-cols-[50px_1100px_60px_1fr] grid-rows-[50px_1fr_1fr_1fr]'>
      <ToolBar />
      <NavBar />
      <TaskSpace bgColor={darkMode?'bg-gray-800' } />
      <ProgressSpace /> 
      <MotivationSpace />
    </div>
  )
}

export default App
