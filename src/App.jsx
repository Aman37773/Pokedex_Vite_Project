import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Customroutes from './routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Customroutes/>
    </>
  )
}

export default App
