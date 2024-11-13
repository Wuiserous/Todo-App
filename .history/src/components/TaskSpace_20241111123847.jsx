export default function TaskSpace(props) {
    return (
      <div className={`rounded-xl flex p-2 gap-4 flex-wrap hide-scrollbar overflow-auto col-start-2 row-start-2 row-end-5 border ${props.bgColor} border-gray-500`} style={{
        scrollbarWidth: 'none',       /* Firefox */
        msOverflowStyle: 'none'       /* IE and Edge */
      }}>
        <style>{`
        .TaskSpace::-webkit-scrollbar {
          display: none; /* For Chrome, Safari, and Opera */
        }
      `}</style>
        <div className="w-[200px] border rounded-xl h-fit flex flex-col gap-2 p-2">
          <div className="flex items-center p-2 justify-start border border-bottom-0 w-full text-4xl"><strong>Title</strong></div>
          <div className=" p-2 text-left"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit possimus debitis dolorem assumenda provident, numquam sit quas minima vitae cumque est commodi, exercitationem quam dicta? Necessitatibus hic consequuntur facilis veritatis?</p></div>
        </div>
        
      </div>
    )
}