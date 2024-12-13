import { CgTag } from "react-icons/cg";
import { useEffect, useState } from "react";
import { button } from "framer-motion/client";

export default function Modal(props) {
    const [isVisible, setIsVisible] = useState(false);
    const [label, setLabel] = useState('')
    const [showLabel, setShowLabel] = useState(false)

    const labels = props.labels

    const handleLabel = (label) => {
        props.handleLabel(label);
        props.addLabel(label)
        setLabel('')
    }

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
                setShowLabel(false)
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
            setShowLabel(false)
        }
    };

    return (
        <div
            className="fixed flex justify-center items-center z-10 inset-0 bg-black bg-opacity-45"
            id="wrapper"
            onClick={hideAndSubmit} // Using hideAndSubmit to trigger task submission
        >
            <div
                onClick={(e) => {
                    if (showLabel == true) {
                        if (e.target.id !== 'label') {
                            setShowLabel(!showLabel);
                        }
                    }
                }}
                className={`w-[500px] relative modal ${props.textColor} z-2 min-h-[200px] border h-auto ${props.bgColor} ${props.priority === "P1" ? "border-red-500" : props.priority === "P2" ? "border-yellow-500 " : props.priority === "P3" ? "border-blue-500 " : props.priority === "P4" ? "border-gray-500" : ""} rounded-[10px] transform transition-all duration-300 p-2 ${isVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"
                    }`}
            >
                {props.children}
                {props.Priority}
                <button onClick={() => setShowLabel(!showLabel)} className="absolute bottom-2 hover:text-gray-400 right-2 w-10 rounded-full h-5 flex items-center text-white justify-center">
                    <CgTag size={30} />
                </button>
                {showLabel == true ? (
                    <div className="w-40 right-0 bg-white p-2 h-60 border absolute" id="label">
                    <div className="flex flex-col items-center h-full justify-center gap-2" id="label">
                        <div className="flex flex-row gap-2" id="label">
                            <input
                                type="text"
                                id="label"
                                placeholder="@label"
                                value={label}
                                name="label"
                                className="w-full h-full rounded p-1"
                                onChange={(e) => setLabel(e.target.value)}
                            />
                            <button
                                className="bg-gray-400 rounded w-10 p-[3px] h-full"
                                onClick={() => {handleLabel(label), setShowLabel(!showLabel)}} // Pass function reference
                            >
                                +
                            </button>
                            </div>
                            <div className="w-full flex flex-col gap-1 p-1 h-full overflow border border-black">
                            {labels.map((label, index) => (
                                <button className="w-full h-fit p-2 rounded bg-gray-400" key={index} onClick={() => {props.handleLabel(label), setShowLabel(!showLabel)}}>
                                    {label}
                                </button>
                            ))}
                            </div>
                    </div>
                </div>
                ):
                (null)
                }
            </div>
        </div>
    );
}
