import { useState } from "react";
import { MdOutlineDelete } from "react-icons/md";

export default function TaskSpace(props) {
  const cards = props.cards;
  const columns = [[], [], []];

  // Distribute cards into the three columns
  cards.forEach((card, index) => {
    columns[index % 3].push(card);
  });

  const [hoveredIndex, setHoveredIndex] = useState(null);

  if (cards.length === 0) return (
    <div className={`rounded-xl gap-2 p-2 hide-scrollbar overflow-auto col-start-2 row-start-2 row-end-5 ${props.bgColor}`}>
      <div className="h-full flex flex-col gap-2 col-span-1 flex justify-center items-center">
        <h1 className="text-[#A0A0A0]">No tasks added yet</h1>
      </div>
    </div>
  );

  return (
    <div className={`rounded-xl grid grid-cols-3 gap-2 p-2 hide-scrollbar overflow-auto col-start-2 row-start-2 row-end-5 ${props.bgColor}`}>
      {columns.map((column, colIndex) => (
        <div key={colIndex} className="h-full flex flex-col gap-2 col-span-1">
          {column.map((card, index) => {
            const globalIndex = index * 3 + colIndex;
            return (
              <div
                key={index}
                className={`w-full relative h-fit border-[1px] border-[#333333] bg-[#1E1E1E] hover:shadow-[0_0_15px_5px_rgba(187,134,252,0.5)] hover:border-white flex flex-col gap-2 p-4 rounded-tl-xl rounded-tr-xl rounded-bl-xl card-animation transition-all duration-300`}
                onMouseEnter={() => setHoveredIndex(globalIndex)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <h3 className="text-[#A0A0A0]">{card.title}</h3>
                <p className="text-[#E0E0E0]">{card.description}</p>
                <p>
                  Priority:{" "}
                  {card.isUrgent && card.isImportant
                    ? "Urgent and Important"
                    : card.isUrgent
                    ? "Urgent"
                    : card.isImportant
                    ? "Important"
                    : "Normal"}
                </p>
                {/* Only show delete button when hovered */}
                {hoveredIndex === globalIndex && (
                  <div className="w-full h-fit flex flex-row gap-2 justify-end">
                    <button onClick={() => props.deleteCard(globalIndex)}>
                      <MdOutlineDelete />
                    </button>
                  </div>
                )}
                {/* Priority Indicator */}
                {card.isUrgent && card.isImportant ? (
                  <div className="w-10 h-5 absolute z-10 bg-[#D32F2F] bottom-[-21px] rounded-bl-lg rounded-br-xl right-[-1px]"></div>
                ) : card.isUrgent ? (
                  <div className="w-10 h-5 absolute z-10 bg-[#FF5722] bottom-[-21px] rounded-bl-lg rounded-br-xl right-[-1px]"></div>
                ) : card.isImportant ? (
                  <div className="w-10 h-5 absolute z-10 bg-[#FF9800] bottom-[-21px] rounded-bl-lg rounded-br-xl right-[-1px]"></div>
                ) : (
                  <div className="w-10 h-5 absolute z-10 bg-[#03A9F4] bottom-[-21px] rounded-bl-lg rounded-br-xl right-[-1px]"></div>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
