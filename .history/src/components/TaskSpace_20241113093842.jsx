import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
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
      <div className="h-full flex flex-col gap-2 col-span-1 flex justify-center items-center">
        <h1>No tasks added yet</h1>
      </div>
  </div>
  )

  return (
    <div className={`rounded-xl grid grid-cols-3 gap-2 p-2 hide-scrollbar overflow-auto col-start-2 row-start-2 row-end-5 ${props.bgColor}`}>
      <div className="h-full flex flex-col gap-2 col-span-1">
        {columns[0].map((card, index) => (
          <div className={`w-full relative h-fit border-[1px] border-[#333333] ${index*3 === props.hoveredCardIndex ? 'bg-green-500' : ''} bg-[#1E1E1E]  flex flex-col gap-2 p-4 rounded-tl-xl rounded-tr-xl rounded-bl-xl card-animation transition-all duration-300`} key={index}>   
            <h3 className="text-[#A0A0A0]">{card.title}</h3>
            <p className="text-[#E0E0E0]">{card.description}</p>
            <p>Priority: 
              {card.isUrgent && card.isImportant ? 'Urgent and Important' : 
              card.isUrgent ? 'Urgent' : 
              card.isImportant ? 'Important' : 'Normal'}
            </p>
            <button onClick={() => props.deleteCard(index*3 + 0)}>delete</button>
            {card.isUrgent && card.isImportant ? (<div className="w-10 h-5 absolute z-10 bg-[#D32F2F] bottom-[-21px] rounded-bl-lg rounded-br-xl right-[-1px]"></div>) : 
              card.isUrgent ? (<div className="w-10 h-5 absolute z-10 bg-[#FF5722] bottom-[-21px] rounded-bl-lg rounded-br-xl right-[-1px]"></div>) : 
              card.isImportant ? (<div className="w-10 h-5 absolute z-10 bg-[#FF9800] bottom-[-21px] rounded-bl-lg rounded-br-xl right-[-1px]"></div>) : (
                <div className="w-10 h-5 absolute z-10 bg-[#03A9F4] bottom-[-21px] rounded-bl-lg rounded-br-xl right-[-1px]"></div>
              )}
          </div>
        ))}
      </div>
      <div className="h-full flex flex-col gap-2 col-span-1">
        {columns[1].map((card, index) => (
          <div className={`w-full relative h-fit border-[1px] border-[#333333] ${index*3 + 1 === props.hoveredCardIndex ? 'bg-green-500' : ''} bg-[#1E1E1E] flex flex-col gap-2 p-4 rounded-tl-xl rounded-tr-xl rounded-bl-xl card-animation transition-all duration-300`} key={index}>
            <h3 className="text-[#A0A0A0]">{card.title}</h3>
            <p className="text-[#E0E0E0]">{card.description}</p>
            <p>Priority: 
              {card.isUrgent && card.isImportant ? 'Urgent and Important' : 
              card.isUrgent ? 'Urgent' : 
              card.isImportant ? 'Important' : 'Normal'}
            </p>
            <button onClick={() => props.deleteCard(index*3 + 1)}>delete</button>
            {card.isUrgent && card.isImportant ? (<div className="w-10 h-5 absolute z-10 bg-[#D32F2F] bottom-[-21px] rounded-bl-lg rounded-br-xl right-[-1px]"></div>) : 
              card.isUrgent ? (<div className="w-10 h-5 absolute z-10 bg-[#FF5722] bottom-[-21px] rounded-bl-lg rounded-br-xl right-[-1px]"></div>) : 
              card.isImportant ? (<div className="w-10 h-5 absolute z-10 bg-[#FF9800] bottom-[-21px] rounded-bl-lg rounded-br-xl right-[-1px]"></div>) : (
                <div className="w-10 h-5 absolute z-10 bg-[#03A9F4] bottom-[-21px] rounded-bl-lg rounded-br-xl right-[-1px]"></div>
              )}
          </div>
        ))}
      </div>
      <div className="h-full flex flex-col gap-2 col-span-1">
        {columns[2].map((card, index) => (
          <div className={`w-full relative h-fit border-[1px] border-[#333333] ${index*3 + 2 === props.hoveredCardIndex ? 'bg-green-500' : ''} bg-[#1E1E1E] flex flex-col gap-2 p-4 rounded-tl-xl rounded-tr-xl rounded-bl-xl card-animation transition-all duration-300`} key={index}>
            <h3 className="text-[#A0A0A0]">{card.title}</h3>
            <p className="text-[#E0E0E0]">{card.description}</p>
            <p>Priority: 
              {card.isUrgent && card.isImportant ? 'Urgent and Important' : 
              card.isUrgent ? 'Urgent' : 
              card.isImportant ? 'Important' : 'Normal'}
            </p>
            <button onClick={() => props.deleteCard(index*3 + 2)}>delete</button>
            {card.isUrgent && card.isImportant ? (<div className="w-10 h-5 absolute z-10 bg-[#D32F2F] bottom-[-21px] rounded-bl-lg rounded-br-xl right-[-1px]"></div>) : 
              card.isUrgent ? (<div className="w-10 h-5 absolute z-10 bg-[#FF5722] bottom-[-21px] rounded-bl-lg rounded-br-xl right-[-1px]"></div>) : 
              card.isImportant ? (<div className="w-10 h-5 absolute z-10 bg-[#FF9800] bottom-[-21px] rounded-bl-lg rounded-br-xl right-[-1px]"></div>) : (
                <div className="w-10 h-5 absolute z-10 bg-[#03A9F4] bottom-[-21px] rounded-bl-lg rounded-br-xl right-[-1px]"></div>
              )}
          </div>
        ))}
      </div>
    </div>
  );
}
