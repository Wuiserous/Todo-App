import { useState } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { BiLogoBaidu } from "react-icons/bi";
import ProgressBar from './ProgressBar';

export default function TaskSpace(props) {
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
    <div className={`rounded-xl relative col-start-2 hide-scrollbar row-start-2 row-end-5 ${props.bgColor}`}>
      <div className="absolute w-[25px] h-20 top-[40%] right-0 overflow-auto group hide-scrollbar z-10 flex justify-center items-center">{props.expandButton}</div>
      <div className={`grid absolute w-full h-full gap-2 p-2 hide-scrollbar overflow-auto`}>
      <div className="h-full flex flex-col gap-2 col-span-1">
        {columns[0].map((card, index) => (
          <div className={`w-full relative h-fit border-[1px] border-[#333333] bg-[#1E1E1E] hover:shadow-[0_0_15px_5px_rgba(187,134,252,0.5)]  flex flex-col gap-2 p-4 rounded-[5px] rounded-br-[0px] rounded-bl-[0px] card-animation transition-all duration-300 group`} key={index}>  
            {index*3 === props.hoveredCardIndex ? (<div className='w-full h-full inset-0 absolute border rounded-[5px] rounded-br-[0px] rounded-bl-[0px] shadow-[0_0_15px_5px_rgba(187,134,252,0.5)]'></div>) : (null)} 
            <h3 className="text-[#A0A0A0]">{card.title}</h3>
            <p className="text-[#E0E0E0]">{card.description}</p>
            <div className="w-full h-fit flex flex-row gap-2 justify-end">
             <button className="focus:outline-none opacity-0 group-hover:opacity-100 w-fit h-fit p-1 rounded-full hover:bg-white/20" onClick={() => props.deleteCard(card.createdAt)}><MdOutlineDelete /></button>
            </div>
            {card.isUrgent && card.isImportant ? (
              <div className="w-full h-[5px] absolute z-10 bottom-[0px] left-[0.1px] flex flex-row">
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
              <div className="w-full h-[5px] absolute z-10 bottom-[0px] left-[0.1px] flex flex-row">
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
              <div className="w-full h-[5px] absolute z-10 bottom-[0px] left-[0.1px] flex flex-row">
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
              <div className="w-full h-[5px] absolute z-10 bottom-[0px] left-[0.1px] flex flex-row">
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
          <div className="w-full h-fit flex flex-row gap-2 justify-end">
           <button className="focus:outline-none opacity-0 group-hover:opacity-100 w-fit h-fit p-1 rounded-full hover:bg-white/20" onClick={() => props.deleteCard(card.createdAt)}><MdOutlineDelete /></button>
          </div>
          {card.isUrgent && card.isImportant ? (
              <div className="w-full h-[5px] absolute z-10 bottom-[0px] left-[0.1px] flex flex-row">
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
              <div className="w-full h-[5px] absolute z-10 bottom-[0px] left-[0.1px] flex flex-row">
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
              <div className="w-full h-[5px] absolute z-10 bottom-[0px] left-[0.1px] flex flex-row">
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
              <div className="w-full h-[5px] absolute z-10 bottom-[0px] left-[0.1px] flex flex-row">
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
          <div className="w-full h-fit flex flex-row gap-2 justify-end">
           <button className="focus:outline-none opacity-0 group-hover:opacity-100 w-fit h-fit p-1 rounded-full hover:bg-white/20" onClick={() => props.deleteCard(card.createdAt)}><MdOutlineDelete /></button>
          </div>
          {card.isUrgent && card.isImportant ? (
              <div className="w-full h-[5px] absolute z-10 bottom-[0px] left-[0.1px] flex flex-row">
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
              <div className="w-full h-[5px] absolute z-10 bottom-[0px] left-[0.1px] flex flex-row">
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
              <div className="w-full h-[5px] absolute z-10 bottom-[0px] left-[0.1px] flex flex-row">
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
              <div className="w-full h-[5px] absolute z-10 bottom-[0px] left-[0.1px] flex flex-row">
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
          <div className="w-full h-fit flex flex-row gap-2 justify-end">
           <button className="focus:outline-none opacity-0 group-hover:opacity-100 w-fit h-fit p-1 rounded-full hover:bg-white/20" onClick={() => props.deleteCard(card.createdAt)}><MdOutlineDelete /></button>
          </div>
          {card.isUrgent && card.isImportant ? (
              <div className="w-full h-[5px] absolute z-10 bottom-[0px] left-[0.1px] flex flex-row">
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
              <div className="w-full h-[5px] absolute z-10 bottom-[0px] left-[0.1px] flex flex-row">
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
              <div className="w-full h-[5px] absolute z-10 bottom-[0px] left-[0.1px] flex flex-row">
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
              <div className="w-full h-[5px] absolute z-10 bottom-[0px] left-[0.1px] flex flex-row">
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
