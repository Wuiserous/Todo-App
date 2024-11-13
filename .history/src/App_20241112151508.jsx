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
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);
  const toggleUrgent = () => setIsUrgent(!isUrgent);
const toggleImportant = () => setIsImportant(!isImportant);


  const [cards, setCards] = useState([])

  const addCard = (card) => {
    setCards([...cards, card])
  }

  function handleSubmit(e) {
    e.preventDefault()
    const newCard = {
      title,
      description
    }
    setTitle('')
    setDescription('')
    addCard(newCard)
  }

  const deleteCard = (indexToDelete) => {
    setCards(cards.filter((_, index) => index !== indexToDelete));
    console.log("tried deleting it")
  }

  const hideModal = () => {
    // Hide modal only if link modal is not shown
    if (!showLinkModal) {
      setShowModal(false);
    }
  }

  const hideLinkModal = () => {
    setShowLinkModal(false);
    // Show main modal again when link modal is closed
    setShowModal(true);
  }

  return (
    <div className='w-[100vw] overflow-hidden p-2 gap-2 h-[100vh] grid grid-cols-[50px_1100px_60px_1fr] grid-rows-[50px_1fr_1fr_1fr]'>
      <ToolBar bgColor={darkMode ? 'bg-slate-300' : 'bg-gray-800'} 
               Button={<button className="w-10 focus:outline-none h-10 rounded-full flex items-center justify-center" 
               onClick={() => setShowModal(true)}>
                <IoMdAddCircle className={`${darkMode ? 'text-black' : 'text-white'}`} size={40} />
               </button>} />
      <NavBar Button={<button className="w-10 h-10 focus:outline-none rounded-full flex items-center justify-center" 
              onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <AiFillMoon className='text-black' size={25} /> : <MdWbSunny size={25} />}
              </button>} 
              bgColor={darkMode ? 'bg-slate-300' : 'bg-gray-800'} />
      
      <TaskSpace deleteCard={deleteCard} cards={cards} bgColor={darkMode ? 'bg-slate-300' : 'bg-gray-800'} hoveredCardIndex={hoveredCardIndex} />
      <ProgressSpace bgColor={darkMode ? 'bg-slate-300' : 'bg-gray-800'} />
      <MotivationSpace bgColor={darkMode ? 'bg-slate-300' : 'bg-gray-800'} />

      <Modal Show={showModal && !showLinkModal} hide={hideModal} bgColor={darkMode ? 'bg-slate-300' : 'bg-gray-800'}>
        <AddTodo Button={<button onClick={() => setShowLinkModal(true)} className="rounded border-none bg-white focus:outline-none bg-black p-2">
                          <IoLink className="text-black" size={25} />
                        </button>}
                 titleInput={<input type="text" value={title} name="title" placeholder="Title here..." 
                          onChange={(e) => setTitle(e.target.value)}
                          className="rounded border text-black border-gray-500 p-2 bg-[#ffffff] focus:outline-none row-span-1 col-span-10" />}
                 descriptionInput={<textarea name="description" value={description} placeholder="Task here..." 
                          onChange={(e) => setDescription(e.target.value)}
                          className="rounded text-black resize-none overflow-auto border border-gray-500 p-2 focus:outline-none bg-[#ffffff] col-start-1 col-span-10 row-start-2 row-span-10"></textarea>}
                 submitButton={<button className="col-start-1 col-span-7 row-start-12 row-end-13 hover:bg-blue-700 bg-blue-500 p-2 rounded" 
                          onClick={handleSubmit}>Add</button>} />
      </Modal>

      <LinkModal Show={showLinkModal} hide={hideLinkModal}>
        {cards.map((card, index) => (
          <button key={index} className='w-10 h-10 border bg-white focus:outline-none hide-scrollbar'
                  onMouseEnter={() => setHoveredCardIndex(index)}
                  onMouseLeave={() => setHoveredCardIndex(null)}>
            {index + 1}
          </button>
        ))}
      </LinkModal>
    </div>
  )
}

export default App
