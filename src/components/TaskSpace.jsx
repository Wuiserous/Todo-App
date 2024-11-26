import { useState } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { BiLogoBaidu } from "react-icons/bi";
import ProgressBar from './ProgressBar';
import { MdOutlineMoreTime } from "react-icons/md";
import { LuUserPlus } from "react-icons/lu";
import { IoColorPaletteOutline } from "react-icons/io5";
import { TbAlarmPlus } from "react-icons/tb";
import { TbFlagPlus } from "react-icons/tb";

export default function TaskSpace(props) {
  const [hoveredButton, setHoveredButton] = useState(null);
  const [visibleDiv, setVisibleDiv] = useState(null); // Tracks the currently visible div

  const handleButtonClick = (createdAt, button) => {
    setVisibleDiv((prevState) => {
      // Check if the clicked button matches the current state
      if (prevState?.createdAt === createdAt && prevState?.button === button) {
        return null; // Toggle off
      }
      return { createdAt, button }; // Update the state with new values
    });
  };

  const handleMouseEnter = (id) => {
    setHoveredButton(id);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  // Assuming `props.cards` is the array of card data from the DB
  const cards = props.cards


  const numOfColumns = props.isExpanded ? 4 : 3

  const Priority1 = []
  const Priority2 = []
  const Priority3 = []
  const Priority4 = []

  cards.forEach((card) => {
    if (card.priority === 'P1') {
      Priority1.push(card)
    }
    else if (card.priority === 'P2') {
      Priority2.push(card)
    }
    else if (card.priority === 'P3') {
      Priority3.push(card)
    }
    else {
      Priority4.push(card)
    }
  })

  const sortedPriority1 = Priority1.sort((a, b) => a.secondsLeft - b.secondsLeft)
  const sortedPriority2 = Priority2.sort((a, b) => a.secondsLeft - b.secondsLeft)
  const sortedPriority3 = Priority3.sort((a, b) => a.secondsLeft - b.secondsLeft)
  const sortedPriority4 = Priority4.sort((a, b) => a.secondsLeft - b.secondsLeft)

  const combinedArray = sortedPriority1
  .concat(sortedPriority2, sortedPriority3, sortedPriority4);



  // Function to organize cards into 3 columns
  const columns = props.isExpanded ? [[], [], [], []] : [[], [], []];

  // Distribute cards into the three columns
  combinedArray.forEach((card, index) => {
    columns[index % numOfColumns].push(card);
  });

  if (cards.length == 0) return (
  <div className={`rounded-xl relative gap-2 p-2 hide-scrollbar ${props.isExpanded? 'col-span-3': 'col-span-1'} overflow-auto col-start-2 row-start-2 row-end-5 ${props.bgColor}`}>
    <div className="absolute w-[25px] h-20 top-[40%] right-0 overflow-auto group hide-scrollbar z-10 flex justify-center items-center">{props.expandButton}</div>
      <div className="h-full flex flex-col gap-2 col-span-1 flex flex-col justify-center items-center">
        <BiLogoBaidu size={195} className="text-[#A0A0A0] text-opacity-10" />
        <h1 className="text-[#A0A0A0] text-opacity-10">No tasks added yet</h1>
      </div>
  </div>
  )

  return (
    <div className={`rounded-xl relative col-start-2 transition-all duration-300 ease-in-out transform ${props.isExpanded? 'col-span-3': 'col-span-1'} hide-scrollbar row-start-2 row-end-5 ${props.bgColor}`}>
      <div className="absolute w-[25px] h-20 top-[40%] right-0 overflow-auto group hide-scrollbar z-10 flex justify-center items-center">{props.expandButton}</div>
      <div className={`grid absolute w-full h-full ${props.isExpanded? 'grid-cols-4': 'grid-cols-3'} gap-2 p-2 hide-scrollbar overflow-auto`}>
      <div className="h-full flex flex-col gap-2 col-span-1">
        {columns[0].map((card, index) => (
          <div className={`w-full relative h-fit border-[1px] border-[#333333] bg-[#1E1E1E] hover:shadow-[0_0_15px_5px_rgba(187,134,252,0.5)]  flex flex-col gap-2 p-4 rounded-[5px] rounded-br-[0px] rounded-bl-[0px] card-animation transition-all duration-300 group`} key={index}>  
            {index*3 === props.hoveredCardIndex ? (<div className='w-full h-full inset-0 absolute border rounded-[5px] rounded-br-[0px] rounded-bl-[0px] shadow-[0_0_15px_5px_rgba(187,134,252,0.5)]'></div>) : (null)} 
            <h3 className="text-[#A0A0A0] text-[25px]">{card.title}</h3>
            <p className="text-[#E0E0E0]">{card.description}</p>
            <div className="w-full h-fit flex flex-row justify-between">
             <button 
             className="focus:outline-none relative flex items-center justify-center opacity-0 group-hover:opacity-100 w-fit h-fit p-1 rounded-full hover:bg-white/20"
             id='alarm'
             onMouseEnter={() => handleMouseEnter("alarm")}
             onMouseLeave={handleMouseLeave}
             onClick={() => handleButtonClick(card.createdAt, 'alarm')}
             >
              <TbAlarmPlus size={20} className="text-white/60"/>
              {hoveredButton === 'alarm' && (
                <span className="absolute gap-1 flex flex-row text-[10px] text-bold p-1 bottom-[-30px] z-10  rounded opacity-0 group-hover:opacity-100 bg-gray-500">
                  <span>Set</span><span>reminder</span>
                </span>
              )}
             </button>
             {visibleDiv?.createdAt === card.createdAt && visibleDiv?.button === 'alarm' && (
              <div className="absolute p-1 bg-red-500 z-10 bottom-[-20px] left-[-5px]">set alarm</div>
            )}
             <button 
             className="focus:outline-none relative flex items-center justify-center opacity-0 group-hover:opacity-100 w-fit h-fit p-1 rounded-full hover:bg-white/20"
             id='priority'
             onMouseEnter={() => handleMouseEnter("priority")}
             onMouseLeave={handleMouseLeave}
             onClick={() => handleButtonClick(card.createdAt, 'priority')}
             >
              <TbFlagPlus size={20} className="text-white/60"/>
              {hoveredButton === 'priority' && (
                <span className="absolute text-[10px] gap-1 flex flex-row p-1 bottom-[-30px] z-10  rounded opacity-0 group-hover:opacity-100 bg-gray-500">
                  <span>Set</span><span>priority</span>
                </span>
              )}
             </button>
             {visibleDiv?.createdAt === card.createdAt && visibleDiv?.button === 'priority' && (
              <div className="absolute p-1 bg-orange-500 z-10 bottom-[-20px] left-[45px]">set priority</div>
            )}
             <button 
             className="focus:outline-none relative flex items-center justify-center opacity-0 group-hover:opacity-100 w-fit h-fit p-1 rounded-full hover:bg-white/20" 
             id='color'
             onMouseEnter={() => handleMouseEnter("color")}
             onMouseLeave={handleMouseLeave}
             onClick={() => handleButtonClick(card.createdAt, 'color')}
             >
              <IoColorPaletteOutline className="text-white/60" size={20}/>
              {hoveredButton === 'color' && (
                <span className="absolute text-[10px] flex flex-row gap-1 p-1 bottom-[-30px] z-10 p-1 rounded opacity-0 group-hover:opacity-100 bg-gray-500" >
                  <span>Change</span><span>Background</span>
                </span>
              )}
             </button>
             {visibleDiv?.createdAt === card.createdAt && visibleDiv?.button === 'color' && (
              <div className="absolute p-1 bg-pink-500 z-10 bottom-[-20px] left-[75px]">add background color</div>
            )}
             <button 
             className="focus:outline-none relative flex items-center justify-center opacity-0 group-hover:opacity-100 w-fit h-fit p-1 rounded-full hover:bg-white/20" 
             id='addUser'
             onMouseEnter={() => handleMouseEnter("addUser")}
             onMouseLeave={handleMouseLeave}
             onClick={() => handleButtonClick(card.createdAt, 'addUser')}
             >
              <LuUserPlus className="text-white/60" size={20}/>
              {hoveredButton === 'addUser' && (
                <span className="absolute text-[10px] p-1 bottom-[-30px] z-10 p-1 rounded opacity-0 group-hover:opacity-100 bg-gray-500">
                  Collaborate
                </span>
              )}
             </button>
             {visibleDiv?.createdAt === card.createdAt && visibleDiv?.button === 'addUser' && (
              <div className="absolute p-1 bg-teal-500 z-10 bottom-[-20px] left-[160px]">Collaborate</div>
            )}
             <button 
             className="focus:outline-none relative flex items-center justify-center opacity-0 group-hover:opacity-100 w-fit h-fit p-1 rounded-full hover:bg-white/20" 
             id="deadline"
             onMouseEnter={() => handleMouseEnter("deadline")}
             onMouseLeave={handleMouseLeave}
             onClick={() => handleButtonClick(card.createdAt, 'deadline')}
             >
              <MdOutlineMoreTime className="text-white/60" size={20}/>
              {hoveredButton === 'deadline' && (
                <span className="absolute text-[10px] bottom-[-30px] z-10 p-1 rounded opacity-0 group-hover:opacity-100 bg-gray-500">
                  {card.secondsLeft ? (<div className="flex flex-row gap-1"><span>Edit</span><span>Deadline</span></div>) : (<div className="flex flex-row gap-1"><span>Add</span><span>Deadline</span></div>)}
                </span>
              )}
             </button>
             {visibleDiv?.createdAt === card.createdAt && visibleDiv?.button === 'deadline' && (
              <div className="absolute p-1 bg-blue-400 z-10 bottom-[-20px] left-[220px]">add deadline</div>
            )}
             <button 
             className="focus:outline-none relative flex items-center justify-center opacity-0 group-hover:opacity-100 w-fit h-fit p-1 rounded-full hover:bg-white/20" 
             id='delete' 
             onClick={() => props.deleteCard(card.createdAt)}
             onMouseEnter={() => handleMouseEnter("delete")}
             onMouseLeave={handleMouseLeave}
             >
              <MdOutlineDelete className="text-white/60" size={20}/>
              {hoveredButton === 'delete' && (
                <span className="absolute text-[10px] bottom-[-30px] z-10 p-1 rounded opacity-0 group-hover:opacity-100 bg-gray-500">
                  delete
                </span>
              )}
             </button>
            </div>
            {card.isUrgent && card.isImportant ? (
              <div className="w-full h-[5px] absolute bottom-[0px] left-[0.1px] flex flex-row">
                <div className="w-10 h-full bg-[#ff0000] "></div>
                {card.secondsLeft ? (
                  <ProgressBar
                  createdTime={card.createdAt}
                  deadLine={card.deadLine}
                  color="red"
                  isExpanded={props.isExpanded}
                />
                ): null}
            </div>
            ) : card.isUrgent ? (
              <div className="w-full h-[5px] absolute bottom-[0px] left-[0.1px] flex flex-row">
                <div className="w-10 h-full bg-[#0000ff] "></div>
                {card.secondsLeft ? (
                  <ProgressBar
                  createdTime={card.createdAt}
                  deadLine={card.deadLine}
                  color="blue"
                  isExpanded={props.isExpanded}
                />
                ): null}
              </div>
            ) : card.isImportant ? (
              <div className="w-full h-[5px] absolute bottom-[0px] left-[0.1px] flex flex-row">
                <div className="w-10 h-full bg-[#ffff00] "></div>
                {card.secondsLeft ? (
                  <ProgressBar
                  createdTime={card.createdAt}
                  deadLine={card.deadLine}
                  color="yellow"
                  isExpanded={props.isExpanded}
                />
                ): null}
              </div>
            ) : card.isUrgent === false && card.isImportant === false ? (
              <div className="w-full h-[5px] absolute bottom-[0px] left-[0.1px] flex flex-row">
                <div className="w-10 h-full bg-[#808080]"></div>
                {card.secondsLeft ? (
                  <ProgressBar
                  createdTime={card.createdAt}
                  deadLine={card.deadLine}
                  color="gray"
                  isExpanded={props.isExpanded}
                />
                ): null}
              </div>
          ) : null }
          </div>
        ))}
      </div>
      <div className="h-full flex flex-col gap-2 col-span-1">
        {columns[1].map((card, index) => (
          <div className={`w-full relative h-fit border-[1px] border-[#333333] bg-[#1E1E1E] hover:shadow-[0_0_15px_5px_rgba(187,134,252,0.5)]  flex flex-col gap-2 p-4 rounded-[5px] rounded-br-[0px] rounded-bl-[0px] card-animation transition-all duration-300 group`} key={index}>  
          {index*3 + 1 === props.hoveredCardIndex ? (<div className='w-full h-full inset-0 absolute border rounded-[5px] rounded-br-[0px] rounded-bl-[0px] shadow-[0_0_15px_5px_rgba(187,134,252,0.5)]'></div>) : (null)} 
          <h3 className="text-[#A0A0A0]">{card.title}</h3>
          <p className="text-[#E0E0E0]">{card.description}</p>
          <div className="w-full h-fit flex flex-row justify-between">
             <button 
             className="focus:outline-none relative flex items-center justify-center opacity-0 group-hover:opacity-100 w-fit h-fit p-1 rounded-full hover:bg-white/20"
             id='alarm'
             onMouseEnter={() => handleMouseEnter("alarm")}
             onMouseLeave={handleMouseLeave}
             onClick={() => handleButtonClick(card.createdAt, 'alarm')}
             >
              <TbAlarmPlus size={20} className="text-white/60"/>
              {hoveredButton === 'alarm' && (
                <span className="absolute gap-1 flex flex-row text-[10px] text-bold p-1 bottom-[-30px] z-10  rounded opacity-0 group-hover:opacity-100 bg-gray-500">
                  <span>Set</span><span>reminder</span>
                </span>
              )}
             </button>
             {visibleDiv?.createdAt === card.createdAt && visibleDiv?.button === 'alarm' && (
              <div className="absolute p-1 bg-red-500 z-10 bottom-[-20px] left-[-5px]">set alarm</div>
            )}
             <button 
             className="focus:outline-none relative flex items-center justify-center opacity-0 group-hover:opacity-100 w-fit h-fit p-1 rounded-full hover:bg-white/20"
             id='priority'
             onMouseEnter={() => handleMouseEnter("priority")}
             onMouseLeave={handleMouseLeave}
             onClick={() => handleButtonClick(card.createdAt, 'priority')}
             >
              <TbFlagPlus size={20} className="text-white/60"/>
              {hoveredButton === 'priority' && (
                <span className="absolute text-[10px] gap-1 flex flex-row p-1 bottom-[-30px] z-10  rounded opacity-0 group-hover:opacity-100 bg-gray-500">
                  <span>Set</span><span>priority</span>
                </span>
              )}
             </button>
             {visibleDiv?.createdAt === card.createdAt && visibleDiv?.button === 'priority' && (
              <div className="absolute p-1 bg-orange-500 z-10 bottom-[-20px] left-[45px]">set priority</div>
            )}
             <button 
             className="focus:outline-none relative flex items-center justify-center opacity-0 group-hover:opacity-100 w-fit h-fit p-1 rounded-full hover:bg-white/20" 
             id='color'
             onMouseEnter={() => handleMouseEnter("color")}
             onMouseLeave={handleMouseLeave}
             onClick={() => handleButtonClick(card.createdAt, 'color')}
             >
              <IoColorPaletteOutline className="text-white/60" size={20}/>
              {hoveredButton === 'color' && (
                <span className="absolute text-[10px] flex flex-row gap-1 p-1 bottom-[-30px] z-10 p-1 rounded opacity-0 group-hover:opacity-100 bg-gray-500" >
                  <span>Change</span><span>Background</span>
                </span>
              )}
             </button>
             {visibleDiv?.createdAt === card.createdAt && visibleDiv?.button === 'color' && (
              <div className="absolute p-1 bg-pink-500 z-10 bottom-[-20px] left-[75px]">add background color</div>
            )}
             <button 
             className="focus:outline-none relative flex items-center justify-center opacity-0 group-hover:opacity-100 w-fit h-fit p-1 rounded-full hover:bg-white/20" 
             id='addUser'
             onMouseEnter={() => handleMouseEnter("addUser")}
             onMouseLeave={handleMouseLeave}
             onClick={() => handleButtonClick(card.createdAt, 'addUser')}
             >
              <LuUserPlus className="text-white/60" size={20}/>
              {hoveredButton === 'addUser' && (
                <span className="absolute text-[10px] p-1 bottom-[-30px] z-10 p-1 rounded opacity-0 group-hover:opacity-100 bg-gray-500">
                  Collaborate
                </span>
              )}
             </button>
             {visibleDiv?.createdAt === card.createdAt && visibleDiv?.button === 'addUser' && (
              <div className="absolute p-1 bg-teal-500 z-10 bottom-[-20px] left-[160px]">Collaborate</div>
            )}
             <button 
             className="focus:outline-none relative flex items-center justify-center opacity-0 group-hover:opacity-100 w-fit h-fit p-1 rounded-full hover:bg-white/20" 
             id="deadline"
             onMouseEnter={() => handleMouseEnter("deadline")}
             onMouseLeave={handleMouseLeave}
             onClick={() => handleButtonClick(card.createdAt, 'deadline')}
             >
              <MdOutlineMoreTime className="text-white/60" size={20}/>
              {hoveredButton === 'deadline' && (
                <span className="absolute text-[10px] bottom-[-30px] z-10 p-1 rounded opacity-0 group-hover:opacity-100 bg-gray-500">
                  {card.secondsLeft ? (<div className="flex flex-row gap-1"><span>Edit</span><span>Deadline</span></div>) : (<div className="flex flex-row gap-1"><span>Add</span><span>Deadline</span></div>)}
                </span>
              )}
             </button>
             {visibleDiv?.createdAt === card.createdAt && visibleDiv?.button === 'deadline' && (
              <div className="absolute p-1 bg-blue-400 z-10 bottom-[-20px] left-[220px]">add deadline</div>
            )}
             <button 
             className="focus:outline-none relative flex items-center justify-center opacity-0 group-hover:opacity-100 w-fit h-fit p-1 rounded-full hover:bg-white/20" 
             id='delete' 
             onClick={() => props.deleteCard(card.createdAt)}
             onMouseEnter={() => handleMouseEnter("delete")}
             onMouseLeave={handleMouseLeave}
             >
              <MdOutlineDelete className="text-white/60" size={20}/>
              {hoveredButton === 'delete' && (
                <span className="absolute text-[10px] bottom-[-30px] z-10 p-1 rounded opacity-0 group-hover:opacity-100 bg-gray-500">
                  delete
                </span>
              )}
             </button>
            </div>
          {card.isUrgent && card.isImportant ? (
              <div className="w-full h-[5px] absolute bottom-[0px] left-[0.1px] flex flex-row">
                <div className="w-10 h-full bg-[#ff0000] "></div>
                {card.secondsLeft ? (
                  <ProgressBar
                  createdTime={card.createdAt}
                  deadLine={card.deadLine}
                  color="red"
                  isExpanded={props.isExpanded}
                />
                ): null}
            </div>
            ) : card.isUrgent ? (
              <div className="w-full h-[5px] absolute bottom-[0px] left-[0.1px] flex flex-row">
                <div className="w-10 h-full bg-[#0000ff] "></div>
                {card.secondsLeft ? (
                  <ProgressBar
                  createdTime={card.createdAt}
                  deadLine={card.deadLine}
                  color="blue"
                  isExpanded={props.isExpanded}
                />
                ): null}
              </div>
            ) : card.isImportant ? (
              <div className="w-full h-[5px] absolute bottom-[0px] left-[0.1px] flex flex-row">
                <div className="w-10 h-full bg-[#ffff00] "></div>
                {card.secondsLeft ? (
                  <ProgressBar
                  createdTime={card.createdAt}
                  deadLine={card.deadLine}
                  color="yellow"
                  isExpanded={props.isExpanded}
                />
                ): null}
              </div>
            ) : card.isUrgent === false && card.isImportant === false ? (
              <div className="w-full h-[5px] absolute bottom-[0px] left-[0.1px] flex flex-row">
                <div className="w-10 h-full bg-[#808080]"></div>
                {card.secondsLeft ? (
                  <ProgressBar
                  createdTime={card.createdAt}
                  deadLine={card.deadLine}
                  color="gray"
                  isExpanded={props.isExpanded}
                />
                ): null}
              </div>
          ) : null }
        </div>
        ))}
      </div>
      <div className="h-full flex flex-col gap-2 col-span-1">
        {columns[2].map((card, index) => (
          <div className={`w-full relative z-1 h-fit border-[1px] border-[#333333] bg-[#1E1E1E] hover:shadow-[0_0_15px_5px_rgba(187,134,252,0.5)]  flex flex-col gap-2 p-4 rounded-[5px] rounded-br-[0px] rounded-bl-[0px] card-animation transition-all duration-300 group`} key={index}>  
          {index*3 + 2 === props.hoveredCardIndex ? (<div className='w-full h-full inset-0 absolute border rounded-[5px] rounded-br-[0px] rounded-bl-[0px] shadow-[0_0_15px_5px_rgba(187,134,252,0.5)]'></div>) : (null)} 
          <h3 className="text-[#A0A0A0]">{card.title}</h3>
          <p className="text-[#E0E0E0]">{card.description}</p>
          <div className="w-full h-fit flex flex-row justify-between">
             <button 
             className="focus:outline-none relative flex items-center justify-center opacity-0 group-hover:opacity-100 w-fit h-fit p-1 rounded-full hover:bg-white/20"
             id='alarm'
             onMouseEnter={() => handleMouseEnter("alarm")}
             onMouseLeave={handleMouseLeave}
             onClick={() => handleButtonClick(card.createdAt, 'alarm')}
             >
              <TbAlarmPlus size={20} className="text-white/60"/>
              {hoveredButton === 'alarm' && (
                <span className="absolute gap-1 flex flex-row text-[10px] text-bold p-1 bottom-[-30px] z-10  rounded opacity-0 group-hover:opacity-100 bg-gray-500">
                  <span>Set</span><span>reminder</span>
                </span>
              )}
             </button>
             {visibleDiv?.createdAt === card.createdAt && visibleDiv?.button === 'alarm' && (
              <div className="absolute p-1 bg-red-500 z-10 bottom-[-20px] left-[-5px]">set alarm</div>
            )}
             <button 
             className="focus:outline-none relative flex items-center justify-center opacity-0 group-hover:opacity-100 w-fit h-fit p-1 rounded-full hover:bg-white/20"
             id='priority'
             onMouseEnter={() => handleMouseEnter("priority")}
             onMouseLeave={handleMouseLeave}
             onClick={() => handleButtonClick(card.createdAt, 'priority')}
             >
              <TbFlagPlus size={20} className="text-white/60"/>
              {hoveredButton === 'priority' && (
                <span className="absolute text-[10px] gap-1 flex flex-row p-1 bottom-[-30px] z-10  rounded opacity-0 group-hover:opacity-100 bg-gray-500">
                  <span>Set</span><span>priority</span>
                </span>
              )}
             </button>
             {visibleDiv?.createdAt === card.createdAt && visibleDiv?.button === 'priority' && (
              <div className="absolute p-1 bg-orange-500 z-10 bottom-[-20px] left-[45px]">set priority</div>
            )}
             <button 
             className="focus:outline-none relative flex items-center justify-center opacity-0 group-hover:opacity-100 w-fit h-fit p-1 rounded-full hover:bg-white/20" 
             id='color'
             onMouseEnter={() => handleMouseEnter("color")}
             onMouseLeave={handleMouseLeave}
             onClick={() => handleButtonClick(card.createdAt, 'color')}
             >
              <IoColorPaletteOutline className="text-white/60" size={20}/>
              {hoveredButton === 'color' && (
                <span className="absolute text-[10px] flex flex-row gap-1 p-1 bottom-[-30px] z-10 p-1 rounded opacity-0 group-hover:opacity-100 bg-gray-500" >
                  <span>Change</span><span>Background</span>
                </span>
              )}
             </button>
             {visibleDiv?.createdAt === card.createdAt && visibleDiv?.button === 'color' && (
              <div className="absolute p-1 bg-pink-500 z-10 bottom-[-20px] left-[75px]">add background color</div>
            )}
             <button 
             className="focus:outline-none relative flex items-center justify-center opacity-0 group-hover:opacity-100 w-fit h-fit p-1 rounded-full hover:bg-white/20" 
             id='addUser'
             onMouseEnter={() => handleMouseEnter("addUser")}
             onMouseLeave={handleMouseLeave}
             onClick={() => handleButtonClick(card.createdAt, 'addUser')}
             >
              <LuUserPlus className="text-white/60" size={20}/>
              {hoveredButton === 'addUser' && (
                <span className="absolute text-[10px] p-1 bottom-[-30px] z-10 p-1 rounded opacity-0 group-hover:opacity-100 bg-gray-500">
                  Collaborate
                </span>
              )}
             </button>
             {visibleDiv?.createdAt === card.createdAt && visibleDiv?.button === 'addUser' && (
              <div className="absolute p-1 bg-teal-500 z-10 bottom-[-20px] left-[160px]">Collaborate</div>
            )}
             <button 
             className="focus:outline-none relative flex items-center justify-center opacity-0 group-hover:opacity-100 w-fit h-fit p-1 rounded-full hover:bg-white/20" 
             id="deadline"
             onMouseEnter={() => handleMouseEnter("deadline")}
             onMouseLeave={handleMouseLeave}
             onClick={() => handleButtonClick(card.createdAt, 'deadline')}
             >
              <MdOutlineMoreTime className="text-white/60" size={20}/>
              {hoveredButton === 'deadline' && (
                <span className="absolute text-[10px] bottom-[-30px] z-10 p-1 rounded opacity-0 group-hover:opacity-100 bg-gray-500">
                  {card.secondsLeft ? (<div className="flex flex-row gap-1"><span>Edit</span><span>Deadline</span></div>) : (<div className="flex flex-row gap-1"><span>Add</span><span>Deadline</span></div>)}
                </span>
              )}
             </button>
             {visibleDiv?.createdAt === card.createdAt && visibleDiv?.button === 'deadline' && (
              <div className="absolute p-1 bg-blue-400 z-10 bottom-[-20px] left-[220px]">add deadline</div>
            )}
             <button 
             className="focus:outline-none relative flex items-center justify-center opacity-0 group-hover:opacity-100 w-fit h-fit p-1 rounded-full hover:bg-white/20" 
             id='delete' 
             onClick={() => props.deleteCard(card.createdAt)}
             onMouseEnter={() => handleMouseEnter("delete")}
             onMouseLeave={handleMouseLeave}
             >
              <MdOutlineDelete className="text-white/60" size={20}/>
              {hoveredButton === 'delete' && (
                <span className="absolute text-[10px] bottom-[-30px] z-10 p-1 rounded opacity-0 group-hover:opacity-100 bg-gray-500">
                  delete
                </span>
              )}
             </button>
            </div>
          {card.isUrgent && card.isImportant ? (
              <div className="w-full h-[5px] absolute bottom-[0px] left-[0.1px] flex flex-row">
                <div className="w-10 h-full bg-[#ff0000] "></div>
                {card.secondsLeft ? (
                  <ProgressBar
                  createdTime={card.createdAt}
                  deadLine={card.deadLine}
                  color="red"
                  isExpanded={props.isExpanded}
                />
                ): null}
            </div>
            ) : card.isUrgent ? (
              <div className="w-full h-[5px] absolute bottom-[0px] left-[0.1px] flex flex-row">
                <div className="w-10 h-full bg-[#0000ff] "></div>
                {card.secondsLeft ? (
                  <ProgressBar
                  createdTime={card.createdAt}
                  deadLine={card.deadLine}
                  color="blue"
                  isExpanded={props.isExpanded}
                />
                ): null}
              </div>
            ) : card.isImportant ? (
              <div className="w-full h-[5px] absolute bottom-[0px] left-[0.1px] flex flex-row">
                <div className="w-10 h-full bg-[#ffff00] "></div>
                {card.secondsLeft ? (
                  <ProgressBar
                  createdTime={card.createdAt}
                  deadLine={card.deadLine}
                  color="yellow"
                  isExpanded={props.isExpanded}
                />
                ): null}
              </div>
            ) : card.isUrgent === false && card.isImportant === false ? (
              <div className="w-full h-[5px] absolute bottom-[0px] left-[0.1px] flex flex-row">
                <div className="w-10 h-full bg-[#808080]"></div>
                {card.secondsLeft ? (
                  <ProgressBar
                  createdTime={card.createdAt}
                  deadLine={card.deadLine}
                  color="gray"
                  isExpanded={props.isExpanded}
                />
                ): null}
              </div>
          ) : null }
        </div>
        ))}
      </div>
      {props.isExpanded ? (
        <div className="h-full flex flex-col gap-2 col-span-1">
        {columns[3].map((card, index) => (
          <div className={`w-full relative z-1 h-fit border-[1px] border-[#333333] bg-[#1E1E1E] hover:shadow-[0_0_15px_5px_rgba(187,134,252,0.5)]  flex flex-col gap-2 p-4 rounded-[5px] rounded-br-[0px] rounded-bl-[0px] card-animation transition-all duration-300 group`} key={index}>  
          {index*3 + 3 === props.hoveredCardIndex ? (<div className='w-full h-full inset-0 absolute border rounded-[5px] rounded-br-[0px] rounded-bl-[0px] shadow-[0_0_15px_5px_rgba(187,134,252,0.5)]'></div>) : (null)} 
          <h3 className="text-[#A0A0A0]">{card.title}</h3>
          <p className="text-[#E0E0E0]">{card.description}</p>
          <div className="w-full h-fit flex flex-row justify-between">
             <button 
             className="focus:outline-none relative flex items-center justify-center opacity-0 group-hover:opacity-100 w-fit h-fit p-1 rounded-full hover:bg-white/20"
             id='alarm'
             onMouseEnter={() => handleMouseEnter("alarm")}
             onMouseLeave={handleMouseLeave}
             onClick={() => handleButtonClick(card.createdAt, 'alarm')}
             >
              <TbAlarmPlus size={20} className="text-white/60"/>
              {hoveredButton === 'alarm' && (
                <span className="absolute gap-1 flex flex-row text-[10px] text-bold p-1 bottom-[-30px] z-10  rounded opacity-0 group-hover:opacity-100 bg-gray-500">
                  <span>Set</span><span>reminder</span>
                </span>
              )}
             </button>
             {visibleDiv?.createdAt === card.createdAt && visibleDiv?.button === 'alarm' && (
              <div className="absolute p-1 bg-red-500 z-10 bottom-[-20px] left-[-5px]">set alarm</div>
            )}
             <button 
             className="focus:outline-none relative flex items-center justify-center opacity-0 group-hover:opacity-100 w-fit h-fit p-1 rounded-full hover:bg-white/20"
             id='priority'
             onMouseEnter={() => handleMouseEnter("priority")}
             onMouseLeave={handleMouseLeave}
             onClick={() => handleButtonClick(card.createdAt, 'priority')}
             >
              <TbFlagPlus size={20} className="text-white/60"/>
              {hoveredButton === 'priority' && (
                <span className="absolute text-[10px] gap-1 flex flex-row p-1 bottom-[-30px] z-10  rounded opacity-0 group-hover:opacity-100 bg-gray-500">
                  <span>Set</span><span>priority</span>
                </span>
              )}
             </button>
             {visibleDiv?.createdAt === card.createdAt && visibleDiv?.button === 'priority' && (
              <div className="absolute p-1 bg-orange-500 z-10 bottom-[-20px] left-[45px]">set priority</div>
            )}
             <button 
             className="focus:outline-none relative flex items-center justify-center opacity-0 group-hover:opacity-100 w-fit h-fit p-1 rounded-full hover:bg-white/20" 
             id='color'
             onMouseEnter={() => handleMouseEnter("color")}
             onMouseLeave={handleMouseLeave}
             onClick={() => handleButtonClick(card.createdAt, 'color')}
             >
              <IoColorPaletteOutline className="text-white/60" size={20}/>
              {hoveredButton === 'color' && (
                <span className="absolute text-[10px] flex flex-row gap-1 p-1 bottom-[-30px] z-10 p-1 rounded opacity-0 group-hover:opacity-100 bg-gray-500" >
                  <span>Change</span><span>Background</span>
                </span>
              )}
             </button>
             {visibleDiv?.createdAt === card.createdAt && visibleDiv?.button === 'color' && (
              <div className="absolute p-1 bg-pink-500 z-10 bottom-[-20px] left-[75px]">add background color</div>
            )}
             <button 
             className="focus:outline-none relative flex items-center justify-center opacity-0 group-hover:opacity-100 w-fit h-fit p-1 rounded-full hover:bg-white/20" 
             id='addUser'
             onMouseEnter={() => handleMouseEnter("addUser")}
             onMouseLeave={handleMouseLeave}
             onClick={() => handleButtonClick(card.createdAt, 'addUser')}
             >
              <LuUserPlus className="text-white/60" size={20}/>
              {hoveredButton === 'addUser' && (
                <span className="absolute text-[10px] p-1 bottom-[-30px] z-10 p-1 rounded opacity-0 group-hover:opacity-100 bg-gray-500">
                  Collaborate
                </span>
              )}
             </button>
             {visibleDiv?.createdAt === card.createdAt && visibleDiv?.button === 'addUser' && (
              <div className="absolute p-1 bg-teal-500 z-10 bottom-[-20px] left-[160px]">Collaborate</div>
            )}
             <button 
             className="focus:outline-none relative flex items-center justify-center opacity-0 group-hover:opacity-100 w-fit h-fit p-1 rounded-full hover:bg-white/20" 
             id="deadline"
             onMouseEnter={() => handleMouseEnter("deadline")}
             onMouseLeave={handleMouseLeave}
             onClick={() => handleButtonClick(card.createdAt, 'deadline')}
             >
              <MdOutlineMoreTime className="text-white/60" size={20}/>
              {hoveredButton === 'deadline' && (
                <span className="absolute text-[10px] bottom-[-30px] z-10 p-1 rounded opacity-0 group-hover:opacity-100 bg-gray-500">
                  {card.secondsLeft ? (<div className="flex flex-row gap-1"><span>Edit</span><span>Deadline</span></div>) : (<div className="flex flex-row gap-1"><span>Add</span><span>Deadline</span></div>)}
                </span>
              )}
             </button>
             {visibleDiv?.createdAt === card.createdAt && visibleDiv?.button === 'deadline' && (
              <div className="absolute p-1 bg-blue-400 z-10 bottom-[-20px] left-[220px]">add deadline</div>
            )}
             <button 
             className="focus:outline-none relative flex items-center justify-center opacity-0 group-hover:opacity-100 w-fit h-fit p-1 rounded-full hover:bg-white/20" 
             id='delete' 
             onClick={() => props.deleteCard(card.createdAt)}
             onMouseEnter={() => handleMouseEnter("delete")}
             onMouseLeave={handleMouseLeave}
             >
              <MdOutlineDelete className="text-white/60" size={20}/>
              {hoveredButton === 'delete' && (
                <span className="absolute text-[10px] bottom-[-30px] z-10 p-1 rounded opacity-0 group-hover:opacity-100 bg-gray-500">
                  delete
                </span>
              )}
             </button>
            </div>
          {card.isUrgent && card.isImportant ? (
              <div className="w-full h-[5px] absolute bottom-[0px] left-[0.1px] flex flex-row">
                <div className="w-10 h-full bg-[#ff0000] "></div>
                {card.secondsLeft ? (
                  <ProgressBar
                  createdTime={card.createdAt}
                  deadLine={card.deadLine}
                  color="red"
                  isExpanded={props.isExpanded}
                />
                ): null}
            </div>
            ) : card.isUrgent ? (
              <div className="w-full h-[5px] absolute bottom-[0px] left-[0.1px] flex flex-row">
                <div className="w-10 h-full bg-[#0000ff] "></div>
                {card.secondsLeft ? (
                  <ProgressBar
                  createdTime={card.createdAt}
                  deadLine={card.deadLine}
                  color="blue"
                  isExpanded={props.isExpanded}
                />
                ): null}
              </div>
            ) : card.isImportant ? (
              <div className="w-full h-[5px] absolute bottom-[0px] left-[0.1px] flex flex-row">
                <div className="w-10 h-full bg-[#ffff00] "></div>
                {card.secondsLeft ? (
                  <ProgressBar
                  createdTime={card.createdAt}
                  deadLine={card.deadLine}
                  color="yellow"
                  isExpanded={props.isExpanded}
                />
                ): null}
              </div>
            ) : card.isUrgent === false && card.isImportant === false ? (
              <div className="w-full h-[5px] absolute bottom-[0px] left-[0.1px] flex flex-row">
                <div className="w-10 h-full bg-[#808080]"></div>
                {card.secondsLeft ? (
                  <ProgressBar
                  createdTime={card.createdAt}
                  deadLine={card.deadLine}
                  color="gray"
                  isExpanded={props.isExpanded}
                />
                ): null}
              </div>
          ) : null }
        </div>
        ))}
      </div>
      ): null}
      </div>
    </div>
  );
}
