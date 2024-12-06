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
import { PiKanbanFill } from "react-icons/pi";
import axios from 'axios';
import React, { useRef } from "react";
import AddTextArea from './components/TextArea';


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
  const [priority, setPriority] = useState('');
  const [cardEdit, setCardEdit] = useState('');

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
    try {
      const response = await axios.post('http://localhost:5000/extract-datetime', {
        inputText,
      });
      const { date, time, deadline } = response.data;
      setDeadLineDate(date);
      setDeadLineTime(time);
      setDeadLine(deadline);
      console.log(`Date: ${date}, Time: ${time}, Deadline: ${deadline}`)
      return deadline
    } catch (error) {
      console.error('Error extracting date/time:', error.response?.data || error.message);
    }
    setDeadLineText('')
    hideDeadLineModal()
  }

  const toggleUrgent = () => {
    setIsUrgent(!isUrgent);
    setTaskPriority(!isUrgent, isImportant);
  }

  const toggleImportant = () => {
    setIsImportant(!isImportant);
    setTaskPriority(isUrgent, !isImportant);
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
        deadLine,
        priority,
        createdAt,
        secondsLeft // Add the calculated value to the card
      };
  
      console.log(newCard)
    
      // Reset fields and update state
      setTitle('');
      setDescription('');
      setDeadLineText('');
      setDeadLineDate('');
      setDeadLineTime('');
      addCard(newCard);
    
      // Reset the priority states after adding the card
      setIsUrgent(false);
      setIsImportant(false);
      setPriority('');
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
      <ToolBar bgColor={darkMode ? 'bg-slate-300' : 'bg-[#121212]'} 
               Button={<button className="w-10 focus:outline-none h-10 rounded-full flex items-center justify-center" 
               onClick={handleShowModal}>
                <IoMdAddCircle className={`${darkMode ? 'text-black' : 'text-[#BB86FC]'}`} size={40} />
               </button>} Kanban={<button className="w-10 focus:outline-none h-10 rounded-full flex items-center justify-center" 
               onClick={() => setShowKanban(true)}>
                <PiKanbanFill className={`${darkMode ? 'text-black' : 'text-[#BB86FC]'}`} size={30} />
               </button>}/>
      <NavBar Button={<button className="w-10 h-10 focus:outline-none rounded-full flex items-center justify-center" 
              onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <AiFillMoon className='text-black' size={25} /> : <MdWbSunny size={25} />}
              </button>} 
              bgColor={darkMode ? 'bg-slate-300' : 'bg-[#121212]'} />
      
      <TaskSpace addTask={handleShowModal} taskModal={handleShowEditModal} deleteCard={deleteCard} extractDate={extractDateTime} editCard={editCard} cards={cards} bgColor={darkMode ? 'bg-slate-300' : 'bg-[#121212]'} hoveredCardIndex={hoveredCardIndex} isExpanded={isExpanded} expandButton={<button className="absolute right-[-12px] transform duration-300 group-hover:right-[-2px] h-20 w-5 bg-white/5 backdrop-blur-[1px] border border-white/10  p-1 rounded rounded-tr-[1px] rounded-br-[0px]" onClick={() => setIsExpanded(!isExpanded)}>{ isExpanded ? <FaAngleLeft /> : <FaAngleRight />}</button>} />
      <ProgressSpace bgColor={darkMode ? 'bg-slate-300' : 'bg-[#121212]'} />
      <MotivationSpace bgColor={darkMode ? 'bg-slate-300' : 'bg-[#121212]'} />
      <EditModal Show={showEditModal} hide={hideEditModal} bgColor={darkMode ? 'bg-slate-300' : 'bg-[#1E1E1E]'}>
      {cards.map((card, index) => (
  // Check if the card's createdAt matches the cardEdit value
  card.createdAt === cardEdit ? (
    <div key={index} className={`w-fit   gap-2 border-[#333333] ${card.bgColor ? card.bgColor: 'bg-[#1E1E1E]'} shadow-[0_0_15px_5px_rgba(187,134,252,0.5)] edit-card-animation  flex flex-col p-4 rounded-[10px] group`}>
      <input
        type="text"
        placeholder="Title here..."
        value={card.title} // Use the current card's title
        onChange={(e) => handleInputChange(e, 'title')} // Update specific card by index
        className="text-white/70 w-fit text-[30px] bg-transparent border-none outline-none"
      />
      <AddTextArea value={card.description} onChange={(e) => handleInputChange(e, 'description')} placeholder="Description here..." />
    </div>
  ) : null // If card doesn't match, render nothing
))}

      </EditModal>
      <Modal Show={showModal && !showLinkModal} hide={hideModal} handleSubmit={handleSubmit} bgColor={darkMode ? 'bg-slate-300' : 'bg-[#1E1E1E]'}>
        <AddTodo
                 titleInput={<input type="text" value={title} name="title" placeholder="Title here..." 
                          onChange={(e) => setTitle(e.target.value)}
                          className="text-white p-2 bg-transparent focus:outline-none w-full" />}
                 descriptionInput={
                          <AddTextArea onChange={(e) => setDescription(e.target.value)} value={description} placeholder="Description here..." />
                          }
                 urgentButton={<button className={`rounded-lg rounded-br-[0px] border-none focus:outline-none p-2 
                  ${isUrgent ? 'bg-red-500' : 'bg-white'}`} onClick={toggleUrgent}>
                          <TbUrgent className="text-black" size={25} />
                          </button>}
                 importantButton={<button className={`rounded-lg rounded-br-[0px] border-none focus:outline-none p-2 
                  ${isImportant ? 'bg-yellow-400' : 'bg-white'}`} onClick={toggleImportant}>
                 <FaRegBell className="text-black" size={25} />
             </button>}
             taskDeadLineButton={<button className=" bg-white p-2 rounded-lg rounded-br-[0px]" onClick={() => setShowDeadLineModal(true)}>
             <IoIosTimer className="text-black" size={25} />
         </button>}
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
