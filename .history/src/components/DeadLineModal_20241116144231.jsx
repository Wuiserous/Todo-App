import { useState, useEffect } from "react"

export default function DeadLineModal(props) {
    const [isVisible, setIsVisible] = useState()

    const dateString = props.date;
    const timeString = props.time;

    const dateParts = dateString.split("/");
    const monthNumber = parseInt(dateParts[0], 10);
    const day = dateParts[1];
    const year = dateParts[2];

    const month = new Date(year, monthNumber - 1).toLocaleString('en-GB', { month: "short"});

    const time = new Date(`1970-01-01 ${timeString}`).toLocaleTimeString("en-GB", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
    });

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
            <div className="h-fit flex flex-wrap gap-2">
                {props.children}
                <div className="w-fit h-fit p-2 rounded-lg rounded-br-[0px] bg-orange-500 justify-center items-center flex flex-row gap-1">
                    <span>{day}</span>
                    <span>{month}</span>
                    <span>{year}</span>
                    <span>{time}</span>
                </div>
            </div>
            </div>
        </div>
    )
}