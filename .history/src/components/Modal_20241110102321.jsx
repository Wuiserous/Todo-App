import { useState } from "react";

export default function Modal(props) {
    const [life, setLife] = useState("Life");
    const [dream, setDream] = useState("Dreams");

    const shuffleText = () => {
        // Swap values between life and dream
        setLife((prevLife) => (prevLife === "Life" ? "Dreams" : "Life"));
        setDream((prevDream) => (prevDream === "Dreams" ? "Life" : "Dreams"));
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
        <div className="w-[500px] h-[400px] bg-white rounded-xl flex flex-col justify-center items-center text-black">
          <h5>{life}</h5>
          <div className="h-[200px] w-[200px] flex items-center justify-center rounded-full bg-blue-500">
            {dream}
          </div>
          <button className="bg-transparent fixed bottom-[25%]" onClick={shuffleText}>
            true
          </button>
        </div>
      </div>
    );
}
