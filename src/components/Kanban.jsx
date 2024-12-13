import { arrayMove, horizontalListSortingStrategy, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { useState, useEffect } from "react";
import { DndContext, closestCorners } from "@dnd-kit/core";
import {
    PointerSensor,
    MouseSensor,
    TouchSensor,
    KeyboardSensor,
    useSensor,
    useSensors,
  } from '@dnd-kit/core';
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function Kanban(props) {
    const [columns, setColumns] = useState([
        { id: 'tasks', title: 'Tasks' },
        { id: 'in-progress', title: 'In-Progress' },
        { id: 'completed', title: 'Completed' },
        { id: 'assigned', title: 'Assigned' },
    ]);

    const [overColumn, setOverColumn] = useState(null);

    const getColumnPos = (id) => columns.findIndex((column) => column.id === id);

    const handleDragEnd = (event) => {
        const { active, over } = event;

        if (!over || active.id === over.id) return;

        setColumns((columns) => {
            const originalPos = getColumnPos(active.id);
            const newPos = getColumnPos(over.id);
            return arrayMove(columns, originalPos, newPos);
        });

        setOverColumn(null);
    };

    const handleDragOver = (event) => {
        setOverColumn(event.over?.id || null);
    };

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(MouseSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    return (
        <DndContext sensors={sensors} onDragEnd={handleDragEnd} onDragOver={handleDragOver} collisionDetection={closestCorners}>
            <div className={`rounded-[13px] relative flex flex-row col-start-2 scroll-smooth overflow-y-hidden overflow-x-auto ${props.isExpanded ? ' col-span-3' : ' col-span-1'} hide-scrollbar row-start-2 row-end-5 ${props.bgColor}`}>
                <SortableContext items={columns} strategy={horizontalListSortingStrategy}>
                    <div className="flex flex-row gap-2 w-fit p-2 h-full">
                        {columns.map((column) => (
                            <Column key={column.id} cards={props.cards} id={column.id} title={column.title} isOver={overColumn === column.id} />
                        ))}
                    </div>
                </SortableContext>
            </div>
        </DndContext>
    );
}

function Column({ id, title, cards, isOver }) {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });
    const [titleCards, setTitleCards] = useState(cards)
    const [showColumnLabels, setShowColumnLabels] = useState(false)

    useEffect(() => {
        setTitleCards(cards);
    }, [cards]);

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
        zIndex: isDragging ? 9999 : "auto", // Elevate dragged item
        position: "relative", // Ensure correct layering
        border: isOver ? "2px dashed #4CAF50" : isDragging ? "2px solid blue" : "", // Highlight drop target
        opacity: isDragging ? 0.8 : 1, // Dim dragged column
    };

    const getColumnPos = (id) => titleCards.findIndex((titleCard) => titleCard.id === id);

    const handleDragEnd = (event) => {
        const { active, over } = event;

        if (!over || active.id === over.id) return;

        setTitleCards((titleCards) => {
            const originalPos = getColumnPos(active.id);
            const newPos = getColumnPos(over.id);
            return arrayMove(titleCards, originalPos, newPos);
        });
    };

    return (
        <div
            ref={setNodeRef}
            {...attributes}
            {...listeners}
            style={style}
            className="rounded-[10px] cursor-grab flex flex-col gap-2 w-[265px] h-full"
        >
            <div className="w-full relative bg-[#1E1E1E] h-10 rounded-[10px] flex justify-between items-center p-2 cursor-grab">
                <span>{title}</span>
                {id === "tasks" ? 
                    (
                    <div className=" absolute right-0">
                        <button className={`transform ${showColumnLabels == true ? 'rotate-[0deg]': 'rotate-[270deg]'} text-[30px]`} onClick={(e) => {e.stopPropagation(); setShowColumnLabels(!showColumnLabels)}}><span className={`transform rotate-[180deg]`}>🔻</span></button>
                        {showColumnLabels == true ? (
                            <div className="bg-white min-w-40 min-h-20 rounded absolute top-[15px] right-[-160px] z-10"></div>
                        ):(
                            null
                        )}
                    </div>
                    ):
                    (
                        null
                    )
                }
            </div>
            <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
            <SortableContext items={titleCards} strategy={verticalListSortingStrategy}>
            <div className="w-full h-full p-2 flex bg-[#1E1E1E] flex-col gap-2  rounded-[10px]">
                {id === "tasks" ? 
                    titleCards.map((titleCard, index) => (
                        <Title title={titleCard.title} index={index} priority={titleCard.priority} label={titleCard.label} id={titleCard.id}/>
                    ))
                    :
                    null
                }
            </div>
            </SortableContext>
            </DndContext>
        </div>
    );
}

function Title({title, index, priority, id, label, Columns}) {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
        zIndex: isDragging ? 9999 : "auto", // Elevate dragged item
        position: isDragging ? "relative" : "relative", // Ensure correct layering
    };
    return (
        <div
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        style={style}
         className={`w-full h-fit flex justify-between items-center cursor-grab p-2 bg-black border ${priority === "P1" ? "border-red-600" : priority === "P2" ? "border-yellow-400" : priority === "P3" ? "border-blue-600" : priority === "P4" ? "border-gray-500" : ''} rounded`} key={id}>
            <div>{title}</div>
            {label? (
                <div className={`absolute text-gray-400 bottom-[-2px] right-[2px] h-fit w-fit flex items-center justify-center bottom-0`}><span className="text-[10px]">#{label}</span></div>
            ):(
                null
            )}
        </div>
    )
}
