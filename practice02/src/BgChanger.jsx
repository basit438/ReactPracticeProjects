import React from 'react'
import { useState } from 'react'
function bgChanger() {

    const [color, setColor] = useState("red")
  return (
  <>
    <div className='body' style={{backgroundColor: color, height: "100vh", width: "100vw"}}>
    <div>
      <button onClick={()=> setColor("red")}>red</button>
      <button onClick={()=> setColor("blue")}>blue</button>
      <button onClick={()=> setColor("green")}>Green</button>
      <button  onClick={()=> setColor("yellow")}>Yellow</button>
      <button  onClick={()=> setColor("black")}>Black</button>
    </div>
  </div>
  </>
  )
}

export default bgChanger
