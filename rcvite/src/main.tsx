import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import './index.css'
import { Orders } from './pages/orders'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />}>
        <Route path="orders" element={<Orders msg={'odrers'} />}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
