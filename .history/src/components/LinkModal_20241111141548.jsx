import { useState, useEffect } from "react"

export default function LinkModal(props) {
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
        <div className="fixed w-full h-full inset-0 bg-blue-transparent z-10" id="wrapper"
        onClick={hide}>
            <div className={`relative top-60 left-[480px] w-[100px] h-[100px] bg-white transform transition-all duration-100 rounded ${isVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"}`}>
                {props.children}
            </div>
        </div>
    )
}