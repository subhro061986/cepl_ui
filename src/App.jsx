import { useState } from 'react'
import './App.css'
import Navigation from "./AppRouter";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation />
    </>
  )
}

export default App
