import { useState } from 'react'
function App() {
  const [count, setCount] = useState('olive')
  return (
    <div className="flex  justify-center bg-gray-900 w-full h-screen"
      style={{ background: count }}>
      <div className="flex flex-wrap justify-center rounded bg-white fixed bottom-10 p-1">
        <div className="flex flex-wrap justify-center">
          <button
            onClick={() => { setCount("red") }}
            className="bg-red-700 p-1 m-1 rounded text-white">Red</button>
          <button onClick={() => { setCount("blue") }}
          className="bg-blue-900 rounded p-1 m-1 text-white">Blue</button>
          <button onClick={() => { setCount("pink") }}
          className="bg-pink-900 rounded p-1 m-1 text-white">Pink</button>
        </div>
      </div>
    </div>
  )
}

export default App
