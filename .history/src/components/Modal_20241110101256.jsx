export default function Modal(props) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
        <div className="w-[500px] h-[400px] bg-white rounded-xl flex flex-col items-center text-black">
        <h1>dreams</h1>
        <div className="h-[200px] w-[200px] flex items-center justify-center rounded-full bg-blue-500">Life</div>
        </div>
      </div>
    )
}