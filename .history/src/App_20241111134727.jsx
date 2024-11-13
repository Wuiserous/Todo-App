import { useState } from 'react'
import './App.css'
import { MdWbSunny } from "react-icons/md";
import { AiFillMoon } from "react-icons/ai";
import { IoMdAddCircle } from "react-icons/io";
import ToolBar from './components/ToolBar'
import NavBar from './components/NavBar'
import TaskSpace from './components/TaskSpace'
import Modal from './components/Modal'
import ProgressSpace from './components/ProgressSpace'
import MotivationSpace from './components/MotivationSpace'
import AddTodo from './components/AddTodo';
import LinkModal from './components/LinkModal';
import { IoLink } from "react-icons/io5";

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [showLinkModal, setShowLinkModal] = useState(false)
  const hideModal = () => setShowModal(false)
  return (
    <div className='w-[100vw] overflow-hidden p-2 gap-2 h-[100vh] grid grid-cols-[50px_1100px_60px_1fr] grid-rows-[50px_1fr_1fr_1fr]'>
      <ToolBar bgColor={darkMode?'bg-slate-300' : 'bg-gray-800'} Button={<button className="w-10 focus:outline-none h-10 rounded-full flex items-center justify-center" onClick={() => setShowModal(true)}><IoMdAddCircle className={`${darkMode ? 'text-black' : 'text-white'}`} size={40} /></button>} />
      <NavBar Button={<button className="w-10 h-10 focus:outline-none rounded-full flex items-center justify-center" onClick={() => setDarkMode(!darkMode)}>{darkMode ? <AiFillMoon className='text-black' size={25} /> : <MdWbSunny size={25} />}</button>} bgColor={darkMode?'bg-slate-300' : 'bg-gray-800' }/>
      <TaskSpace bgColor={darkMode?'bg-slate-300' : 'bg-gray-800' } />
      <ProgressSpace bgColor={darkMode?'bg-slate-300' : 'bg-gray-800' } /> 
      <MotivationSpace bgColor={darkMode?'bg-slate-300' : 'bg-gray-800' } />
      <Modal Show={showModal} hide={hideModal} bgColor={darkMode?'bg-slate-300' : 'bg-gray-800'}>
        <AddTodo Button={<button className="rounded border-none bg-white focus:outline-none bg-black p-2" onClick={setShowLinkModal(true)}>
                    <IoLink className="text-black" size={25} />
                </button>}/>
      </Modal>
      <LinkModal Show={showLinkModal}/>
    </div>
  )
}

export default App
