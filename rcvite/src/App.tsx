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


// https://github.com/pankod/refine/tree/next/examples/fineFoods/admin/mui/src/pages