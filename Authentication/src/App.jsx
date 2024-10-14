import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { signInWithPopup } from 'firebase/auth'
import { auth , googleProvider } from './Config/firebase'

function App() {

  try {
    const onLogin = async () => {
      const data =  await signInWithPopup(auth, googleProvider);
      console.log(data);
    }
  } catch (error) {
    console.log(error);
  }

  return (
    <>
     <h1>Authentication -firebase</h1>

     <button onClick={onLogin}>Login with Google</button>
    </>
  )
}

export default App
