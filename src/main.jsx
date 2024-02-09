import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { PedidosProvider } from './context/PedidosContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PedidosProvider>
      <App />
    </PedidosProvider>
  </React.StrictMode>,
)
