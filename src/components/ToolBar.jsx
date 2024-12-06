export default function ToolBar(props) {
  return (
    <div className={` ${props.bgColor} p-4 gap-2 flex flex-col justify-start items-center rounded-xl col-span-1 row-start-2 row-end-5`}>
      <div className="flex justify-center items-center rounded-full border-2 border-[#BB86FC]">
        {props.Button}
      </div>
      <div className="flex justify-center items-center rounded-full border-2 border-[#BB86FC]">
        {props.Kanban}
      </div>
    </div>
  )
}