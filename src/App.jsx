import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Converter from './components/hex2rgb'

function App() {
  const [count, setCount] = useState(0)

  return (
   
      <div>
        <Converter/>
      </div>
     
  )
}

export default App
