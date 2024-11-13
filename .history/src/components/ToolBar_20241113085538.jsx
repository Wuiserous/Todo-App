export default function ToolBar(props) {
    return (
      <div className={` ${props.bgColor} p-2 flex justify-center border border rounded-xl col-span-1 row-start-2 row-end-5`}>
        {props.Button}
      </div>
    )
}