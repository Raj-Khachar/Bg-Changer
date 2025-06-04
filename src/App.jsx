/*import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200 flex flex-col justify-end" style={{ backgroundColor: color }}>
      <div className="w-full flex justify-center pb-8">
        <div className="flex flex-wrap justify-center gap-3 shadow-2xl bg-white/90 px-6 py-4 rounded-3xl backdrop-blur-md">
          <button onClick={() => setColor("red")} className="outline-none px-5 py-2 rounded-full text-white font-semibold shadow-lg transition-transform hover:scale-105" style={{ backgroundColor: "red" }}>Red</button>
          <button onClick={() => setColor("green")} className="outline-none px-5 py-2 rounded-full text-white font-semibold shadow-lg transition-transform hover:scale-105" style={{ backgroundColor: "green" }}>Green</button>
          <button onClick={() => setColor("blue")} className="outline-none px-5 py-2 rounded-full text-white font-semibold shadow-lg transition-transform hover:scale-105" style={{ backgroundColor: "blue" }}>Blue</button>
          <button onClick={() => setColor("yellow")} className="outline-none px-5 py-2 rounded-full text-gray-800 font-semibold shadow-lg transition-transform hover:scale-105" style={{ backgroundColor: "yellow" }}>Yellow</button>
          <button onClick={() => setColor("purple")} className="outline-none px-5 py-2 rounded-full text-white font-semibold shadow-lg transition-transform hover:scale-105" style={{ backgroundColor: "purple" }}>Purple</button>
          <button onClick={() => setColor("pink")} className="outline-none px-5 py-2 rounded-full text-white font-semibold shadow-lg transition-transform hover:scale-105" style={{ backgroundColor: "pink" }}>Pink</button>
          <button onClick={() => setColor("cyan")} className="outline-none px-5 py-2 rounded-full text-black font-semibold shadow-lg transition-transform hover:scale-105" style={{ backgroundColor: "cyan" }}>Cyan</button>
          <button onClick={() => setColor("orange")} className="outline-none px-5 py-2 rounded-full text-white font-semibold shadow-lg transition-transform hover:scale-105" style={{ backgroundColor: "orange" }}>Orange</button>
          <button onClick={() => setColor("teal")} className="outline-none px-5 py-2 rounded-full text-white font-semibold shadow-lg transition-transform hover:scale-105" style={{ backgroundColor: "teal" }}>Teal</button>
          <button onClick={() => setColor("brown")} className="outline-none px-5 py-2 rounded-full text-white font-semibold shadow-lg transition-transform hover:scale-105" style={{ backgroundColor: "brown" }}>Brown</button>
        </div>
      </div>
    </div>
  )
}

export default App   */



import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div
      className="w-full h-screen duration-200 flex items-end"
      style={{ backgroundColor: color }}
    >
      <div className="w-full flex justify-center pb-8">
        <div className="flex flex-wrap justify-center gap-3 shadow-2xl bg-white/90 px-6 py-4 rounded-3xl backdrop-blur-md">
          <button onClick={() => setColor("red")} className="outline-none px-5 py-2 rounded-full text-white font-semibold shadow-lg transition-transform hover:scale-105" style={{ backgroundColor: "red" }}>Red</button>
          <button onClick={() => setColor("green")} className="outline-none px-5 py-2 rounded-full text-white font-semibold shadow-lg transition-transform hover:scale-105" style={{ backgroundColor: "green" }}>Green</button>
          <button onClick={() => setColor("blue")} className="outline-none px-5 py-2 rounded-full text-white font-semibold shadow-lg transition-transform hover:scale-105" style={{ backgroundColor: "blue" }}>Blue</button>
          <button onClick={() => setColor("yellow")} className="outline-none px-5 py-2 rounded-full text-gray-800 font-semibold shadow-lg transition-transform hover:scale-105" style={{ backgroundColor: "yellow" }}>Yellow</button>
          <button onClick={() => setColor("purple")} className="outline-none px-5 py-2 rounded-full text-white font-semibold shadow-lg transition-transform hover:scale-105" style={{ backgroundColor: "purple" }}>Purple</button>
          <button onClick={() => setColor("pink")} className="outline-none px-5 py-2 rounded-full text-white font-semibold shadow-lg transition-transform hover:scale-105" style={{ backgroundColor: "pink" }}>Pink</button>
          <button onClick={() => setColor("cyan")} className="outline-none px-5 py-2 rounded-full text-black font-semibold shadow-lg transition-transform hover:scale-105" style={{ backgroundColor: "cyan" }}>Cyan</button>
          <button onClick={() => setColor("orange")} className="outline-none px-5 py-2 rounded-full text-white font-semibold shadow-lg transition-transform hover:scale-105" style={{ backgroundColor: "orange" }}>Orange</button>
          <button onClick={() => setColor("teal")} className="outline-none px-5 py-2 rounded-full text-white font-semibold shadow-lg transition-transform hover:scale-105" style={{ backgroundColor: "teal" }}>Teal</button>
          <button onClick={() => setColor("brown")} className="outline-none px-5 py-2 rounded-full text-white font-semibold shadow-lg transition-transform hover:scale-105" style={{ backgroundColor: "brown" }}>Brown</button>
        </div>
      </div>
    </div>
  )
}

export default App