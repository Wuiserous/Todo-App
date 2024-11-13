import { useState } from "react"

export default function LinkModal(props) {
    const [isVisible, setIsVisible] = useState()
    if (!props.Show) return null
    const hide = (e) => {
        if (e.target.id === "wrapper") props.hide();
    };
    return (
        <div className="fixed w-full h-full inset-0 bg-blue-500 opacity-25 z-10" id="wrapper"
        onClick={hide}>
            <div className="w-[100px] h-[100px] bg-white rounded"></div>
        </div>
    )
}