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
            setIsVisible(false, 300);
        }
    }, [props.Show]);

    if (!props.Show && !isVisible) return null

    const hide = (e) => {
        if (e.target.id === "wrapper") props.hide();
    };

    return (
        <div className="fixed w-full h-full inset-0 z-10" id="wrapper"
        onClick={hide}>
            <div className={`fixed top-[81px] left-[585px] w-[200px] p-2 h-fit bg-[#1E1E1E] transform transition-all duration-200 ease-in-out text-black overflow-auto rounded ${isVisible ? "scale-100 opacity-100 translate-x-0 translate-y-0" : "scale-50 opacity-0 translate-x-[-100%] translate-y-[100%]"} flex flex-wrap gap-2 justify-center items-center`}>
                {props.children}
                {day && time ? (
                    <div className="w-fit h-fit rounded-lg text-white justify-center items-center flex flex-row gap-1">
                        <span>{day}</span>
                        <span>{month}</span>
                        <span>{year}</span>
                        <span>{time}</span>
                    </div>
                ):(
                    <div className="w-fit h-fit rounded-lg text-white justify-center items-center flex flex-row gap-1">
                        <span>no deadline added yet!</span>
                    </div>
                )}
            </div>
        </div>
    )
}