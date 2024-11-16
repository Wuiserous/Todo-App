import { useState, useEffect } from "react"

export default function DeadLineModal(props) {
    const [isVisible, setIsVisible] = useState()

    useEffect(() => {
        if (props.Show) {
            // Trigger animation when modal is shown
            setIsVisible(true);
        } else {
            // Reset visibility state when modal is hidden
            setIsVisible(false);
        }
    }, [props.Show]);

    if (!props.Show) return null

    const hide = (e) => {
        if (e.target.id === "wrapper") props.hide();
    };

    return (
        <div className="fixed w-full h-full inset-0 z-10" id="wrapper"
        onClick={hide}>
            <div className={`fixed top-[81px] left-[585px] w-[200px] p-2 h-[200px] bg-[#1E1E1E] transform transition-all duration-100 text-black overflow-auto rounded ${isVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"}`}>
            <div className="flex flex-wrap gap-2">
                {props.children}
                <div>
                {props.date}
                </div>
                {props.time}
            </div>
            </div>
        </div>
    )
}