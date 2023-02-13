import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import AppProvider from './context'

import { ToastContainer } from 'react-toastify';

import './index.css'
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <ToastContainer />
      <App />
    </AppProvider>
  </React.StrictMode>,
)
