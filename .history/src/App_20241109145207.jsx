import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="h-screen flex flex-col">
    {/* Top Navigation / Search Bar */}
    <div className="h-16 bg-gray-200 flex items-center justify-center">
      <input
        type="text"
        placeholder="Search or navigate..."
        className="w-2/3 p-2 rounded-md border border-gray-400"
      />
    </div>

    {/* Main Content Area */}
    <div className="flex-1 grid grid-cols-4 grid-rows-2 gap-4 p-4">
      {/* Sidebar - Notes/Tasks Menu */}
      <div className="row-span-2 bg-gray-100 p-4 flex flex-col space-y-4">
        <button className="p-2 bg-blue-500 text-white rounded">+ Add Note</button>
        <div className="flex-1 bg-gray-300 rounded p-4">
          <p>Notes, Deadlines, Links</p>
        </div>
      </div>

      {/* Task Panel */}
      <div className="col-span-2 row-span-2 bg-gray-100 rounded p-4">
        <p>Your tasks here</p>
      </div>

      {/* Progress Panel */}
      <div className="bg-gray-100 rounded p-4">
        <p>Others' Progress</p>
      </div>

      {/* Motivation Panel */}
      <div className="bg-gray-100 rounded p-4">
        <p>Motivation Panel</p>
      </div>
    </div>
  </div>
  )
}

export default App
