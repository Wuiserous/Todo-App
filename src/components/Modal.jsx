import { CgTag } from "react-icons/cg";
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

    useEffect(() => {
        // Function to handle Enter key press
        const handleKeyPress = (e) => {
            if (e.key === "Enter") {
                // Trigger the submit when Enter key is pressed
                props.handleSubmit();
            }
        };

        // Adding event listener for the keydown event
        document.addEventListener("keydown", handleKeyPress);

        // Cleanup event listener on component unmount
        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, [props]);

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
                className={`w-[500px] modal ${props.textColor} z-2 min-h-[200px] border h-auto ${props.bgColor} ${props.priority === "P1" ? "border-red-500" : props.priority === "P2" ? "border-yellow-500 " : props.priority === "P3" ? "border-blue-500 " : props.priority === "P4" ? "border-gray-500" : ""} rounded-[10px] transform transition-all duration-300 p-2 ${isVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"
                    }`}
            >
                {props.children}
                {props.Priority}
                <div className="absolute bottom-2 hover:text-gray-400 right-2 w-10 rounded-full h-5 flex items-center text-white justify-center">
                    <CgTag size={30} />
                </div>
            </div>
        </div>
    );
}
