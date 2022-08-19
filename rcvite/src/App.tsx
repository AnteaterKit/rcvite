import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Dashboard from './components/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
   <Dashboard></Dashboard>
  )
}

export default App
