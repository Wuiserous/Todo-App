import React, { useRef, useEffect } from "react";

export default function AddTextArea({ value, onChange, placeholder }) {
  const textareaRef = useRef(null);

  const handleInput = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      // Reset height to auto to calculate the new content height
      textarea.style.height = "auto";
      // Set height to match the content
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  // Adjust height on mount if value is pre-filled
  useEffect(() => {
    handleInput(); // Trigger the height adjustment on initial render
  }, [value]); // Re-run if the `value` prop changes
  
  return (
    <textarea
      ref={textareaRef}
      onChange={onChange}
      value={value}
      onInput={handleInput}
      placeholder={placeholder}
      style={{
        width: "100%",
        resize: "none",
        overflow: "hidden",
        padding: "0",
        border: "none",
        outline: "none",
        background: "transparent",
      }}
    ></textarea>
  );
}
