import { useState } from "react";

export default function Modal(props) {
    if ( !props.Show ) return null
    return (
      <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
        <div className="w-[500px] h-[400px] bg-white rounded-xl flex flex-col justify-center items-center text-black">
            <button></button>
        </div>
      </div>
    );
}