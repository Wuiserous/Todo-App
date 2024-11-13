export default function LinkModal(props) {
    <button className="rounded border-none bg-white focus:outline-none bg-black p-2">
                    <IoLink className="text-black" size={25} />
                </button>
    return (
        <div className="fixed w-full h-full inset-0 bg-blue-500 opacity-25 z-10">
            <div className="w-[100px] h-[100px] bg-white rounded"></div>
        </div>
    )
}