import { useState, useEffect } from 'react'
import './App.css'
import { MdWbSunny } from "react-icons/md";
import { AiFillMoon } from "react-icons/ai";
import { IoMdAddCircle } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import ToolBar from './components/ToolBar'
import NavBar from './components/NavBar'
import TaskSpace from './components/TaskSpace'
import Modal from './components/Modal'
import ProgressSpace from './components/ProgressSpace'
import MotivationSpace from './components/MotivationSpace'
import AddTodo from './components/AddTodo';
import LinkModal from './components/LinkModal';
import { IoLink } from "react-icons/io5";
import { TbUrgent } from "react-icons/tb";
import { FaRegBell } from "react-icons/fa";
import { IoIosTimer } from "react-icons/io";
import DeadLineModal from './components/DeadLineModal';
import EditModal from './components/EditModal';
import { PiKanban } from "react-icons/pi";
import axios from 'axios';
import React from "react";
import AddTextArea from './components/TextArea';
import InputArea from './components/InputArea';
import Kanban from './components/Kanban';
import { LuLayoutDashboard } from "react-icons/lu";


function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [showLinkModal, setShowLinkModal] = useState(false)
  const [showDeadLineModal, setShowDeadLineModal] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isUrgent, setIsUrgent] = useState(false);
  const [isImportant, setIsImportant] = useState(false);
  const [deadLineText, setDeadLineText] = useState('');
  const [deadLineDate, setDeadLineDate] = useState('');
  const [deadLineTime, setDeadLineTime] = useState('');
  const [deadLine, setDeadLine] = useState('');
  const [priority, setPriority] = useState('P4');
  const [cardEdit, setCardEdit] = useState('');
  const [space, setSpace] = useState(false)
  const [label, setLabel] = useState('')
  const [labels, setLabels] = useState([])

  const setTaskPriority = (isUrgent, isImportant) => {
    if (isUrgent && isImportant) {
      setPriority('P1'); // Urgent and Important -> Highest Priority
    } else if (!isUrgent && isImportant) {
      setPriority('P2'); // Not Urgent but Important -> Medium Priority
    } else if (isUrgent && !isImportant) {
      setPriority('P3'); // Urgent but Not Important -> Low Priority
    } else {
      setPriority('P4'); // Not Urgent and Not Important -> Very Low Priority
    }
  };

  const handleSpace = () => {
    setSpace(!space)
  }
  

  const handleKeyDown = (event) => {
    // Check if Ctrl key is held down with Right or Left Arrow
    if (event.ctrlKey) {
      if (event.key === 'ArrowRight') {
        // Ctrl + Right Arrow
        setIsExpanded(true);
      } else if (event.key === 'ArrowLeft') {
        // Ctrl + Left Arrow
        setIsExpanded(false);
      }
    }

    if (event.key === "Enter") {
      // When Enter key is pressed, call handleSubmit
      handleSubmit();
    }
  };

  useEffect(() => {
    // Add event listener on mount
    document.addEventListener('keydown', handleKeyDown);

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const extractDateTime = async (inputText) => {
    if (inputText)
    try {
      const response = await axios.post('http://localhost:5000/extract-datetime', {
        inputText,
      });
      const { date, time, deadline } = response.data;
      setDeadLineDate(date);
      setDeadLineTime(time);
      setDeadLine(deadline);
      return deadline
    } catch (error) {
      console.error('Error extracting date/time:', error.response?.data || error.message);
    }
    setDeadLineText('')
  }

  const Priority1 = () => {
    setIsUrgent(true);
    setIsImportant(true)
    setTaskPriority(true, true);
  }

  const Priority2= () => {
    setIsUrgent(true);
    setTaskPriority(false, true);
  }

  const Priority3= () => {
    setIsImportant(true);
    setTaskPriority(true, false);
  }

  const Priority4= () => {
    setIsImportant(false);
    setTaskPriority(false, false);
  }

  const [cards, setCards] = useState([])

  const deadLineRemove = () => {
    setDeadLineText('')
    setDeadLineDate('')
    setDeadLineTime('')
    setDeadLine('')
  }

  const addCard = (card) => {
    setCards([...cards, card])
    console.log('new card added')
    console.log(card)
  }

  function handleLabel(label){
    setLabel(label);
  }

  function addLabel(newLabel) {
    setLabels([...labels, newLabel])
  }

  const editCard = (newCard) => {
    setCards(cards.map((card) => {
      if (card.createdAt === newCard.createdAt) {
        // Replace the card with the new card
        console.log(newCard)
        return newCard;
      }
      return card;
    }));
    setDeadLine('')
  };

  const handleInputChange = (e, field) => {
    const { value } = e.target;
    
    // Update the card that matches cardEdit (createdAt)
    setCards(prevCards =>
      prevCards.map((card) => 
        card.createdAt === cardEdit ? { ...card, [field]: value } : card
      )
    );
  };
  

  function handleSubmit(e) {
    if (e) {
      e.preventDefault();
  }

    const createdAt = new Date().toISOString(); // Current time in ISO format
  
    // Calculate seconds remaining
    const createdAtDate = new Date(createdAt); 
    const deadLineDate = new Date(deadLine); 
    const secondsLeft = Math.floor((deadLineDate - createdAtDate) / 1000);
    console.log(secondsLeft)
  
    // Create a new card with the calculated secondsLeft
    if (title.length > 0 || description.length > 0) {
      const newCard = {
        type: 'task',
        title,
        description,
        isUrgent,
        isImportant,
        deadLineDate,
        deadLineTime,
        label,
        deadLine,
        priority,
        createdAt,
        id: createdAt,
        secondsLeft // Add the calculated value to the card
      };
  
      console.log(newCard)
    
      // Reset fields and update state
      setTitle('');
      setDescription('');
      setDeadLineText('');
      setDeadLineDate('');
      setDeadLineTime('');
      setDeadLine('')
      addCard(newCard);
      setLabel('')
    
      // Reset the priority states after adding the card
      setIsUrgent(false);
      setIsImportant(false);
      setDeadLine('');
      hideModal();
    }
  }
  

  const deleteCard = (createdAtToDelete) => {
    setCards(cards.filter(card => card.createdAt !== createdAtToDelete));
    console.log("tried deleting it")
  }

  const hideModal = () => {
    // Hide modal only if link modal is not shown
    setShowModal(false);
  }

  const handleShowModal = () => {
    setShowModal(true);
  }

  const handleShowEditModal = (createdAt) => {
    setShowEditModal(true);
    setCardEdit(createdAt);
    console.log(`cardEdit added: ${createdAt}`)
  }
  const hideEditModal = () => {
    setShowEditModal(false);
    setCardEdit('')
  }

  const hideLinkModal = () => {
    setShowLinkModal(false);
    // Show main modal again when link modal is closed
    setShowModal(true);
  }

  const hideDeadLineModal = () => {
    setShowDeadLineModal(false);
    // Show main modal again when link modal is closed
    setShowModal(true);
  }

  return (
    <div className={`w-[100vw] overflow-hidden p-2 gap-2 h-[100vh] grid grid-cols-[50px_1100px_60px_1fr] grid-rows-[50px_1fr_1fr_1fr]`}>
      <ToolBar bgColor={darkMode ? 'bg-white' : 'bg-[#121212]'} 
               Button={<button className="w-10 focus:outline-none h-10 rounded-full flex items-center justify-center" 
               onClick={handleShowModal}>
                <IoMdAddCircle className={`${darkMode ? 'text-black' : 'text-[#BB86FC] hover:text-purple-600'}`} size={30} />
               </button>} Kanban={<button className="w-10 focus:outline-none h-10 rounded-full flex items-center justify-center" 
               onClick={() => handleSpace()}>
                {space == true? 
      <LuLayoutDashboard className={`${darkMode ? 'text-black' : 'text-[#BB86FC] hover:text-purple-600'}`} onClick={handleSpace} size={30} />
      : 
      <PiKanban className={`${darkMode ? 'text-black' : 'text-[#BB86FC] hover:text-purple-600'}`} onClick={handleSpace} size={30} />
      }
               </button>}/>
      <NavBar Button={<button className="w-10 h-10 focus:outline-none rounded-full flex items-center justify-center" 
              onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <AiFillMoon className='text-black' size={25} /> : <MdWbSunny size={25} />}
              </button>} 
              bgColor={darkMode ? 'bg-white' : 'bg-[#121212]'} />
      {space == true? 
      <Kanban bgColor={darkMode ? 'bg-white' : 'bg-[#121212]'} cards={cards} isExpanded={isExpanded}/>
      : 
      <TaskSpace textColor={darkMode ? 'text-black' : 'text-white'} addTask={handleShowModal} taskModal={handleShowEditModal} deleteCard={deleteCard} extractDate={extractDateTime} editCard={editCard} cards={cards} bgColor={darkMode ? 'bg-white' : 'bg-[#121212]'} hoveredCardIndex={hoveredCardIndex} isExpanded={isExpanded} expandButton={<button className="absolute right-[-12px] transform duration-300 group-hover:right-[-2px] h-20 w-5 bg-white/5 backdrop-blur-[1px] border border-white/10  p-1 rounded rounded-tr-[1px] rounded-br-[0px]" onClick={() => setIsExpanded(!isExpanded)}>{ isExpanded ? <FaAngleLeft /> : <FaAngleRight />}</button>} />
      }
      <ProgressSpace bgColor={darkMode ? 'bg-white' : 'bg-[#121212]'} />
      <MotivationSpace bgColor={darkMode ? 'bg-white' : 'bg-[#121212]'} />
      <EditModal textColor={darkMode ? 'text-black' : 'text-white'} Show={showEditModal} hide={hideEditModal} bgColor={darkMode ? 'bg-white' : 'bg-[#1E1E1E]'}>
      {cards.map((card, index) => (
  // Check if the card's createdAt matches the cardEdit value
  card.createdAt === cardEdit ? (
    <div key={index} className={`w-fit gap-2 border-[#333333] ${card.bgColor ? card.bgColor: 'bg-[#1E1E1E]'}  edit-card-animation  flex flex-col p-4 rounded-[10px] group`}>
      <InputArea value={card.title} onChange={(e) => {handleInputChange(e, 'title')}} placeholder="Title here..." />
      <AddTextArea value={card.description} onChange={(e) => {handleInputChange(e, 'description')}} placeholder="Description here..." />
    </div>
  ) : null // If card doesn't match, render nothing
))}

      </EditModal>
      <Modal addLabel={addLabel} labels={labels} handleLabel={handleLabel} textColor={darkMode ? 'text-black' : 'text-white'} Show={showModal && !showLinkModal} priority={priority} hide={hideModal} handleSubmit={handleSubmit} bgColor={darkMode ? 'bg-white' : 'bg-[#1E1E1E]'} 
      Priority={<div className="absolute h-fit w-fit items-center justify-center flex flex-row gap-2 bottom-2">
        <button className="bg-red-600 w-5 relative rounded-full h-5" onClick={() => {Priority1()}}>
          <div className='absolute z-2 bg-red-600 top-0 rounded-full w-5 h-5 transform-h duration-500 ease hover:h-20 group flex justify-center items-end p-1'>
            <span className='opacity-0 text-sm text-black rounded-full transform-opacity duration-500 group-hover:opacity-100 absolute'>P1</span>
          </div>
        </button>
        <button className="bg-yellow-500 w-5 relative rounded-full h-5" onClick={() => {Priority2()}}>
          <div className='absolute z-2 bg-yellow-500 top-0 rounded-full w-5 h-5 transform-h duration-500 ease hover:h-20 group flex justify-center items-end p-1'>
          <span className='opacity-0 text-sm text-black rounded-full transform-opacity duration-500 group-hover:opacity-100 absolute'>P2</span>
          </div>
        </button>
        <button className="bg-blue-500 w-5 relative rounded-full h-5" onClick={() => {Priority3()}}>
          <div className='absolute z-2 bg-blue-500 top-0 rounded-full w-5 h-5 transform-h duration-500 ease hover:h-20 group flex justify-center items-end p-1'>
            <span className='opacity-0 text-sm text-black rounded-full transform-opacity duration-500 group-hover:opacity-100 absolute'>P3</span>
          </div>
        </button>
        <button className="bg-gray-500 w-5 relative rounded-full h-5" onClick={() => {Priority4()}}>
          <div className='absolute z-2 bg-gray-500 top-0 rounded-full w-5 h-5 transform-h duration-500 ease hover:h-20 group flex justify-center items-end p-1'>
            <span className='opacity-0 text-sm text-black rounded-full transform-opacity duration-500 group-hover:opacity-100 absolute'>P4</span>
          </div>
        </button>
    </div>}
      >
        <AddTodo Show={showModal}
                 titleInput={<InputArea type="text" value={title} name="title" placeholder="Title here..." 
                          onChange={(e) => {setTitle(e.target.value)}}
                          className="font-sans p-2 bg-transparent focus:outline-none w-full" />}
                 descriptionInput={
                          <AddTextArea onChange={(e) => {setDescription(e.target.value)}} className="font-sans" value={description} placeholder="Description here..." />
                          }
                 
    
         toDoDeadLineButton={<button className=" bg-white p-2 rounded" onClick={() => setShowDeadLineModal(true)}>
          <IoIosTimer className="text-black" size={25} />
      </button>}
      time={deadLineTime} date={deadLineDate}
      removeText={deadLineRemove}
      priority={priority}
                          />
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
      <DeadLineModal Show={showDeadLineModal} hide={hideDeadLineModal} time={deadLineTime} date={deadLineDate}>
       <input 
       name={deadLineText}
       className='text-black bg-white rounded'
       type="text"
       value={deadLineText}
       onChange={(e) => setDeadLineText(e.target.value)}
        />
        <button onClick={() => extractDateTime(deadLineText)} className='w-full bg-blue-500 rounded focus:outline-none'>Set</button>
      </DeadLineModal>
    </div>
  )
}

export default App
