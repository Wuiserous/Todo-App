import { useState, useEffect } from "react";

export default function Modal(props) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (props.Show) {
            // Trigger animation when modal is shown
            setIsVisible(true);
        } else {
            // Reset visibility state when modal is hidden
            setIsVisible(false);
        }
    }, [props.Show]);

    if (!props.Show) return null;

    const hide = (e) => {
        if (e.target.id === "wrapper") props.hide();
    };

    return (
      <div
        className="fixed inset-0 bg-black bg-opacity-45"
        id="wrapper"
        onClick={hide}
      >
        <div
          className={`relative w-[500px] top-20 left-20 h-[400px] bg-white rounded-xl grid grid-rows-[1fr_40px_40px_1fr_1fr_1fr_1fr_1fr_1fr_1fr] grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] text-black transform transition-all duration-300 p-2 ${
            isVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"
          }`}
        >
          <button
            onClick={props.hide}
            className="absolute z-1 top-2 right-2 w-5 h-5 p-2 flex items-center justify-center rounded-full focus:outline-none bg-transparent text-white"
          >
            x
          </button>
          {props.children}
        </div>
      </div>
    );
}