import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
export default function TaskSpace(props) {
  // Assuming `props.cards` is the array of card data from the DB
  const cards = props.cards;

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
          <div className='w-full relative h-fit border-[1px] border-gray-500 flex flex-col gap-2 p-4 rounded-xl card-animation transition-all duration-300' key={index}>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <button onClick={() => props.deleteCard()}>delete</button>
          </div>
        ))}
      </div>
      <div className="h-full flex flex-col gap-2 col-span-1">
        {columns[1].map((card, index) => (
          <div className='w-full h-fit border-[1px] border-gray-500 flex flex-col gap-2 p-4 rounded-xl card-animation transition-all duration-300' key={index}>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <button onClick={() => props.deleteCard(columns[1].length - 1 - index)}>delete</button>
          </div>
        ))}
      </div>
      <div className="h-full flex flex-col gap-2 col-span-1">
        {columns[2].map((card, index) => (
          <div className='w-full h-fit border-[1px] border-gray-500 flex flex-col gap-2 p-4 rounded-xl card-animation transition-all duration-300' key={index}>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <button onClick={() => props.deleteCard(columns[2].length - 1 - index)}>delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
