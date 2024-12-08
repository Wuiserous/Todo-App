import React, { useEffect, useRef } from "react";

export default function AddTextArea({ value, onChange, placeholder }) {
  const inputRef = useRef(null);

  const handleInput = () => {
    const input = inputRef.current;
    if (input) {
      // Reset height to auto to calculate the new content height
      input.style.height = "auto";
      // Set height to match the content
      input.style.height = `${input.scrollHeight}px`;
    }
  };

  // Adjust height on mount if value is pre-filled
  useEffect(() => {
    handleInput(); // Trigger the height adjustment on initial render
  }, [value]); // Re-run if the `value` prop changes
  
  return (
    <input
      ref={inputRef}
      onChange={onChange}
      value={value}
      onInput={handleInput}
      placeholder={placeholder}
      style={{
        width: "100%",
        fontSize: "1.8rem",
        color: "white",
        resize: "none",
        overflow: "hidden",
        padding: "0",
        border: "none",
        outline: "none",
        background: "transparent",
        maxWidth: "100%",
      }}
    ></input>
  );
}
