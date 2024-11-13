export default function TaskSpace(props) {
    return (
      <div className={`rounded-xl grid auto-rows-[192px] grid-cols-3 gap-4 p-2 gap-4 hide-scrollbar overflow-auto col-start-2 row-start-2 row-end-5 border ${props.bgColor} border-gray-500`}>
        {[...Array(25)].map((_, i) => (
    <div
      key={i}
      className={`row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-neutral-900 ${
        i%3 == 0 || i === 6 ? "col-span-2" : ""
      }`}
    ></div>
  ))}
      </div>
    )
}