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
        <div className="fixed w-full h-full inset-0 bg-black opacity-50 z-1" id="wrapper"
        onClick={hide}>
            <div className={`fixed top-60 left-[480px] w-[200px] p-2 h-[200px] bg-white transform transition-all duration-100 text-black overflow-auto rounded ${isVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"}`}>
            <div className="flex flex-wrap gap-2">
                {props.children}
            </div>
            </div>
        </div>
    )
}