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

  return (
    <div className={`rounded-xl grid grid-cols-3 gap-2 p-2 hide-scrollbar overflow-auto col-start-2 row-start-2 row-end-5 ${props.bgColor}`}>
      <div className="h-full flex flex-col gap-2 col-span-1">
        {columns[0].map((card, index) => (
          <div className={`w-full relative h-fit border-[1px] ${card.isUrgent && card.isImportant ? 'border-red-600' : 
              card.isUrgent ? 'border-orange-500' :
              card.isImportant ? 'border-blue-500' : ''} border-gray-500 flex flex-col gap-2 p-4 rounded-xl card-animation transition-all duration-300`} key={index}>
            {index*3 === props.hoveredCardIndex ? (
              <div className="w-full h-full absolute inset-0 bg-white rounded-xl text-black flex flex-col gap-2 p-4 transition-all duration-300"><h3>{card.title}</h3>
            <p>{card.description}</p></div>
            ) : (null)}    
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <p>Priority: 
              {card.isUrgent && card.isImportant ? 'Urgent and Important' : 
              card.isUrgent ? 'Urgent' : 
              card.isImportant ? 'Important' : 'Normal'}
            </p>
            <button onClick={() => props.deleteCard(index*3 + 0)}>delete</button>
            {card.isUrgent && card.isImportant ? '🚨' : 
              card.isUrgent ? '🔥' : 
              card.isImportant ? '⭐' : '✅'}
          </div>
        ))}
      </div>
      <div className="h-full flex flex-col gap-2 col-span-1">
        {columns[1].map((card, index) => (
          <div className={`w-full relative h-fit border-[1px] ${card.isUrgent && card.isImportant ? 'border-red-600' : 
            card.isUrgent ? 'border-orange-500' : 
            card.isImportant ? 'border-blue-500' : ''} border-gray-500 flex flex-col gap-2 p-4 rounded-xl card-animation transition-all duration-300`} key={index}>
            {index*3 + 1 === props.hoveredCardIndex ? (
              <div className="w-full h-full absolute inset-0 bg-white rounded-xl text-black flex flex-col gap-2 p-4 transition-all duration-300"><h3>{card.title}</h3>
            <p>{card.description}</p></div>
            ) : (null)}
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <p>Priority: 
              {card.isUrgent && card.isImportant ? 'Urgent and Important' : 
              card.isUrgent ? 'Urgent' : 
              card.isImportant ? 'Important' : 'Normal'}
            </p>
            <button onClick={() => props.deleteCard(index*3 + 1)}>delete</button>
            <div className="absolute bottom-[-10px] text-2xl right-[-10px] w-fit h-fit">
            {card.isUrgent && card.isImportant ? '🚨' : 
              card.isUrgent ? '🔥' : 
              card.isImportant ? '⭐' : '✅'}
            </div>
          </div>
        ))}
      </div>
      <div className="h-full flex flex-col gap-2 col-span-1">
        {columns[2].map((card, index) => (
          <div className={`w-full relative h-fit border-[1px] ${card.isUrgent && card.isImportant ? 'border-red-600' : 
            card.isUrgent ? 'border-orange-500' : 
            card.isImportant ? 'border-blue-500' : ''} border-gray-500 flex flex-col gap-2 p-4 rounded-xl card-animation transition-all duration-300`} key={index}>
            {index*3 + 2 === props.hoveredCardIndex ? (
              <div className="w-full h-full absolute inset-0 bg-white text-black rounded-xl flex flex-col gap-2 p-4 transition-all duration-300"><h3>{card.title}</h3>
            <p>{card.description}</p></div>
            ) : (null)}
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <p>Priority: 
              {card.isUrgent && card.isImportant ? 'Urgent and Important' : 
              card.isUrgent ? 'Urgent' : 
              card.isImportant ? 'Important' : 'Normal'}
            </p>
            <button onClick={() => props.deleteCard(index*3 + 2)}>delete</button>
            <div className="absolute bottom-[-10px] text-2xl right-[-10px] w-fit h-fit">
            {card.isUrgent && card.isImportant ? '🚨' : 
              card.isUrgent ? '🔥' : 
              card.isImportant ? '⭐' : '✅'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
