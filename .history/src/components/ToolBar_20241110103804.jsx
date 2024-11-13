export default function ToolBar(props) {
    return (
      <div className={`border ${props.bgColor} border-gray-500 flex justify-center rounded-xl col-span-1 row-start-2 row-end-5 bg-gray-500`}>
        {props.Button}
      </div>
    )
}