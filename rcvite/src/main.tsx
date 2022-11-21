import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import './index.css'
import { Delivery } from './pages/delivery'
import { Orders } from './pages/orders'
import { Whiteboard } from './pages/whiteboard'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="orders" element={<Orders msg={'odrers'} />}></Route>
          <Route path="delivery" element={<Delivery msg={'delivery'} />}></Route>
          <Route path="whiteboard" element={<Whiteboard msg={'Whiteboard'} />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
