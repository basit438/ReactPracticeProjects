import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BgChanger from './BgChanger';
function App() {



  return (
    <>
    <div className='body bg-slate-600 h-screen flex justify-center items-center flex-col'>
      <h1 className='text-white text-3xl '>Password Generator using React</h1>
      <input type="text" readOnly />

      <div className='changers'>
        <input 
        type="range"
        min={6}
        max={20}
        value={8}
        className='cursor-pointer'
         />
         <label>8</label>
      </div>
    </div>
    </>
  )
}

export default App
