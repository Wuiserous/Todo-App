import { useState } from "react";

export default function Modal(props) {
    if ( !props.Show ) return null
    return (
      <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
        <div className="relative w-[500px] rounded-top h-[400px] bg-white rounded-xl flex flex-col justify-center items-center text-black">
            <button onClick={props.hide} className="absolute top-0 right-0 w-10 h-10 rounded-full bg-red-500 text-white">X</button>
        </div>
      </div>
    );
}
