import { useState, useEffect } from "react";

export default function Modal(props) {
    const [isVisible, setIsVisible] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        if (props.Show) {
            setIsMounted(true);          // Mount the modal
            setTimeout(() => setIsVisible(true), 10); // Start the open animation
        } else {
            setIsVisible(false);         // Start the close animation
            setTimeout(() => setIsMounted(false), 500); // Unmount after animation
        }
    }, [props.Show]);

    if (!isMounted) return null; // Prevents rendering when not mounted

    const hide = (e) => {
        if (e.target.id === "wrapper") props.hide();
    };

    return (
      <div
        className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
        id="wrapper"
        onClick={hide}
      >
        <div
          className={`relative w-[500px] h-[400px] bg-white rounded-xl flex flex-col justify-center items-center text-black transform transition-all duration-500 ${
            isVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"
          }`}
        >
          <button
            onClick={props.hide}
            className="absolute top-1 right-1 w-5 h-5 p-2 flex items-center justify-center rounded-full focus:outline-none bg-transparent text-black"
          >
            X
          </button>
        </div>
      </div>
    );
}
