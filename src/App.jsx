import { useState } from 'react'
import './App.css'
import Navbar from './component/navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-blue-100 min-h-screen">
      <Navbar />
    </div>
  )
}

export default App
