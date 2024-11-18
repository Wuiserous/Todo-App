import { useState } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { BiLogoBaidu } from "react-icons/bi";
import ProgressBar from './ProgressBar';

export default function TaskSpace(props) {
  // Assuming `props.cards` is the array of card data from the DB
  const cards = props.cards

  // Function to organize cards into 3 columns
  const columns = [[], [], []];

  // Distribute cards into the three columns
  cards.forEach((card, index) => {
    columns[index % 3].push(card);
  });

  if (cards.length == 0) return (
  <div className={`rounded-xl gap-2 p-2 hide-scrollbar overflow-auto col-start-2 row-start-2 row-end-5 ${props.bgColor}`}>
      <div className="h-full flex flex-col gap-2 col-span-1 flex flex-col justify-center items-center">
        <BiLogoBaidu size={195} className="text-[#A0A0A0] text-opacity-10" />
        <h1 className="text-[#A0A0A0] text-opacity-10">No tasks added yet</h1>
      </div>
  </div>
  )

  return (
    <div className={`rounded-xl grid grid-cols-3 gap-2 p-2 hide-scrollbar overflow-auto col-start-2 row-start-2 row-end-5 ${props.bgColor}`}>
      <div className="h-full flex flex-col gap-2 col-span-1">
        {columns[0].map((card, index) => (
          <div className={`w-full relative h-fit border-[1px] border-[#333333] bg-[#1E1E1E] hover:shadow-[0_0_15px_5px_rgba(187,134,252,0.5)] hover:border-white  flex flex-col gap-2 p-4 rounded-[10px] rounded-br-[0px] rounded-bl-[0px] card-animation transition-all duration-300 group`} key={index}>  
            {index*3 === props.hoveredCardIndex ? (<div className='w-full h-full inset-0 absolute border rounded-tl-xl rounded-tr-xl rounded-bl-xl shadow-[0_0_15px_5px_rgba(187,134,252,0.5)]'></div>) : (null)} 
            <h3 className="text-[#A0A0A0]">{card.title}</h3>
            <p className="text-[#E0E0E0]">{card.description}</p>
            <div className="w-full h-fit flex flex-row gap-2 justify-end">
             <button className="focus:outline-none opacity-0 group-hover:opacity-100 w-fit h-fit p-1 rounded-full hover:bg-white/20" onClick={() => props.deleteCard(index*3 + 0)}><MdOutlineDelete /></button>
            </div>
            {card.isUrgent && card.isImportant ? (
                <div className="w-10 h-5 absolute z-10 bg-[#D32F2F] bottom-[-21px] rounded-bl-lg rounded-br-xl left-[0px] text-center text-[12px]">
                  <span className="hidden group-hover:block">{card.priority}</span>
                </div>
              ) : card.isUrgent ? (
                <div className="w-10 h-5 absolute z-10 bg-blue-500 bottom-[-21px] rounded-bl-lg rounded-br-xl left-[0px] text-center text-[12px]">
                  <span className="hidden group-hover:block">{card.priority}</span>
                </div>
              ) : card.isImportant ? (
                <div className="w-10 h-5 absolute z-10 bg-yellow-400 bottom-[-21px] rounded-bl-lg rounded-br-xl left-[0px] text-center text-[12px]">
                  <span className="hidden group-hover:block">{card.priority}</span>
                </div>
              ) : card.isUrgent === false && card.isImportant === false ? (
                <div className="w-10 h-5 absolute z-10 bg-gray-300 bottom-[-21px] rounded-bl-[10px] rounded-br-[10px] left-[0px] text-center text-[12px]">
                  <span className="hidden group-hover:block">{card.priority ? card.priority : 'P4'}</span>
                </div>
            ) : null }
            <div className="absolute bottom-[-60px] right-[-1px]"><ProgressBar createdTime={card.createdAt} deadlineDate={card.deadLineDate} deadlineTime={card.deadLineTime} /></div>
          </div>
        ))}
      </div>
      <div className="h-full flex flex-col gap-2 col-span-1">
        {columns[1].map((card, index) => (
          <div className={`w-full relative h-fit border-[1px] border-[#333333] bg-[#1E1E1E] hover:shadow-[0_0_15px_5px_rgba(187,134,252,0.5)] hover:border-white  flex flex-col gap-2 p-4 rounded-[10px] rounded-br-[0px] rounded-bl-[0px] card-animation transition-all duration-300 group`} key={index}>  
          {index*3 + 1 === props.hoveredCardIndex ? (<div className='w-full h-full inset-0 absolute border rounded-tl-xl rounded-tr-xl rounded-bl-xl shadow-[0_0_15px_5px_rgba(187,134,252,0.5)]'></div>) : (null)} 
          <h3 className="text-[#A0A0A0]">{card.title}</h3>
          <p className="text-[#E0E0E0]">{card.description}</p>
          <div className="w-full h-fit flex flex-row gap-2 justify-end">
           <button className="focus:outline-none opacity-0 group-hover:opacity-100 w-fit h-fit p-1 rounded-full hover:bg-white/20" onClick={() => props.deleteCard(index*3 + 0)}><MdOutlineDelete /></button>
          </div>
          {card.isUrgent && card.isImportant ? (
              <div className="w-10 h-5 absolute z-10 bg-[#D32F2F] bottom-[-21px] rounded-bl-lg rounded-br-xl left-[0px] text-center text-[12px]">
                <span className="hidden group-hover:block">{card.priority}</span>
              </div>
            ) : card.isUrgent ? (
              <div className="w-10 h-5 absolute z-10 bg-blue-500 bottom-[-21px] rounded-bl-lg rounded-br-xl left-[0px] text-center text-[12px]">
                <span className="hidden group-hover:block">{card.priority}</span>
              </div>
            ) : card.isImportant ? (
              <div className="w-10 h-[5px] absolute z-10 bg-yellow-400 bottom-[-6px] rounded-bl-lg rounded-br-[0px] left-[0px] text-center text-[12px]">
                <span className="hidden group-hover:block">{card.priority}</span>
              </div>
            ) : card.isUrgent === false && card.isImportant === false ? (
              <div className="w-10 h-5 absolute z-10 bg-gray-300 bottom-[-6px] rounded-bl-lg rounded-br-[0px] left-[0px] text-center text-[12px]">
                <span className="hidden group-hover:block">{card.priority ? card.priority : 'P4'}</span>
              </div>
          ) : null }
          <div className="absolute bottom-[-60px] right-[-1px]"><ProgressBar createdTime={card.createdAt} deadlineDate={card.deadLineDate} deadlineTime={card.deadLineTime} /></div>
        </div>
        ))}
      </div>
      <div className="h-full flex flex-col gap-2 col-span-1">
        {columns[2].map((card, index) => (
          <div className={`w-full relative h-fit border-[1px] border-[#333333] bg-[#1E1E1E] hover:shadow-[0_0_15px_5px_rgba(187,134,252,0.5)] hover:border-white  flex flex-col gap-2 p-4 rounded-[10px] rounded-br-[0px] rounded-bl-[0px] card-animation transition-all duration-300 group`} key={index}>  
          {index*3 + 2 === props.hoveredCardIndex ? (<div className='w-full h-full inset-0 absolute border rounded-tl-xl rounded-tr-xl rounded-bl-xl shadow-[0_0_15px_5px_rgba(187,134,252,0.5)]'></div>) : (null)} 
          <h3 className="text-[#A0A0A0]">{card.title}</h3>
          <p className="text-[#E0E0E0]">{card.description}</p>
          <div className="w-full h-fit flex flex-row gap-2 justify-end">
           <button className="focus:outline-none opacity-0 group-hover:opacity-100 w-fit h-fit p-1 rounded-full hover:bg-white/20" onClick={() => props.deleteCard(index*3 + 0)}><MdOutlineDelete /></button>
          </div>
          {card.isUrgent && card.isImportant ? (
              <div className="w-10 h-5 absolute z-10 bg-[#D32F2F] bottom-[-21px] rounded-bl-lg rounded-br-xl left-[0px] text-center text-[12px]">
                <span className="hidden group-hover:block">{card.priority}</span>
              </div>
            ) : card.isUrgent ? (
              <div className="w-10 h-5 absolute z-10 bg-blue-500 bottom-[-21px] rounded-bl-lg rounded-br-xl left-[0px] text-center text-[12px]">
                <span className="hidden group-hover:block">{card.priority}</span>
              </div>
            ) : card.isImportant ? (
              <div className="w-10 h-5 absolute z-10 bg-yellow-400 bottom-[-21px] rounded-bl-lg rounded-br-xl left-[0px] text-center text-[12px]">
                <span className="hidden group-hover:block">{card.priority}</span>
              </div>
            ) : card.isUrgent === false && card.isImportant === false ? (
              <div className="w-10 h-5 absolute z-10 bg-gray-300 bottom-[-21px] rounded-bl-[10px] rounded-br-[10px] left-[0px] text-center text-[12px]">
                <span className="hidden group-hover:block">{card.priority ? card.priority : 'P4'}</span>
              </div>
          ) : null }
          <div className="absolute bottom-[-60px] right-[-1px]"><ProgressBar createdTime={card.createdAt} deadlineDate={card.deadLineDate} deadlineTime={card.deadLineTime} /></div>
        </div>
        ))}
      </div>
    </div>
  );
}
