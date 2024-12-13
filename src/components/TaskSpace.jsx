import { BiLogoBaidu } from "react-icons/bi";
import { IoIosAddCircleOutline } from "react-icons/io";
import Column from './column';

export default function TaskSpace(props) {

  // Assuming `props.cards` is the array of card data from the DB
  const cards = props.cards


  const numOfColumns = props.isExpanded ? 5 : 4

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
  const columns = props.isExpanded ? [[], [], [], [], []] : [[], [], [], []];

  // Distribute cards into the three columns
  combinedArray.forEach((card, index) => {
    columns[index % numOfColumns].push(card);
  });

  columns[combinedArray.length % numOfColumns].push({ type: 'Add' })



  if (cards.length == 0) return (
    <div className={`rounded-xl relative gap-2 p-2 hide-scrollbar ${props.isExpanded ? 'col-span-3' : 'col-span-1'} overflow-auto col-start-2 row-start-2 row-end-5 ${props.bgColor}`}>
      <div className="absolute w-[25px] h-20 top-[40%] right-0 overflow-auto group hide-scrollbar z-10 flex justify-center items-center">{props.expandButton}</div>
      <button onClick={() => props.addTask()} className="absolute border-[2px] border-dashed flex justify-center items-center z-10 border-white/20 hover:border-white/50 group w-60 h-[125px] rounded-[10px] text-4xl text-white/20 hover:text-white/50"><IoIosAddCircleOutline /></button>
      <div className="h-full flex flex-col gap-2 col-span-1 flex flex-col justify-center items-center">
        <BiLogoBaidu size={195} className="text-[#A0A0A0] text-opacity-10" />
        <h1 className="text-[#A0A0A0] text-opacity-10">No tasks added yet</h1>
      </div>
    </div>
  )

  return (
    <div className={`rounded-[13px] relative col-start-2 transition-all duration-300 ease-in-out transform ${props.isExpanded ? 'col-span-3' : 'col-span-1'} hide-scrollbar row-start-2 row-end-5 ${props.bgColor}`}>
      <div className="absolute w-[25px] h-20 top-[40%] right-0 overflow-auto group hide-scrollbar z-10 flex justify-center items-center">{props.expandButton}</div>
      <div className={`grid absolute overflow-auto w-full h-full expandable-grid gap-2 p-2 ${props.isExpanded ? 'grid-cols-5' : 'grid-cols-4'} hide-scrollbar `}>
        <div className="h-full flex relative flex-col gap-2 col-span-1">
          {columns[0].map((card, index) => (
            <Column textColor={props.textColor} bgColor={props.bgColor} columnLength={columns[0].length} handleModal={props.taskModal} addTask={props.addTask} card={card} key={index} EditCard={props.editCard} ExtractDate={props.extractDate} DeleteCard={props.deleteCard} addCard={<div className="absolute border z-10 border-white w-full h-[77px] border-dashed rounded-[10px]"></div>} />
          ))}
        </div>
        <div className="h-full relative flex flex-col gap-2 col-span-1">
          {columns[1].map((card, index) => (
            <Column textColor={props.textColor} bgColor={props.bgColor} columnLength={columns[1].length} handleModal={props.taskModal} addTask={props.addTask} card={card} key={index} EditCard={props.editCard} ExtractDate={props.extractDate} DeleteCard={props.deleteCard} addCard={<div className="absolute border z-10 border-white w-full h-[77px] border-dashed rounded-[10px]"></div>} />
          ))}
        </div>
        <div className="h-full relative flex flex-col gap-2 col-span-1">
          {columns[2].map((card, index) => (
            <Column textColor={props.textColor} columnLength={columns[2].length} handleModal={props.taskModal} addTask={props.addTask} card={card} key={index} EditCard={props.editCard} ExtractDate={props.extractDate} DeleteCard={props.deleteCard} addCard={<div className="absolute border z-10 border-white w-full h-[77px] border-dashed rounded-[10px]"></div>} />
          ))}
        </div>
        <div className="h-full relative flex flex-col gap-2 col-span-1">
          {columns[3].map((card, index) => (
            <Column textColor={props.textColor} bgColor={props.bgColor} columnLength={columns[3].length} handleModal={props.taskModal} addTask={props.addTask} card={card} key={index} EditCard={props.editCard} ExtractDate={props.extractDate} DeleteCard={props.deleteCard} addCard={<div className="absolute border z-10 border-white w-full h-[77px] border-dashed rounded-[10px]"></div>} />
          ))}
        </div>
        {props.isExpanded ? (
          <div className="h-full relative flex flex-col gap-2 col-span-1">
            {columns[4].map((card, index) => (
              <Column textColor={props.textColor} bgColor={props.bgColor} columnLength={columns[4].length} handleModal={props.taskModal} addTask={props.addTask} card={card} key={index} EditCard={props.editCard} ExtractDate={props.extractDate} DeleteCard={props.deleteCard} addCard={<div className="absolute border z-10 border-white w-full h-[77px] border-dashed rounded-[10px]"></div>} />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
