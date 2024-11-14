import { useState } from "react"

export default function LinkModal(props) {
    const [isVisible, setIsVisible] = useState()
    if (!props.show) return null
    return (
        <div className="fixed w-full h-full inset-0 bg-blue-500 opacity-25 z-10">
            <div className="w-[100px] h-[100px] bg-white rounded"></div>
        </div>
    )
}