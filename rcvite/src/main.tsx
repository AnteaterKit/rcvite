import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import './index.css'
import { Delivery } from './pages/delivery'
import { Orders } from './pages/orders'
import { Weather } from './pages/weather/Weather'
import { Whiteboard } from './pages/whiteboard'
import { WeatherProvider } from './state/weather/WeatherState'
import { WhiteboardStateProvider } from './state/whiteboard.state'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="orders" element={<Orders msg={'odrers'} />}></Route>
          <Route path="delivery" element={<Delivery msg={'delivery'} />}></Route>
          <Route path="whiteboard" element={<WhiteboardStateProvider>
            <Whiteboard msg={'Whiteboard'} />
            </WhiteboardStateProvider>
            }>
          </Route>
          <Route path="weather" element={<WeatherProvider>
            <Weather msg={'Weather'} />
            </WeatherProvider>
            }>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
