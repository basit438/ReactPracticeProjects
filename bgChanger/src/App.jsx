import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("red")

  return (
    <>
    <div className='body' style={{backgroundColor: color, height: "100vh", width: "100vw"}}>

<div className='container py-5 px-2'>

<button className='outline-none px-4 py-2 mx-1  rounded-full text-white shadow-lg bg-slate-600' onClick={() => setColor("red")}>Red</button>
<button  className='outline-none px-4 py-1 mx-1 rounded-full text-white shadow-lg bg-slate-600' onClick={() => setColor("blue")}>Blue</button>
<button className='outline-none px-4 py-1 mx-1 rounded-full text-white shadow-lg bg-slate-600' onClick={() => setColor("green")}>Green</button>
<button  className='outline-none px-4 py-1 mx-1 rounded-full text-white shadow-lg bg-slate-600' onClick={() => setColor("purple")}>Purple</button>
<button  className='outline-none px-4 py-1 mx-1 rounded-full text-white shadow-lg bg-slate-600' onClick={() => setColor("orange")}>Orange</button>
<button  className='outline-none px-4 py-1 mx-1 rounded-full text-white shadow-lg bg-slate-600' onClick={() => setColor("yellow")}>Yellow</button>
<button  className='outline-none px-4 py-1 mx-1 rounded-full text-white shadow-lg bg-slate-600' onClick={() => setColor("pink")}>Pink</button>
<button  className='outline-none px-4 py-1 mx-1 rounded-full text-white shadow-lg bg-slate-600' onClick={() => setColor("brown")}>Brown</button>
<button  className='outline-none px-4 py-1 mx-1 rounded-full text-white shadow-lg bg-slate-600' onClick={() => setColor("black")}>Black</button>
<button  className='outline-none px-4 py-1 mx-1 rounded-full text-white shadow-lg bg-slate-600' onClick={() => setColor("white")}>White</button>
</div>
    </div>
    </>
  )
}

export default App
