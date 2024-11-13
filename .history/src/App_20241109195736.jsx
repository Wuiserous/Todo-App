import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="flex flex-wrap w-screen h-screen p-2 gap-2">
      {/* Large square or rectangular box */}
      <div className="bg-red-500 w-10 h-48 flex-shrink-0">
        Large Box
      </div>

      {/* Smaller squares */}
      <div className="bg-blue-500 w-1/2 h-48 md:w-1/4 md:h-48 flex-shrink-0">
        Small Square 1
      </div>
      <div className="bg-green-500 w-1/2 h-48 md:w-1/4 md:h-48 flex-shrink-0">
        Small Square 2
      </div>

      {/* Another large rectangle */}
      <div className="bg-yellow-500 w-full h-48 md:w-1/2 md:h-96 flex-shrink-0">
        Large Box
      </div>

      {/* Small squares to fill the remaining space */}
      <div className="bg-purple-500 w-1/2 h-48 md:w-1/4 md:h-48 flex-shrink-0">
        Small Square 3
      </div>
      <div className="bg-orange-500 w-1/2 h-48 md:w-1/4 md:h-48 flex-shrink-0">
        Small Square 4
      </div>
    </div>
  )
}

export default App
