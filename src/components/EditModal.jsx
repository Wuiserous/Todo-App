import { useEffect, useState } from "react";

export default function EditModal(props) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (props.Show) {
      // Trigger animation when modal is shown
      setIsVisible(true);
    } else {
      // Reset visibility state when modal is hidden
      setIsVisible(false);
    }
  }, [props.Show]);

  useEffect(() => {
    // Function to handle Enter key press
    const handleKeyPress = (e) => {
      if (e.key === "Enter") {
        // Hide the modal when Enter key is pressed
        props.hide();
      }
    };

    // Adding event listener for the keydown event
    document.addEventListener("keydown", handleKeyPress);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [props]);

  if (!props.Show) return null;

  const hide = (e) => {
    if (e.target.id === "wrapper") props.hide();
  };

  return (
    <div
      className="fixed flex justify-center items-center z-10 inset-0 bg-black bg-opacity-45"
      id="wrapper"
      onClick={hide}
    >
      {props.children}
    </div>
  );
}
