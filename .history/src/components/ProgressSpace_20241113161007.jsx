export default function ProgressSpace(props) {
    return (
      <div className={`rounded-xl row-start-2 row-end-5 col-start-3 col-end-4 ${props.bgColor} flex justify-center items-center`}>
        <div className="w-10 h-10 rounded-full"><img src="https://avatar.iran.liara.run/public/30" alt="Progress" className="w-full h-full" /></div>
      </div> 
    )
}