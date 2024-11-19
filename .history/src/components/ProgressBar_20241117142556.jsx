export default function ProgressBar(props) {
    const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date();
      const startTime = new Date(createdTime);
      const deadline = new Date(`${deadlineDate}T${deadlineTime}`);

      const totalTime = deadline - startTime; // Total time in milliseconds
      const timePassed = currentTime - startTime; // Time passed in milliseconds

      const newProgress = Math.min((timePassed / totalTime) * 100, 100); // Clamp to 100%
      setProgress(newProgress);
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [createdTime, deadlineDate, deadlineTime]);

  // Dynamically determine the color based on progress
  const getColor = () => {
    if (progress <= 50) return "blue"; // 0-50%: Blue
    if (progress <= 75) return "yellow"; // 51-75%: Yellow
    if (progress <= 90) return "orange"; // 76-90%: Orange
    return "red"; // 91-100%: Red
  };
    return (

    )
}