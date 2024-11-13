export default function TaskSpace(props) {
    return (
      <div className={`rounded-xl col-start-2 row-start-2 row-end-5 border ${props.bgColor} border-gray-500`}>
        <div className="w-[200px] h-fit flex flex-col gap-2 p-2">
          <div className="flex items-center justify-start border w-full">Title</div>
        </div>
      </div>
    )
}