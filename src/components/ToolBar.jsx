export default function ToolBar(props) {
  return (
    <div className={` ${props.bgColor} p-4 gap-2 flex flex-col justify-start items-center rounded-xl col-span-1 row-start-2 row-end-5`}>
      {props.Button}
      {props.Kanban}
    </div>
  )
}