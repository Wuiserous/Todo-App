import { arrayMove, horizontalListSortingStrategy, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { useState, useEffect } from "react";
import { DndContext, closestCorners } from "@dnd-kit/core";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function Kanban(props) {
    const [columns, setColumns] = useState([
        { id: 'tasks', title: 'Tasks' },
        { id: 'in-progress', title: 'In-Progress' },
        { id: 'completed', title: 'Completed' },
        { id: 'assigned', title: 'Assigned' },
    ]);

    const getColumnPos = (id) => columns.findIndex((column) => column.id === id);

    const handleDragEnd = (event) => {
        const { active, over } = event;

        if (!over || active.id === over.id) return;

        setColumns((columns) => {
            const originalPos = getColumnPos(active.id);
            const newPos = getColumnPos(over.id);
            return arrayMove(columns, originalPos, newPos);
        });
    };

    return (
        <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
            <div className={`rounded-[13px] relative flex flex-row col-start-2 scroll-smooth overflow-y-hidden overflow-x-auto ${props.isExpanded ? ' col-span-3' : ' col-span-1'} hide-scrollbar row-start-2 row-end-5 ${props.bgColor}`}>
                <SortableContext items={columns} strategy={horizontalListSortingStrategy}>
                    <div className="flex flex-row gap-2 w-fit p-2 h-full">
                        {columns.map((column) => (
                            <Column key={column.id} cards={props.cards} id={column.id} title={column.title} />
                        ))}
                    </div>
                </SortableContext>
            </div>
        </DndContext>
    );
}

function Column({ id, title, cards }) {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });
    const [titleCards, setTitleCards] = useState(cards)

    useEffect(() => {
        setTitleCards(cards);
    }, [cards]);

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
        zIndex: isDragging ? 9999 : "auto", // Elevate dragged item
        position: isDragging ? "relative" : "static", // Ensure correct layering
        border: isDragging ? "1px solid blue" : "",
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
            <div className="w-full bg-[#1E1E1E] h-10 rounded-[10px] flex justify-start items-center p-2 cursor-grab">
                <span>{title}</span>
            </div>
            <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
            <SortableContext items={titleCards} strategy={verticalListSortingStrategy}>
            <div className="w-full h-full p-2 flex bg-[#1E1E1E] flex-col gap-2  rounded-[10px]">
                {id === "tasks" ? 
                    titleCards.map((titleCard, index) => (
                        <Title title={titleCard.title} index={index} priority={titleCard.priority} id={titleCard.id}/>
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

function Title({title, index, priority, id}) {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
        zIndex: isDragging ? 9999 : "auto", // Elevate dragged item
        position: isDragging ? "relative" : "static", // Ensure correct layering
    };
    return (
        <div
        ref={setNodeRef}
        {...attributes}
        {...listeners}
        style={style}
         className={`w-full h-fit cursor-grab p-2 bg-black ${priority === "P1" ? "bg-red-600" : priority === "P2" ? "bg-yellow-400" : priority === "P3" ? "bg-blue-600" : priority === "P4" ? "bg-gray-500" : ''} rounded`} key={id}>
            {title}
        </div>
    )
}
