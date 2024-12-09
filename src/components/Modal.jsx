import { useEffect, useState } from "react";

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

    const hideAndSubmit = (e) => {
        if (e.target.id === "wrapper") {
            // Submit the task when clicking outside the modal
            props.handleSubmit();
            props.hide();
        }
    };

    return (
        <div
            className="fixed flex justify-center items-center z-10 inset-0 bg-black bg-opacity-45"
            id="wrapper"
            onClick={hideAndSubmit} // Using hideAndSubmit to trigger task submission
        >
            <div
                className={`w-[500px] h-[150px] ${props.bgColor} rounded-[10px] transform transition-all duration-300 p-2 ${isVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"
                    }`}
            >
                {props.children}
            </div>
        </div>
    );
}
