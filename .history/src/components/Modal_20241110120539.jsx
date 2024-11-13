import { useState } from "react";

export default function Modal(props) {
    if ( !props.Show ) return null
    const hide = (e) => {
        if(e.target.id)
    }
    return (
      <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center" id='wrapper' onClick={hide}>
        <div className="relative w-[500px] h-[400px] bg-white rounded-xl flex flex-col justify-center items-center text-black">
            <button onClick={props.hide} className="absolute top-1 right-1 w-5 h-5 p-2 flex items-center justify-center rounded-full focus:outline-none bg-transparent text-black">X</button>
        </div>
      </div>
    );
}
