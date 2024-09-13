import { useState } from 'react'

import Navbar from './components/Navbar.jsx'
import Textform from './components/Textform.jsx'

function App() {

  return (
    <>
     

     <Navbar name = "Textify" home ="Home" about ="About us" contact ="Contact-Us"/>
     <Textform></Textform>
     
    </>
  )
}

export default App
