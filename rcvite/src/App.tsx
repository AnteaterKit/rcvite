import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Dashboard from './components/Dashboard'
import React from 'react';
import { FilterProvider } from './state/filter.state';

function App() {
  const [count, setCount] = useState(0)

  return (
    <FilterProvider>
        <Dashboard></Dashboard>
    </FilterProvider>
 
  )
}

export default App


// https://github.com/pankod/refine/tree/next/examples/fineFoods/admin/mui/src/pages